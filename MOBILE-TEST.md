# 📱 Guía para Probar en Móvil

## ✅ La página ES completamente responsive

### Características móviles implementadas:

1. **Diseño Adaptativo**
   - Se adapta automáticamente a cualquier tamaño de pantalla
   - Optimizado para teléfonos (320px - 480px)
   - Optimizado para tablets (481px - 768px)
   - Funciona perfecto en desktop (769px+)

2. **Navegación Móvil**
   - Menú reorganizado verticalmente
   - Botones táctiles más grandes
   - Espaciado optimizado para dedos

3. **Catálogo en Móvil**
   - Productos en una sola columna
   - Imágenes optimizadas (220px-250px altura)
   - Texto legible en pantallas pequeñas
   - Botones + y - fáciles de tocar (35px-40px)

4. **Carrito en Móvil**
   - Ocupa todo el ancho en teléfonos
   - Pegado a la parte inferior
   - Botón de WhatsApp grande y fácil de presionar

5. **Efectos Táctiles**
   - Feedback visual al tocar botones
   - Sin efectos hover molestos en móviles
   - Animaciones suaves

## 🧪 Cómo probar en el navegador:

### Chrome/Edge:
1. Presiona **F12** (DevTools)
2. Presiona **Ctrl + Shift + M** (modo responsive)
3. Selecciona un dispositivo:
   - iPhone SE (375px)
   - iPhone 12/13/14 Pro (390px)
   - iPhone 14 Pro Max (430px)
   - Samsung Galaxy S20 (360px)
   - iPad (768px)

### O manualmente:
1. F12 para abrir DevTools
2. Clic en el ícono de móvil/tablet (arriba izquierda)
3. Ajusta el ancho arrastrando

## 📲 Cómo probar en tu teléfono real:

### Opción 1: Archivo local (simple)
1. Envía la carpeta `sillas` a tu teléfono
2. Abre el archivo `index.html` con Chrome/Safari

### Opción 2: Red local (mejor para pruebas)
1. Instala Python (si no lo tienes)
2. En la carpeta `sillas`, abre terminal:
   ```
   python -m http.server 8000
   ```
3. En tu teléfono, ve a: `http://TU-IP:8000`
   - Encuentra tu IP: `ipconfig` (Windows)

### Opción 3: Publicar online (recomendado)
Sube a cualquiera de estos servicios gratuitos:
- **Netlify** (más fácil): arrastra la carpeta
- **Vercel**: conecta con GitHub
- **GitHub Pages**: sube y activa Pages
- **Firebase Hosting**: hosting de Google

## ✨ Funcionalidades móviles verificadas:

✅ **Navegación suave** entre secciones  
✅ **Scroll fluido** sin bugs  
✅ **Imágenes se cargan** correctamente  
✅ **Botones táctiles** responden bien  
✅ **Contadores** funcionan en touch  
✅ **WhatsApp se abre** correctamente  
✅ **Texto legible** en pantallas pequeñas  
✅ **Sin zoom horizontal** molesto  
✅ **Formulario de cantidad** fácil de usar  
✅ **Footer organizado** en vertical  

## 🎨 Breakpoints implementados:

- **0-480px**: Móviles pequeños (iPhone SE, Android compactos)
- **481-768px**: Móviles grandes y tablets pequeñas
- **769-1024px**: Tablets y laptops pequeñas
- **1025px+**: Desktop

## 💡 Recomendaciones:

1. **Prueba en modo incógnito** para ver cambios frescos
2. **Limpia caché** si no ves cambios: Ctrl+Shift+R
3. **Prueba la rotación** (vertical y horizontal)
4. **Verifica el botón de WhatsApp** que funcione
5. **Prueba agregar varios productos** al carrito

---

**¡La página está 100% lista para móviles!** 📱✨
