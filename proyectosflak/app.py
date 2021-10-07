from flask import Flask

app = Flask(__name__)
@app.route('/')

def saludo():
    return "Hola mundo Flask"



# set "FLASK_ENV=development"
# set FLASK_DEBUG=True
# pip install validate_email
# pip install yagmail