from flask import jsonify, request
from . import db
from .models import Book

def init_routes(app):
    @app.route('/api/books', methods=['GET'])
    def get_books():
        books = Book.query.all()
        return jsonify([book.to_dict() for book in books])

    @app.route('/api/books/<int:id>', methods=['GET'])
    def get_book(id):
        book = Book.query.get_or_404(id)
        return jsonify(book.to_dict())

    @app.route('/api/books', methods=['POST'])
    def create_book():
        data = request.get_json()
        book = Book(title=data['title'], author=data['author'], description=data.get('description', ''))
        db.session.add(book)
        db.session.commit()
        return jsonify(book.to_dict()), 201

    @app.route('/api/books/<int:id>', methods=['PUT'])
    def update_book(id):
        book = Book.query.get_or_404(id)
        data = request.get_json()
        book.title = data.get('title', book.title)
        book.author = data.get('author', book.author)
        book.description = data.get('description', book.description)
        db.session.commit()
        return jsonify(book.to_dict())

    @app.route('/api/books/<int:id>', methods=['DELETE'])
    def delete_book(id):
        book = Book.query.get_or_404(id)
        db.session.delete(book)
        db.session.commit()
        return '', 204