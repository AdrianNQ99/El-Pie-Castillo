from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to the El Pie Castillo API!"
if __name__ == '__main__':
    app.run(debug=True)

@app.route('/status')
def status():
    return {"status": "API is running smoothly!"}
