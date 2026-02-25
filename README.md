# 🎬 CineApp

Aplicación web de catálogo cinematográfico desarrollada con **React + Bootstrap + Firebase**, siguiendo una **arquitectura hexagonal** (puertos y adaptadores).

---

## 📁 Estructura del proyecto

```
src/
├── core/                           # Capa de dominio y aplicación
│   ├── domain/
│   │   ├── entities/               # Entidades del dominio (Movie)
│   │   └── ports/                  # Interfaces/contratos de repositorios
│   └── application/
│       └── usecases/               # Casos de uso (lógica de negocio)
├── infrastructure/
│   └── firebase/                   # Implementaciones Firebase de los puertos
│       ├── config.js
│       ├── FirebaseMovieRepository.js
│       ├── FirebaseCommentRepository.js
│       ├── FirebaseFavoriteRepository.js
│       ├── FirebaseAuthRepository.js
│       └── seedMovies.js           # Script de datos iniciales
└── presentation/                   # Capa de presentación (React)
    ├── components/
    │   ├── auth/                   # AuthModal
    │   ├── common/                 # Navbar, Footer, LoadingSpinner
    │   └── movies/                 # MovieCard, StarRating, CommentSection
    ├── context/                    # AuthContext
    ├── hooks/                      # useMovies, useMovie
    ├── pages/                      # HomePage, MovieDetailPage, FavoritesPage, etc.
    └── styles/                     # CSS global
```

---

## ⚙️ Configuración inicial

### 1. Requisitos previos

- Node.js >= 18
- npm >= 9
- Firebase CLI: `npm install -g firebase-tools`

### 2. Instalar dependencias

```bash
cd cineapp
npm install
```

### 3. Configurar Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com)
2. Abre el proyecto **webappreact-5bbca**
3. En **Configuración del proyecto → Aplicaciones web**, copia la configuración
4. Edita `src/infrastructure/firebase/config.js` y reemplaza los valores:

```js
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "webappreact-5bbca.firebaseapp.com",
  projectId: "webappreact-5bbca",
  storageBucket: "webappreact-5bbca.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};
```

### 4. Activar servicios en Firebase Console

- **Authentication** → Habilitar proveedor **Email/Contraseña**
- **Firestore Database** → Crear base de datos en modo **producción**
- **Hosting** → Activar (se configura automáticamente)

### 5. Aplicar reglas de Firestore

```bash
firebase login
firebase deploy --only firestore:rules
```

### 6. Poblar la base de datos con películas

En `src/App.jsx`, importa y llama la función seed **una sola vez**:

```jsx
// En App.jsx, añadir temporalmente:
import { seedMovies } from './infrastructure/firebase/seedMovies';

// Dentro del componente App, en un useEffect:
useEffect(() => {
  seedMovies(); // Ejecutar una sola vez, luego eliminar
}, []);
```

Después de ejecutar la app y ver "✅ Movies seeded successfully!" en la consola, **elimina estas líneas**.

---

## 🚀 Desarrollo local

```bash
npm start
```

La app se abrirá en http://localhost:3000

---

## 🌐 Despliegue en Firebase Hosting

### Opción A: Despliegue completo (recomendado)

```bash
# 1. Login en Firebase
firebase login

# 2. Build de producción
npm run build

# 3. Desplegar en Firebase Hosting
firebase deploy --only hosting
```

La URL de tu app será: `https://webappreact-5bbca.web.app`

### Opción B: Despliegue con script npm

```bash
npm run deploy
```

Este script ejecuta automáticamente `npm run build` y luego `firebase deploy`.

### Desplegar también las reglas de Firestore

```bash
firebase deploy --only firestore:rules,hosting
```

---

## ✨ Funcionalidades

| Funcionalidad | Descripción |
|---|---|
| 📽️ Catálogo | Grid de películas con búsqueda y filtros por género |
| 🎬 Ficha de película | Detalle completo: sinopsis, reparto, puntuación media |
| ⭐ Valoraciones | Usuarios registrados puntúan del 1 al 5 |
| 💬 Comentarios | Hilo de comentarios por película |
| ❤️ Favoritos | Lista personal de películas favoritas |
| 🔐 Autenticación | Registro e inicio de sesión con email/contraseña |
| 📄 Páginas estáticas | Contacto y Aviso Legal |

---

## 🏗️ Arquitectura Hexagonal

El proyecto sigue el patrón **Puertos y Adaptadores**:

- **Dominio** (`core/domain`): Entidades puras y contratos (ports) sin dependencias externas
- **Aplicación** (`core/application`): Casos de uso que orquestan la lógica de negocio
- **Infraestructura** (`infrastructure`): Implementaciones concretas de Firebase
- **Presentación** (`presentation`): Componentes React, hooks y páginas

Esto permite cambiar fácilmente el backend (ej: de Firebase a otra API) modificando solo la capa de infraestructura.

---

## 🛠️ Stack tecnológico

- **React 18** · UI declarativa con hooks
- **React Router v6** · Navegación SPA
- **Bootstrap 5 + Bootstrap Icons** · Estilos y componentes (tema claro)
- **Firebase 10** · Auth, Firestore, Hosting
- **Google Fonts (Inter)** · Tipografía moderna
