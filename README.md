# 🏦 Sofka FrontEnd Test (React Native)

Aplicación móvil desarrollada con React Native y Expo para la gestión de productos bancarios.

## 🚀 Tecnologías Principales

- ⚛️ React Native
- 📱 Expo
- 🔄 React Hook Form
- 📝 Zod (Validación de esquemas)
- 📦 Zustand (Gestión de estado)
- 🧪 Jest (Testing)
- 📱 React Native Paper

## 📁 Estructura del Proyecto

```
sofkatest/
├── app/                      # Rutas y pantallas principales
│   ├── products/            # Módulo de productos
│   │   ├── [id].tsx        # Detalle de producto
│   │   ├── create.tsx      # Creación de producto
│   └── _layout.tsx         # Layout principal
│   └──  index.tsx         # Lista de productos
├── components/              # Componentes reutilizables
│   ├── Button.tsx          # Botón personalizado
│   ├── FormFields.tsx      # Campos de formulario
│   ├── HeaderTitle.tsx     # Título del encabezado
│   ├── Modal.tsx           # Modal de confirmación
│   └── SearchBar.tsx       # Barra de búsqueda
├── store/                   # Estado global
│   └── useProductsStore.ts # Store de productos
├── types/                   # Tipos TypeScript
│   └── products.ts         # Tipos de productos
├── utils/                   # Utilidades
│   ├── Colors.ts           # Colores de la aplicación
│   └── schema.ts           # Esquemas de validación
└── __tests__/              # Tests unitarios
    └── components/         # Tests de componentes
```

## ✨ Características Principales

- CRUD General para la administracion de productos con sus validaciones

### 📱 Interfaz de Usuario

- 🎨 Diseño moderno y responsivo
- 🔍 Barra de búsqueda funcional
- 📝 Formularios validados
- 📅 Selector de fechas integrado

### 📦 Gestión de Productos

- ➕ Creación de nuevos productos
- 📋 Lista de productos con búsqueda
- 🔄 Edición de productos existentes
- 🗑️ Eliminación con confirmación

### 🔒 Validación de Datos

- ✅ Validación de ID único
- 📅 Validación de fechas
- 📝 Validación de campos requeridos
- ⚠️ Mensajes de error personalizados

### 🧪 Testing

- ✅ Tests unitarios con Jest
- 🔍 Tests de componentes
- 🎯 Cobertura de pruebas
- 🔄 Tests automatizados

## 🚀 Instalación

1. Clonar el repositorio:

```bash
git clone [url-del-repositorio]
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar la aplicación:

```bash
npm start
```

## 🧪 Ejecutar Tests

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests en modo watch
npm run test:watch

# Generar reporte de cobertura
npm run test:coverage
```

## 📱 Características Técnicas

### Estado Global

- Implementado con Zustand
- Persistencia de datos
- Acciones y selectores optimizados

### Formularios

- React Hook Form para gestión
- Zod para validación
- Campos personalizados
- Manejo de errores

### Navegación

- Expo Router
- Navegación tipo stack
- Parámetros dinámicos
- Transiciones suaves

### UI/UX

- Componentes reutilizables
- Diseño consistente
- Feedback visual
- Accesibilidad

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.
