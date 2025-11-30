# 🚀 Instrucciones para Subir a GitHub

## ✅ Paso 1: Ya completado
Git ya está inicializado y los archivos están listos.

## 📝 Paso 2: Crear repositorio en GitHub

1. Ve a **https://github.com/new**
2. Configura tu repositorio:
   - **Repository name:** `fana-sillas-web` (o el nombre que prefieras)
   - **Description:** "Catálogo web de Faña Sillas y Más - Sillas para iglesias"
   - **Public** (para poder usar GitHub Pages gratis)
   - ❌ NO marques "Add a README file"
   - ❌ NO agregues .gitignore
   - ❌ NO agregues licencia
3. Clic en **"Create repository"**

## 🔗 Paso 3: Conectar y subir

Después de crear el repositorio, GitHub te mostrará comandos. Usa estos:

```bash
git remote add origin https://github.com/TU-USUARIO/fana-sillas-web.git
git branch -M main
git push -u origin main
```

**O copia y pega estos comandos en la terminal:**

### Si tu usuario de GitHub es diferente, reemplaza "TU-USUARIO"

```powershell
# Ejemplo (reemplaza con tu usuario):
git remote add origin https://github.com/kelov/fana-sillas-web.git
git branch -M main
git push -u origin main
```

## 🌐 Paso 4: Activar GitHub Pages (hosting gratis)

1. Ve a tu repositorio en GitHub
2. Clic en **Settings** (Configuración)
3. En el menú izquierdo, clic en **Pages**
4. En "Source", selecciona **"main"** branch
5. Clic en **Save**
6. ¡Espera 1-2 minutos!

Tu página estará disponible en:
**https://TU-USUARIO.github.io/fana-sillas-web/**

## 📱 Paso 5: Configurar WhatsApp

No olvides editar el archivo `script.js` línea 63:
```javascript
const phoneNumber = '18095551234'; // Cambia por tu número real
```

## 🔄 Para actualizar después:

Cuando hagas cambios:
```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

## ❓ Si pide autenticación:

GitHub puede pedirte credenciales:
- **Usuario:** Tu nombre de usuario de GitHub
- **Contraseña:** Un "Personal Access Token" (no tu contraseña normal)

Para crear un token:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Selecciona "repo" scope
4. Copia el token (solo se muestra una vez)
5. Usa ese token como contraseña

## 📞 Necesitas ayuda?

Si tienes problemas, dime y te ayudo a resolverlos.

---

**¡Ya casi está online!** 🎉
