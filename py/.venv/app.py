from flask import Flask
from random import seed
from random import randint
import os;
from dotenv import load_dotenv
from flask_cors import CORS, cross_origin

load_dotenv()

app = Flask(__name__)
seed(1)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

PORT = os.environ["NUMPY_PORT"]

@app.route('/')
@cross_origin()
def hello_world():
    content = randint(10000, 99999)
    return str(content)

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=PORT)
