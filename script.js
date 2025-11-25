// Funciones para controlar cantidades
function increaseQuantity(button) {
    const input = button.parentElement.querySelector('.qty-input');
    input.value = parseInt(input.value) + 1;
    updateCart();
}

function decreaseQuantity(button) {
    const input = button.parentElement.querySelector('.qty-input');
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
        updateCart();
    }
}

// Actualizar el carrito
function updateCart() {
    const products = document.querySelectorAll('.product-card');
    const cartItems = [];
    let totalItems = 0;

    products.forEach(product => {
        const name = product.querySelector('.product-name').textContent;
        const quantity = parseInt(product.querySelector('.qty-input').value);
        
        if (quantity > 0) {
            cartItems.push({ name, quantity });
            totalItems += quantity;
        }
    });

    const cartSummary = document.getElementById('cartSummary');
    const cartItemsDiv = document.getElementById('cartItems');

    if (totalItems > 0) {
        cartSummary.style.display = 'block';
        cartItemsDiv.innerHTML = cartItems.map(item => `
            <div class="cart-item">
                <span>${item.name}</span>
                <strong>x${item.quantity}</strong>
            </div>
        `).join('');
    } else {
        cartSummary.style.display = 'none';
    }
}

// Enviar pedido por WhatsApp
function sendToWhatsApp() {
    const products = document.querySelectorAll('.product-card');
    let message = '¡Hola! Me interesa hacer un pedido de *Faña Sillas y Más*:\n\n';
    let hasProducts = false;

    products.forEach(product => {
        const name = product.querySelector('.product-name').textContent;
        const quantity = parseInt(product.querySelector('.qty-input').value);
        
        if (quantity > 0) {
            message += `• *${name}*: ${quantity} unidad${quantity > 1 ? 'es' : ''}\n`;
            hasProducts = true;
        }
    });

    if (!hasProducts) {
        alert('Por favor, selecciona al menos un producto');
        return;
    }

    message += '\n¿Podrías enviarme más información y precios?\n\nGracias!';

    // Número de WhatsApp (IMPORTANTE: Cambiar por el número real)
    // Formato: Código de país + número sin espacios ni guiones
    // Ejemplo: 18095551234 para República Dominicana
    const phoneNumber = '18295635402'; // CAMBIAR ESTE NÚMERO
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Smooth scroll para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación de entrada para los productos
function observeProducts() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.product-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
}

// Inicializar cuando la página cargue
window.addEventListener('load', () => {
    observeProducts();
});

// Agregar event listeners a los inputs para actualizar el carrito
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.qty-input');
    inputs.forEach(input => {
        input.addEventListener('change', updateCart);
    });
});
