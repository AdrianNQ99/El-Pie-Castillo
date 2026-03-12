# Backend - El Pie Castillo 🍽️

API REST construida con Django para el sistema de gestión del restaurante El Pie Castillo.

## 📋 Descripción

Este backend proporciona una API REST completa para gestionar el menú y las reservas del restaurante. Está construido con Django y Django REST Framework, ofreciendo endpoints seguros y escalables.

## 🚀 Tecnologías

- **Django 6.0.2**: Framework web Python
- **Django REST Framework**: Construcción de APIs REST
- **PostgreSQL 16**: Base de datos
- **Docker Compose**: Servicio local de base de datos
- **django-cors-headers**: Manejo de CORS para frontend
- **Python 3.8+**

## 📦 Instalación

### Prerrequisitos
- Docker Desktop
- Python 3.8 o superior
- pip (gestor de paquetes de Python)

### Configuración del Entorno

```bash
# Desde la raíz del proyecto, levantar PostgreSQL
docker compose up -d

# Navegar al directorio del backend
cd api

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar migraciones de base de datos
python manage.py migrate

# (Opcional) Crear superusuario para acceder al admin
python manage.py createsuperuser
```

Antes de ejecutar Django, crea `.env` en la raíz del proyecto con estas variables:

```env
SECRET_KEY=tu_clave_larga_y_segura
DATABASE_URL=postgres://dev:dev@localhost:5432/elpiecastillo
DEBUG=True
DJANGO_SETTINGS_MODULE=config.settings.dev
```

## 🔧 Uso

### Ejecutar el Servidor de Desarrollo

```bash
python manage.py runserver
```

El servidor estará disponible en: `http://localhost:8000`

### Acceder al Panel de Administración

```
URL: http://localhost:8000/admin/
Usuario: [tu-superusuario]
Contraseña: [tu-contraseña]
```

## 📊 API Endpoints

### Menú (`/api/menu/`)

#### Obtener todos los platos
```http
GET /api/menu/
```

**Respuesta:**
```json
[
  {
    "id": 1,
    "category": 1,
    "category_name": "Entrantes",
    "name": "Soupe à l'oignon",
    "description": "Sopa de cebolla gratinada con queso Gruyère",
    "price": "8.50",
    "available": true
  }
]
```

### Reservas (`/api/reservations/`)

#### Obtener todas las reservas
```http
GET /api/reservations/
```

#### Crear nueva reserva
```http
POST /api/reservations/
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "600123456",
  "date": "2026-02-15",
  "time": "20:00",
  "guests": 4,
  "message": "Mesa junto a la ventana por favor"
}
```

**Respuesta exitosa:**
```json
{
  "id": 1,
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "phone": "600123456",
  "date": "2026-02-15",
  "time": "20:00",
  "guests": 4,
  "message": "Mesa junto a la ventana por favor",
  "created_at": "2026-02-03T10:30:00Z"
}
```

## 🏗️ Estructura del Proyecto

```
api/
├── config/                 # Configuración principal de Django
│   ├── settings/
│   │   ├── base.py        # Configuración base
│   │   ├── dev.py         # Configuración de desarrollo
│   │   └── prod.py        # Configuración de producción
│   ├── urls.py            # URLs principales
│   └── wsgi.py
├── apps/                   # Aplicaciones Django
│   ├── menu/              # Gestión del menú
│   │   ├── models.py      # Modelos de datos
│   │   ├── serializers.py # Serializadores DRF
│   │   ├── views.py       # Vistas de la API
│   │   ├── urls.py        # URLs de la app
│   │   └── admin.py       # Configuración del admin
│   └── reservations/      # Sistema de reservas
│       ├── models.py
│       ├── serializers.py
│       ├── views.py
│       ├── urls.py
│       └── admin.py
├── manage.py              # Script de gestión de Django
├── requirements.txt       # Dependencias Python
└── requirements.txt       # Dependencias Python
```

## 🧪 Modelos de Datos

### Categoría
```python
class Category(models.Model):
    name = models.CharField(max_length=100)
    is_active = models.BooleanField(default=True)
```

### Plato
```python
class Dish(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    available = models.BooleanField(default=True)
```

### Reserva
```python
class Reservation(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    date = models.DateField()
    time = models.TimeField()
    guests = models.PositiveIntegerField()
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
```