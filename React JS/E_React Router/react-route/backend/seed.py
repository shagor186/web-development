from app import create_app
from models import db, Product
import os

app = create_app()
app.app_context().push()

# Remove existing DB if you want fresh seed (optional)
# os.remove(os.path.join(os.path.dirname(__file__), 'products.db'))

# Create tables
db.create_all()

# Check if already seeded
if Product.query.first():
    print("Already seeded.")
else:
    p1 = Product(
        name="Smart Watch",
        price=2500,
        image="/static/images/watch.jpg",
        description="High quality smart watch."
    )
    p2 = Product(
        name="Bluetooth Headphone",
        price=1800,
        image="/static/images/headphone.jpg",
        description="Noise cancelling headphone."
    )
    p3 = Product(
        name="Wireless Mouse",
        price=900,
        image="/static/images/mouse.jpg",
        description="Ergonomic wireless mouse."
    )
    db.session.add_all([p1, p2, p3])
    db.session.commit()
    print("Seeded 3 products.")
