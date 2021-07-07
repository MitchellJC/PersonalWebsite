"""My personal website."""

__author__ = "Mitchell Clark"

from flask import Flask, render_template, send_from_directory, url_for

app = Flask(__name__)

@app.route("/")
def home():
	"""First page opened on website. Contains showcased projects."""
	return render_template("index.html")

@app.route("/about")
def about_me():
	"""Page containing short paragraph about myself."""
	return render_template("about.html")

@app.route("/contact")
def contact_me():
	"""Page containing a form to send emails to me."""
	return render_template("contact.html")

@app.route("/resume")
def resume():
	"""Page containing short paragraph about myself."""
	return send_from_directory("static", "MitchellClarkResume.pdf")

if __name__ == "__main__":
	app.run(debug=True)