from flask import Flask, render_template, request, redirect, url_for, flash, send_file
import os
import subprocess
import uuid
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = "your_secret_key"  # Replace with a secure key

# Set up folders
UPLOAD_FOLDER = "uploads"
DESKTOP_FOLDER = os.path.join(os.path.expanduser("~"), "Desktop")
DECRYPTED_FOLDER = os.path.join(DESKTOP_FOLDER, "decrypted_files")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(DECRYPTED_FOLDER, exist_ok=True)

def decrypt_file(input_file, output_file, password):
    """Decrypt a file using OpenSSL with AES-256-CBC."""
    command = [
        "openssl", "enc", "-d", "-aes-256-cbc",
        "-in", input_file, "-out", output_file,
        "-pass", f"pass:{password}"
    ]
    try:
        result = subprocess.run(command, stderr=subprocess.PIPE)
        if result.returncode != 0:
            print(f"Decryption error: {result.stderr.decode()}")
        return result.returncode == 0
    except Exception as e:
        print(f"Error during decryption: {e}")
        return False

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        input_file = request.files.get("input_file")
        password_file = request.files.get("password_file")

        if not input_file or input_file.filename == "":
            flash("No encrypted file selected. Please upload a file.", "danger")
            return redirect(url_for("home"))

        if not password_file or password_file.filename == "":
            flash("No password file selected. Please upload a password file.", "danger")
            return redirect(url_for("home"))

        # Save uploaded files
        input_filename = secure_filename(input_file.filename)
        input_file_path = os.path.join(UPLOAD_FOLDER, input_filename)
        input_file.save(input_file_path)

        password_filename = secure_filename(password_file.filename)
        password_file_path = os.path.join(UPLOAD_FOLDER, password_filename)
        password_file.save(password_file_path)

        # Read password from the password file
        try:
            with open(password_file_path, "r") as f:
                password = f.read().strip()
        except Exception as e:
            flash(f"Failed to read the password file: {e}", "danger")
            os.remove(input_file_path)
            os.remove(password_file_path)
            return redirect(url_for("home"))

        # Generate a unique name for the decrypted file
        decrypted_filename = f"{uuid.uuid4().hex}_decrypted.txt"
        decrypted_file_path = os.path.join(DECRYPTED_FOLDER, decrypted_filename)

        try:
            if decrypt_file(input_file_path, decrypted_file_path, password):
                flash(
                    f"File decrypted successfully! Password used: '{password}'. Download it from your Desktop.",
                    "success"
                )
                os.remove(input_file_path)
                os.remove(password_file_path)
                return redirect(url_for("download_file", filename=decrypted_filename))
            else:
                flash("Decryption failed. Please check the file and password.", "danger")
        finally:
            if os.path.exists(input_file_path):
                os.remove(input_file_path)
            if os.path.exists(password_file_path):
                os.remove(password_file_path)

    return render_template("index.html")

@app.route("/Desktop/<filename>")
def download_file(filename):
    file_path = os.path.join(DECRYPTED_FOLDER, filename)
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    flash("File not found.", "danger")
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run(debug=True)
