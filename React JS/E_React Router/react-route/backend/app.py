from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_migrate import Migrate
from models import db, Product
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def create_app():
    app = Flask(__name__, static_folder="static", static_url_path="/static")
    CORS(app)

    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(BASE_DIR, 'products.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    migrate = Migrate(app, db)

    @app.before_first_request
    def create_tables():
        db.create_all()

    @app.get("/products")
    def get_products():
        prods = Product.query.all()
        return jsonify([p.to_dict() for p in prods]), 200

    @app.get("/product/<int:id>")
    def get_product(id):
        p = Product.query.get_or_404(id)
        return jsonify(p.to_dict()), 200

    @app.post("/buy/<int:id>")
    def buy(id):
        p = Product.query.get_or_404(id)
        data = request.json or {}
        user = data.get("user", "Anonymous")
        # NOTE: This is demo only — no real order persistence.
        return jsonify({
            "message": "Order placed successfully",
            "product": p.to_dict(),
            "user": user
        }), 200

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
