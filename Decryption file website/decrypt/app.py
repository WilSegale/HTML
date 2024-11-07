from flask import Flask, render_template, request, redirect, url_for, flash
import subprocess
import os
import time
import uuid
from werkzeug.utils import secure_filename

app = Flask(__name__)

# Load the secret key from a dictionary in rockyou.txt
secret_data = {}
try:
    with open('rockyou.txt', 'r') as file:
        for line in file:
            if ':' in line:
                key, value = line.strip().split(':')
                secret_data[key.strip()] = value.strip()
except FileNotFoundError:
    print("Error: 'rockyou.txt' file not found. Using default secret key.")
    
# Set Flask's secret key from the loaded dictionary or use a default
app.secret_key = secret_data.get('secret_key', 'default_secret_key')

UPLOAD_FOLDER = "uploads"
DECRYPTED_FOLDER = "decrypted_files"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(DECRYPTED_FOLDER, exist_ok=True)

attempt_count = 0  # Track attempts globally

# Decryption function
def decrypt_file(input_file, output_file, password):
    try:
        result = subprocess.run(
            ["openssl", "enc", "-d", "-aes-256-cbc", "-in", input_file, "-out", output_file, "-pass", f"pass:{password}"],
            stderr=subprocess.DEVNULL
        )
        return result.returncode == 0
    except Exception as e:
        print(f"Error during decryption: {e}")
        return False

# Validation function
def validate_decryption(output_file):
    try:
        result = subprocess.run(
            ["file", output_file],
            capture_output=True,
            text=True
        )
        return "text" in result.stdout
    except Exception as e:
        print(f"Error during validation: {e}")
        return False

@app.route("/", methods=["GET", "POST"])
def home():
    global attempt_count
    if request.method == "POST":
        if "input_file" not in request.files or "password_file" not in request.files:
            flash("Please upload both an encrypted file and a password file.", "danger")
            return redirect(url_for("home"))

        # Securely save uploaded files
        input_file = request.files["input_file"]
        password_file = request.files["password_file"]

        encrypted_filename = secure_filename(input_file.filename)
        encrypted_path = os.path.join(UPLOAD_FOLDER, encrypted_filename)
        input_file.save(encrypted_path)

        password_filename = secure_filename(password_file.filename)
        password_path = os.path.join(UPLOAD_FOLDER, password_filename)
        password_file.save(password_path)

        output_file = os.path.join(DECRYPTED_FOLDER, f"decrypted_{uuid.uuid4().hex}.txt")

        # Read passwords and start timing
        with open(password_path, "r") as f:
            password_list = f.readlines()
            total_passwords = len(password_list)
        flash(f"Attempting decryption with {total_passwords} passwords.", "info")

        attempt_count = 0
        start_time = time.time()

        # Attempt decryption
        for password in password_list:
            password = password.strip()
            attempt_count += 1

            if decrypt_file(encrypted_path, output_file, password):
                if validate_decryption(output_file):
                    total_time = time.time() - start_time
                    flash(f"File decrypted successfully with password: {password}", "success")
                    flash(f"Total attempts: {attempt_count}", "info")
                    flash(f"Total time elapsed: {total_time:.2f} seconds", "info")

                    # Clean up after success
                    os.remove(encrypted_path)
                    os.remove(password_path)
                    return redirect(url_for("home"))
                else:
                    os.remove(output_file)  # Remove output if invalid

        # Failure case
        flash("Decryption failed. No valid password found.", "danger")
        os.remove(encrypted_path)
        os.remove(password_path)

    return render_template("index.html", attempt_count=attempt_count)

@app.route("/show_attempts", methods=["POST"])
def show_attempts():
    flash(f"Total attempts so far: {attempt_count}", "info")
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run(debug=False)