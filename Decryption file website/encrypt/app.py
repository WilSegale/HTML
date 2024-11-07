from flask import Flask, render_template, request, redirect, url_for, flash
import subprocess
import os
import uuid
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = "Cmonster2006"

UPLOAD_FOLDER = "uploads"
ENCRYPTED_FOLDER = "encrypted_files"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(ENCRYPTED_FOLDER, exist_ok=True)

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        # Check for uploaded files
        if "input_file" not in request.files or "password" not in request.form:
            flash("Please upload a file and provide a password for encryption.", "danger")
            return redirect(url_for("home"))

        # Get file and password from the form
        input_file = request.files["input_file"]
        password = request.form["password"]

        # Secure the filename and define file paths
        input_filename = secure_filename(input_file.filename)
        input_path = os.path.join(UPLOAD_FOLDER, input_filename)
        input_file.save(input_path)

        encrypted_filename = f"encrypted_{uuid.uuid4().hex}.bin"
        encrypted_path = os.path.join(ENCRYPTED_FOLDER, encrypted_filename)

        # Attempt encryption using the specified password
        if encrypt_file(input_path, encrypted_path, password):
            flash("File encrypted successfully!", "success")
            return redirect(url_for("download_file", filename=encrypted_filename))
        else:
            flash("Encryption failed. Please try again.", "danger")

    return render_template("index.html")

# Function to perform encryption
def encrypt_file(input_file, output_file, password):
    try:
        result = subprocess.run(
            ["openssl", "enc", "-aes-256-cbc", "-salt", "-in", input_file, "-out", output_file, "-pass", f"pass:{password}"],
            stderr=subprocess.PIPE
        )
        return result.returncode == 0
    except Exception as e:
        print(f"Error during encryption: {e}")
        return False

# Route to download the encrypted file
@app.route("/download/<filename>")
def download_file(filename):
    return redirect(url_for("static", filename=f"encrypted_files/{filename}"))

if __name__ == "__main__":
    app.run(debug=True)
