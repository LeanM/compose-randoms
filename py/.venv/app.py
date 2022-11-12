from flask import Flask
from random import seed
from random import randint
import os;

app = Flask(__name__)
seed(1)

#PORT = os.environ["NUMPY_PORT"]

@app.route('/')
def hello_world():
    content = randint(10000, 99999)
    return str(content)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=3000)
