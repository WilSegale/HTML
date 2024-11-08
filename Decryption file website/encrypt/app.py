from flask import Flask, render_template, request, redirect, url_for, flash, send_file
import os
import subprocess
import uuid
from werkzeug.utils import secure_filename

app = Flask(__name__)
app.secret_key = "your_secret_key"  # Replace with a secure secret key

UPLOAD_FOLDER = "uploads"

# Set the ENCRYPTED_FOLDER to the user's desktop path
DESKTOP_FOLDER = os.path.join(os.path.expanduser("~"), "Desktop")
ENCRYPTED_FOLDER = os.path.join(DESKTOP_FOLDER, "encrypted_files")
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(ENCRYPTED_FOLDER, exist_ok=True)

# Function to attempt encryption
def encrypt_file(input_file, output_file, password):
    """Encrypt a file using openssl with aes-256-cbc."""
    command = [
        "openssl", "enc", "-aes-256-cbc", "-salt",
        "-in", input_file, "-out", output_file,
        "-pass", f"pass:{password}"
    ]
    try:
        result = subprocess.run(command, stderr=subprocess.DEVNULL)
        return result.returncode == 0
    except Exception as e:
        print(f"Error during encryption: {e}")
        return False

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        # Check if files were uploaded
        if "file" not in request.files or "password" not in request.form:
            flash("Please upload a file and provide a password.", "danger")
            return redirect(url_for("home"))

        # Retrieve uploaded file and password
        uploaded_file = request.files["file"]
        password = request.form["password"]

        if uploaded_file.filename == "":
            flash("No file selected.", "danger")
            return redirect(url_for("home"))

        # Secure filename and save the file
        filename = secure_filename(uploaded_file.filename)
        input_file_path = os.path.join(UPLOAD_FOLDER, filename)
        uploaded_file.save(input_file_path)

        # Generate a unique filename for the encrypted file
        encrypted_filename = f"{uuid.uuid4().hex}.enc"
        encrypted_file_path = os.path.join(ENCRYPTED_FOLDER, encrypted_filename)

        # Encrypt the file
        if encrypt_file(input_file_path, encrypted_file_path, password):
            flash("File encrypted successfully! The file has been saved to your Desktop.", "success")
            os.remove(input_file_path)  # Optionally remove the original file after encryption
            return redirect(url_for("download_file", filename=encrypted_filename))
        else:
            flash("Encryption failed. Please check the file and password.", "danger")
            os.remove(input_file_path)  # Remove the uploaded file in case of failure

    return render_template("index.html")

@app.route("/download/<filename>")
def download_file(filename):
    file_path = os.path.join(ENCRYPTED_FOLDER, filename)
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    flash("File not found.", "danger")
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run(debug=True)
