# 🚀 Curso de Desarrollo Web Backend

Repositorio del curso de desarrollo web backend para CCOL. Material práctico para aprender los fundamentos del desarrollo backend con JavaScript y Node.js.

## � Contenido del Curso

### 📝 Clase 1: Primeros Pasos
**JavaScript Básico**
- Variables, constantes y tipos de datos
- Objetos y arrays fundamentales

### 🔄 Clase 2: Estructuras de Control
**Control de flujo en JavaScript**
- Condicionales (if, switch)
- Bucles y iteraciones
- Funciones y manejo de datos

### ⚙️ Clase 3: Node.js y Programación Asíncrona
**Fundamentos de Node.js**
- **File System:** Callbacks vs Promises
- **Arrays:** Métodos de recorrido
- **Servidor HTTP:** Servidor básico con Node.js nativo

### 🌐 Clase 4: Servidores Web Avanzados
**APIs y Framework Express**
- **HTTP Module:** Servidor nativo con enrutamiento
- **Express.js:** Framework web y API REST básica

### � Clase 5: Operaciones CRUD
**APIs RESTful Completas**

#### 📋 CRUD Básico (`Clase-5/CRUD-Basico/`)
- **API en memoria** con Express.js
- **Operaciones:** Create, Read, Update, Delete
- **Endpoints:** GET, POST, PUT, DELETE
- **Datos:** Array en memoria con productos

#### � CRUD Avanzado (`Clase-5/CRUD-AVANZADO/`)
- **Persistencia de datos** con archivos JSON
- **File System promises** para operaciones asíncronas
- **Validación de datos** y manejo de errores
- **Base de datos simulada** con `datos.json`

## 🚀 Guía de Uso Rápida

### Clases 1-2: JavaScript Básico
```bash
node Clase-1/primeros-pasos.js
node Clase-2/condicionales.js
```

### Clase 3: Servidor Básico
```bash
cd Clase-3/servidor-basico
node index.js
# Visita: http://localhost:3000
```

### Clase 4: APIs con Express
```bash
# HTTP Module
cd Clase-4/http_Module
npm install && node index.js

# Express Framework
cd Clase-4/Express
npm install && npm start
```

### Clase 5: CRUD Completo
```bash
# CRUD Básico (en memoria)
cd Clase-5/CRUD-Basico
npm install && npm start

# CRUD Avanzado (con persistencia)
cd Clase-5/CRUD-AVANZADO
npm install && npm start
```

**Endpoints CRUD disponibles:**
- `GET /productos` - Listar todos
- `POST /productos` - Crear nuevo
- `PUT /productos/:id` - Actualizar existente
- `DELETE /productos/:id` - Eliminar

## � Prerrequisitos

- **Node.js** v14+
- **npm** (incluido con Node.js)
- **Editor de código** (VS Code recomendado)

## 🎯 Objetivos de Aprendizaje

✅ **Fundamentos:** JavaScript para backend  
✅ **Node.js:** File System y programación asíncrona  
✅ **HTTP:** Servidores y métodos  
✅ **Express:** Framework web moderno  
✅ **CRUD:** Operaciones completas de datos  
✅ **APIs REST:** Desarrollo de servicios web  

---
*Curso de Desarrollo Web Backend - CCOL*
