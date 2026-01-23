from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass



db = SQLAlchemy()

@dataclass
class Reservation(db.Model):
    id: int
    customer_name: str
    reservation_date: str
    number_of_people: int

    id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.String(100), nullable=False)
    reservation_date = db.Column(db.String(50), nullable=False)
    number_of_people = db.Column(db.Integer, nullable=False)
    def __repr__(self):
        return f"<Reservation {self.customer_name} on {self.reservation_date}>"
