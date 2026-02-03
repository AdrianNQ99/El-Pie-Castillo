import os
import dj_database_url
from .base import *

DEBUG = False
SECRET_KEY = os.environ.get('SECRET_KEY')

ALLOWED_HOSTS = [
    os.environ.get('RENDER_EXTERNAL_URL', 'localhost'),
    'el-pie-castillo.vercel.app',
    'el-pie-castillo.onrender.com',
]

# Database
DATABASES = {
    'default': dj_database_url.config(
        default='sqlite:///db.sqlite3',
        conn_max_age=600,
        conn_health_checks=True,
    )
}

# Static files
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# CORS settings if needed
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://el-pie-castillo.vercel.app",
    os.environ.get('FRONTEND_URL', 'https://el-pie-castillo.vercel.app'),  
]
