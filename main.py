"""My personal website."""

__author__ = "Mitchell Clark"

import os
from flask import (Flask, render_template, send_from_directory, url_for, 
		   request, flash, redirect)
from flask_mail import Mail, Message

email_user = os.environ.get("EMAIL_USER")
email_pass = os.environ.get("EMAIL_PASS")

mail_settings = {
    "DEBUG": True,
    "MAIL_SERVER": "smtp.gmail.com",
    "MAIL_PORT": 587,
    "MAIL_USE_TLS": True,
    "MAIL_USE_SSL": True,
    "MAIL_USERNAME": email_user,
    "MAIL_PASSWORD": email_pass,
    "MAIL_DEFAULT_SENDER": email_user,
    "MAIL_MAX_EMAILS": 5,
    "SUPPRESS_SEND": True
}

app = Flask(__name__)
app.secret_key = "password" # Change for deployment.

app.config.update(mail_settings)
mail = Mail(app)

@app.route("/")
def home():
	"""Serve index page, contains showcased projects."""
	return render_template("index.html")

@app.route("/about")
def about_me():
	"""Serve page containing short paragraph about myself."""
	return render_template("about.html")

@app.route("/contact", methods=["GET" ,"POST"])
def contact_me():
	"""Serve page containing a form to send emails to me."""
	if request.method == "POST":
		name_text = request.form["name"]
		email_text = request.form["email"]
		message_text = request.form["message"]

		body_text = f"Name: {name_text}\n\n" + message_text
		message = Message(f"Message from: {email_text}", body=body_text, recipients=[email_user])
		mail.send(message)
		flash("Message successfully sent.")
		return redirect(url_for("contact_me"))
	else:
		return render_template("contact.html")

if __name__ == "__main__":
	app.run(debug=True) # Turn off for deployment.