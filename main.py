"""My personal website."""

__author__ = "Mitchell Clark"

from flask import Flask, url_for, render_template, send_from_directory

app = Flask(__name__)

@app.route("/")
def home():
	"""First page opened on website. Contains showcased projects."""
	return render_template("index.html")

@app.route("/aboutme")
def about_me():
	"""Page containing short paragraph about myself."""
	return render_template("aboutme.html")

@app.route("/contactme")
def contact_me():
	"""Page containing a form to send emails to me."""
	return render_template("contactme.html")

@app.route("/resume")
def resume():
	"""Page containing short paragraph about myself."""
	return send_from_directory("static", "MitchellClarkResume.pdf")

if __name__ == "__main__":
	app.run(debug=True)