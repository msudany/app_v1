"""
Entry Point
"""


from flask import Flask
from flask_cors import CORS
from app import create_app
from app.models import db
from app.routes import init_routes

app = create_app()
CORS(app)  # Enable CORS for all routes
init_routes(app)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)