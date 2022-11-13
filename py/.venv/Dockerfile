FROM python:3.8-slim

# Install pip requirements
COPY requirements.txt .
RUN python -m pip install -r requirements.txt
RUN pip install python-dotenv
RUN pip install -U flask-cors

WORKDIR /app
COPY . /app

CMD ["python3" , "app.py"]
