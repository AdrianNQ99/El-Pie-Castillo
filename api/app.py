from flask import Flask, request, jsonify
from flask_cors import CORS
from api.models import db, Reservation
import os

app = Flask(__name__)
CORS(app)

# Configuración de base de datos
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///restaurant.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inicializar la base de datos
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return "Welcome to the El Pie Castillo API!"

@app.route('/status')
def status():
    return {"status": "API is running smoothly!"}

@app.route('/api/reservations', methods=['POST'])
def create_reservation():
    data = request.get_json()
    
    new_reservation = Reservation(
        customer_name=data.get('customer_name'),
        reservation_date=data.get('reservation_date'),
        number_of_people=data.get('number_of_people')
    )
    
    db.session.add(new_reservation)
    db.session.commit()
    
    return jsonify({
        "message": "Reservation created successfully",
        "reservation": {
            "id": new_reservation.id,
            "customer_name": new_reservation.customer_name,
            "reservation_date": new_reservation.reservation_date,
            "number_of_people": new_reservation.number_of_people
        }
    }), 201

if __name__ == '__main__':
    app.run(debug=True)
