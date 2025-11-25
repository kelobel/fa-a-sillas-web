# Faña Sillas y Más - Catálogo Web

## 🪑 Descripción
Página web tipo catálogo para "Faña Sillas y Más", especializada en sillas para iglesias. Los clientes pueden seleccionar productos y enviar su pedido directamente por WhatsApp.

## 🎨 Características
- ✅ Diseño moderno y responsive
- ✅ Catálogo de 8 productos diferentes
- ✅ Contador de cantidades por producto
- ✅ Resumen de pedido en tiempo real
- ✅ Integración con WhatsApp
- ✅ Colores elegantes inspirados en catálogos de iglesias
- ✅ Animaciones suaves
- ✅ Compatible con móviles y tablets

## 🚀 Cómo usar

### 1. Configurar el número de WhatsApp
Abre el archivo `script.js` y busca la línea:
```javascript
const phoneNumber = '18095551234'; // CAMBIAR ESTE NÚMERO
```
Cambia el número por tu número de WhatsApp (con código de país, sin espacios ni guiones).

**Ejemplo para República Dominicana:**
- Si tu número es: (809) 555-1234
- Escribe: `const phoneNumber = '18095551234';`

### 2. Personalizar productos
Edita el archivo `index.html` para:
- Cambiar nombres de productos
- Modificar descripciones
- Actualizar características
- Agregar o quitar productos

### 3. Agregar imágenes reales
Reemplaza las imágenes placeholder:
1. Guarda tus imágenes en una carpeta `images/`
2. Actualiza las rutas en `index.html`:
```html
<img src="images/silla-clasica.jpg" alt="Silla Clásica">
```

### 4. Actualizar información de contacto
En el archivo `index.html`, busca la sección "Contacto" y modifica:
- Email
- WhatsApp
- Ubicación

## 📱 Probar la página
Simplemente abre el archivo `index.html` en tu navegador preferido.

## 🎨 Colores utilizados
Los colores están inspirados en catálogos profesionales de iglesias:
- **Azul Primario:** #1a237e (Elegante y confiable)
- **Azul Secundario:** #3949ab (Moderno)
- **Azul Acento:** #5c6bc0 (Vibrante)
- **Verde WhatsApp:** #25d366

## 📦 Estructura de archivos
```
sillas/
│
├── index.html      # Página principal con todo el contenido
├── styles.css      # Estilos y diseño
├── script.js       # Funcionalidad interactiva
└── README.md       # Este archivo
```

## ✨ Funcionalidades

### Selección de productos
- Usa los botones + y - para ajustar cantidades
- El carrito se actualiza automáticamente

### Envío por WhatsApp
- Cuando seleccionas productos, aparece un resumen flotante
- Al hacer clic en "Enviar Pedido por WhatsApp", se abre WhatsApp con el mensaje pre-formateado

### Navegación
- El menú superior es sticky (se queda fijo al hacer scroll)
- Los enlaces del menú llevan suavemente a cada sección

## 🔧 Personalización avanzada

### Cambiar colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #1a237e;
    --secondary-color: #3949ab;
    /* ... más colores */
}
```

### Agregar más productos
Copia y pega un bloque de producto en `index.html`:
```html
<div class="product-card">
    <!-- Contenido del producto -->
</div>
```

### Modificar animaciones
Ajusta los tiempos de animación en `styles.css` o `script.js`

## 📞 Soporte
Para cualquier duda o personalización adicional, contacta al desarrollador.

## 📝 Notas importantes
1. **WhatsApp:** Asegúrate de usar el formato correcto del número de teléfono
2. **Imágenes:** Las imágenes actuales son placeholders, reemplázalas con fotos reales de tus productos
3. **Hosting:** Para publicar la página, necesitarás subirla a un servicio de hosting web

## 🌐 Para publicar en internet
Opciones gratuitas:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

---
**Desarrollado para Faña Sillas y Más** 🪑
