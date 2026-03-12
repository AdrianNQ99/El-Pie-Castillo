import os
from .base import *

ALLOWED_HOSTS = [
    os.environ.get('RENDER_EXTERNAL_URL', 'localhost'),
    'el-pie-castillo.vercel.app',
    'el-pie-castillo.onrender.com',
]

# Static files
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# CORS settings if needed
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "https://el-pie-castillo.vercel.app",
    os.environ.get('FRONTEND_URL', 'https://el-pie-castillo.vercel.app'),
]
