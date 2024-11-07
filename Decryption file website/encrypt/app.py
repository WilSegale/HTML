from flask import Flask, render_template, request, redirect, url_for, flash
import subprocess
import os
import time
from pathlib import Path

app = Flask(__name__)
app.secret_key = "your_secret_key"

GREEN = "#28a745"
RED = "#dc3545"
RESET = "#ffffff"

start_time = time.time()
password_count = 0

# Function to attempt decryption
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
    global password_count, start_time
    if request.method == "POST":
        input_file = request.form["input_file"]
        password_file = request.form["password_file"]
        output_file = "decrypted.txt"

        if not os.path.exists(password_file):
            flash("Password file not found!", "danger")
            return redirect(url_for("home"))

        password_count = 0
        start_time = time.time()

        with open(password_file, "r") as f:
            for password in f:
                password = password.strip()
                password_count += 1
                total_time = time.time() - start_time

                if decrypt_file(input_file, output_file, password):
                    if validate_decryption(output_file):
                        flash(f"File decrypted successfully with password: {password}", "success")
                        flash(f"Total attempts: {password_count}", "info")
                        flash(f"Total time elapsed: {total_time:.2f} seconds", "info")
                        return redirect(url_for("home"))
                    else:
                        if os.path.exists(output_file):
                            os.remove(output_file)
            flash("Decryption failed. No valid password found.", "danger")
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)