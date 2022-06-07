import flask
from flask import Flask
from flask_cors import CORS
from backend.scrape import get_options_master

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello_world():
  return "<p>API is running</p>"
  pass


@app.route('/api/v1/options/<ticker>')
@app.route('/api/v1/options/<ticker>/<date>')
def get_options(ticker, date=""):
  response = flask.jsonify(get_options_master(ticker, date))
  response.headers.add('Access-Control-Allow-Origin', '*')
  return response
