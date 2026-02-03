# Frontend - El Pie Castillo 🍽️

Sitio web moderno y responsivo para el restaurante El Pie Castillo, construido con React y Tailwind CSS.

## 📋 Descripción

Este frontend proporciona una experiencia de usuario elegante y moderna para el restaurante El Pie Castillo. Incluye navegación intuitiva, visualización del menú dinámico, sistema de reservas y diseño completamente responsivo.

## 🚀 Tecnologías

- **React 19**: Biblioteca JavaScript para interfaces de usuario
- **Vite**: Herramienta de desarrollo rápida
- **Tailwind CSS**: Framework CSS utilitario
- **React Icons**: Biblioteca de iconos
- **Node.js 16+**

## 📦 Instalación

### Prerrequisitos
- Node.js 16 o superior
- npm o yarn

### Configuración del Entorno

```bash
# Navegar al directorio del frontend
cd web

# Instalar dependencias
npm install

# Ejecutar el servidor de desarrollo
npm run dev
```

## 🔧 Uso

### Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Vista previa de la build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint para verificar código
```

## 🏗️ Estructura del Proyecto

```
web/
├── public/                  # Archivos estáticos
│   └── assets/             # Imágenes y recursos
├── src/
│   ├── component/          # Componentes React reutilizables
│   │   ├── About.jsx       # Sección "Sobre nosotros"
│   │   ├── Contact.jsx     # Información de contacto
│   │   ├── Footer.jsx      # Pie de página
│   │   ├── Gallery.jsx     # Galería de imágenes
│   │   ├── Hero.jsx        # Sección principal
│   │   ├── Menu.jsx        # Menú del restaurante
│   │   ├── Navbar.jsx      # Barra de navegación
│   │   └── Reservation.jsx # Formulario de reservas
│   ├── data/               # Datos estáticos
│   │   ├── images.js       # URLs de imágenes
│   │   └── menu.js         # Datos del menú (legacy)
│   ├── pages/              # Páginas principales
│   │   └── Home.jsx        # Página principal
│   ├── App.jsx             # Componente principal
│   ├── index.css           # Estilos globales
│   └── main.jsx            # Punto de entrada
├── eslint.config.js        # Configuración de ESLint
├── package.json            # Dependencias y scripts
├── tailwind.config.js      # Configuración de Tailwind CSS
└── vite.config.js          # Configuración de Vite
```

## 🎨 Componentes Principales

### Navbar
- Navegación responsive con menú móvil
- Enlaces de anclaje a secciones de la página
- Diseño elegante con efectos hover

### Hero
- Sección principal con imagen de fondo
- Texto descriptivo del restaurante
- Llamado a la acción para reservas

### Menu
- **Funcionalidad**: Carga dinámica desde API REST
- **Características**:
  - Agrupación por categorías
  - Precios formateados
  - Diseño responsivo
  - Estados de carga y error

### Reservation
- **Funcionalidad**: Formulario completo de reservas
- **Validaciones**:
  - Campos obligatorios
  - Formato de email
  - Número de teléfono
  - Fechas futuras
- **Integración**: Envío a API REST

### About, Contact, Gallery, Footer
- Secciones informativas estáticas
- Diseño consistente con el resto del sitio

## 🔗 Integración con Backend

### API Endpoints Utilizados

```javascript
// Obtener menú
const response = await fetch('http://localhost:8000/api/menu/');
const dishes = await response.json();

// Crear reserva
const reservationData = {
  name: "Juan Pérez",
  email: "juan@example.com",
  phone: "600123456",
  date: "2026-02-15",
  time: "20:00",
  guests: 4,
  message: "Comentarios adicionales"
};

await fetch('http://localhost:8000/api/reservations/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(reservationData)
});
```

### Manejo de Estados

```javascript
const [menuCategories, setMenuCategories] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

## 🎨 Estilos y Diseño

### Tailwind CSS
- **Utilidades**: Sistema de clases utilitarias
- **Responsive**: Breakpoints para diferentes dispositivos
- **Colores**: Paleta dorada y negra elegante
- **Tipografía**: Fuentes sans-serif modernas

### Diseño Responsivo
- **Mobile First**: Optimizado para móviles
- **Tablet**: Adaptación a tablets
- **Desktop**: Experiencia completa en pantallas grandes

### Tema Visual
- **Colores principales**: Negro (#000000), Dorado (#D4AF37)
- **Fondos**: Gradientes sutiles y transparencias
- **Efectos**: Hover states y transiciones suaves
