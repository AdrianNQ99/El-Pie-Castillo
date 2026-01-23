from tempfile import template
from flask import Flask
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from api.models import db, Reservation

app = Flask(__name__)
def setup_admin(app):
    app.config["FLASK_ADMIN_SWATCH"] = "cerulean"
    admin = Admin(app, name='microblog', template_mode="bootstrap3")

    admin.add_view(ModelView(Reservation, db.session))


app.run()