# webappReact

## 🚀 Pasos para desplegar en Firebase

```bash
firebase deploy --only hosting
```

Firebase te dará una URL del tipo:
```
https://filmvault-app-xxxxx.web.app
```

---

## Pasos para crear el proyecto en Firebase

### 1. Instalar Firebase CLI

```bash
npm install -g firebase-tools
```

### 2. Iniciar sesión en Firebase

```bash
firebase login
```

Se abrirá el navegador para autenticarte con tu cuenta de Google.

### 3. Crear un proyecto en Firebase Console

1. Ve a [https://console.firebase.google.com](https://console.firebase.google.com)
2. Haz clic en **"Agregar proyecto"**
3. Ponle un nombre, por ejemplo: `filmvault-app`
4. Sigue los pasos del asistente

### 4. Vincular tu proyecto

Edita el archivo `.firebaserc` y reemplaza `tu-proyecto-filmvault` con el **ID real de tu proyecto**:

```json
{
  "projects": {
    "default": "filmvault-app-xxxxx"
  }
}
```

También puedes hacerlo por CLI:

```bash
firebase use --add
```

### 5. Inicializar Firebase Hosting (si no tienes firebase.json)

```bash
firebase init hosting
```

Cuando te pregunte:
- **Public directory:** `.` (punto, directorio actual)
- **Configure as single-page app:** `Yes`
- **Overwrite index.html:** `No` (usamos filmvault.html)

### 6. Desplegar

```bash
firebase deploy --only hosting
```

Firebase te dará una URL del tipo:
```
https://filmvault-app-xxxxx.web.app
```