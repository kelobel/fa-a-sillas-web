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

// Función para eliminar un producto del carrito
function removeItemFromCart(productName) {
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const name = product.querySelector('.product-name').textContent;
        if (name === productName) {
            const input = product.querySelector('.qty-input');
            input.value = 0;
        }
    });
    
    // Usar requestAnimationFrame para evitar saltos
    requestAnimationFrame(() => {
        updateCart();
    });
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
        cartItemsDiv.innerHTML = cartItems.map((item, index) => `
            <div class="cart-item">
                <span>${item.name}</span>
                <div class="cart-item-actions">
                    <strong>x${item.quantity}</strong>
                    <button class="remove-item" data-product="${item.name}" title="Eliminar">×</button>
                </div>
            </div>
        `).join('');
        
        // Agregar event listeners a los botones de eliminar
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const productName = this.getAttribute('data-product');
                removeItemFromCart(productName);
            });
        });
    } else {
        cartSummary.style.display = 'none';
    }
}

// Enviar pedido por WhatsApp
function sendToWhatsApp() {
    const products = document.querySelectorAll('.product-card');
    let message = '¡Hola! Me interesa hacer un pedido de *Medina Sillas y Más*:\n\n';
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

    message += '\n¿Podrías enviarme más información y precios?\n\nGracias-!';

    // Número de WhatsApp (IMPORTANTE: Cambiar por el número real)
    // Formato: Código de país + número sin espacios ni guiones
    // Ejemplo: 18095551234 para República Dominicana
    const phoneNumber = '18093901108'; // CAMBIAR ESTE NÚMERO
    
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

// Sistema de Galería
const galleries = {
    'louisville-sin-parrillas': {
        title: 'Louisville Premium Sin Parrillas 0062',
        images: [
            'images/Louisville Premium Sin Parrillas 0062/image (46).png',
            'images/Louisville Premium Sin Parrillas 0062/IMG-20250624-WA0022 (1).png',
            'images/Louisville Premium Sin Parrillas 0062/IMG-20250624-WA0022.png',
            'images/Louisville Premium Sin Parrillas 0062/IMG-20250624-WA0024.png',
            'images/Louisville Premium Sin Parrillas 0062/IMG-20250627-WA0038.png',
            'images/Louisville Premium Sin Parrillas 0062/IMG-20250627-WA0040 (1).png',
            'images/Louisville Premium Sin Parrillas 0062/IMG-20250627-WA0040.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20241024_183949.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20241024_184053.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20241025_204338.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20241114_204858.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20241214_102830.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20241230_134050.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20241230_135454.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250128_231528.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250128_231734.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250128_232332.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250128_232401.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250128_232821.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250128_232852.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250128_232923.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250128_233022.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250128_233216.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250128_233340.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250129_090329.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250129_090345.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250129_090444.png',
            'images/Louisville Premium Sin Parrillas 0062/Photoroom-20250206_082420.png'
        ]
    },
    'louisville-con-parrillas': {
        title: 'Louisville Premium con Parrillas 00065',
        images: [
            'images/Louisville Premium con parrillas 00065/21_inch_louisville_Premium_Gray_Blue_with_book_racks-removebg-preview - Copy.png',
            'images/Louisville Premium con parrillas 00065/Azul_Royal_con_Parrillas-removebg-preview - Copy.png',
            'images/Louisville Premium con parrillas 00065/image (1).png',
            'images/Louisville Premium con parrillas 00065/image (2).png',
            'images/Louisville Premium con parrillas 00065/image (3).png',
            'images/Louisville Premium con parrillas 00065/image.png',
            'images/Louisville Premium con parrillas 00065/IMG-20240402-WA0018.png',
            'images/Louisville Premium con parrillas 00065/IMG-20240402-WA0019.png',
            'images/Louisville Premium con parrillas 00065/IMG-20250605-WA0005.png',
            'images/Louisville Premium con parrillas 00065/IMG-20250605-WA0006.png',
            'images/Louisville Premium con parrillas 00065/IMG-20250703-WA0042.png',
            'images/Louisville Premium con parrillas 00065/IMG-20250703-WA0044.png',
            'images/Louisville Premium con parrillas 00065/IMG-20250703-WA0045.png',
            'images/Louisville Premium con parrillas 00065/IMG-20250913-WA0016.png',
            'images/Louisville Premium con parrillas 00065/Photoroom-20250128_230822.png',
            'images/Louisville Premium con parrillas 00065/Photoroom-20250128_230916.png',
            'images/Louisville Premium con parrillas 00065/Photoroom-20250128_231431.png',
            'images/Louisville Premium con parrillas 00065/Photoroom-20250128_231554.png',
            'images/Louisville Premium con parrillas 00065/Photoroom-20250128_231632.png',
            'images/Louisville Premium con parrillas 00065/Photoroom-20250128_231800.png',
            'images/Louisville Premium con parrillas 00065/Photoroom-20250128_232505.png',
            'images/Louisville Premium con parrillas 00065/Photoroom-20250129_083946.png',
            'images/Louisville Premium con parrillas 00065/Photoroom-20250129_084038.png',
            'images/Louisville Premium con parrillas 00065/Photoroom-20250129_090250.png'
        ]
    },
    'sillas-eventos': {
        title: 'Sillas de Eventos',
        images: [
            'images/sillas de eventos/CBMW-202.jpg',
            'images/sillas de eventos/Crown banquet chair blue whit dots - Copy.png',
            'images/sillas de eventos/FD-C04-ALLGOLD-2804-GG_LS.jpg',
            'images/sillas de eventos/images (1).jpeg',
            'images/sillas de eventos/IMG-20240828-WA0011.png',
            'images/sillas de eventos/IMG-20241016-WA0015.jpg',
            'images/sillas de eventos/IMG-20241028-WA0052.jpg',
            'images/sillas de eventos/IMG-20250220-WA0009.png',
            'images/sillas de eventos/IMG-20250423-WA0001 (1).png',
            'images/sillas de eventos/IMG-20250424-WA0020.png',
            'images/sillas de eventos/IMG-20250718-WA0024.jpg',
            'images/sillas de eventos/IMG-20250718-WA0025.jpg',
            'images/sillas de eventos/IMG-20250727-WA0003.jpg',
            'images/sillas de eventos/medidas.jpg',
            'images/sillas de eventos/Photoroom-20250128_231508.png',
            'images/sillas de eventos/Photoroom-20250128_231708.png',
            'images/sillas de eventos/Photoroom-20250128_232229.png',
            'images/sillas de eventos/Photoroom-20250226_084526.png'
        ]
    },
    'louisville-convencional': {
        title: 'Louisville Convencional 0059',
        images: [
            'images/Louisville Convencional 0059/image (1).png',
            'images/Louisville Convencional 0059/image.png',
            'images/Louisville Convencional 0059/IMG-20241026-WA0006.jpg',
            'images/Louisville Convencional 0059/Photoroom-20250128_230605.png',
            'images/Louisville Convencional 0059/Photoroom-20250128_232332.png',
            'images/Louisville Convencional 0059/Photoroom-20250128_232427.png',
            'images/Louisville Convencional 0059/Photoroom-20250128_232923.png',
            'images/Louisville Convencional 0059/Photoroom-20250128_233101.png',
            'images/Louisville Convencional 0059/Photoroom-20250128_233216.png',
            'images/Louisville Convencional 0059/Photoroom-20250128_233340.png',
            'images/Louisville Convencional 0059/Photoroom-20250129_082552.png',
            'images/Louisville Convencional 0059/Photoroom-20250129_082705.png',
            'images/Louisville Convencional 0059/Photoroom-20250129_085454.png',
            'images/Louisville Convencional 0059/Photoroom-20250129_090345.png'
        ]
    },
    'louisville-ls': {
        title: 'Louisville LS-10601-135',
        images: [
            'images/Louisville LS-10601-135/IMG-20191213-WA0000.png',
            'images/Louisville LS-10601-135/IMG-20210421-WA0017.png',
            'images/Louisville LS-10601-135/Louisville-plastic outerback LS-10601P (3) (1).png',
            'images/Louisville LS-10601-135/Louisville-plastic outerback LS-10601P (3).png',
            'images/Louisville LS-10601-135/Louisville-plastic outerback LS-10601P (4).jpg',
            'images/Louisville LS-10601-135/Photoroom-20250128_231835.png',
            'images/Louisville LS-10601-135/Photoroom-20250128_231943 (1).png',
            'images/Louisville LS-10601-135/Photoroom-20250128_231943.png',
            'images/Louisville LS-10601-135/Photoroom-20250128_232106.png',
            'images/Louisville LS-10601-135/Photoroom-20250128_232148 (1).png',
            'images/Louisville LS-10601-135/Photoroom-20250128_232148.png'
        ]
    },
    'auditorium-school': {
        title: 'Auditorium School Version #0069',
        images: [
            'images/Auditorium School Version %230069/butacas azules.jpg',
            'images/Auditorium School Version %230069/butacas rojas.jpg',
            'images/Auditorium School Version %230069/Folding-Plastic-Cheap-Price-Standard-Size-Foam (2) - Copy.jpg',
            'images/Auditorium School Version %230069/IMG-20201211-WA0001.jpg',
            'images/Auditorium School Version %230069/IMG-20210427-WA0025.jpg',
            'images/Auditorium School Version %230069/IMG-20220205-WA0042.jpg',
            'images/Auditorium School Version %230069/IMG-20220212-WA0019.jpg',
            'images/Auditorium School Version %230069/IMG-20220212-WA0020.jpg',
            'images/Auditorium School Version %230069/IMG-20220307-WA0039.jpg'
        ]
    },
    'classica': {
        title: 'Classica 0043',
        images: [
            'images/Classica 0043/20250604_161708.png',
            'images/Classica 0043/20250608_211642.png',
            'images/Classica 0043/20250723_000344.png',
            'images/Classica 0043/IMG-20220427-WA0023.jpg',
            'images/Classica 0043/IMG-20221107-WA0011.png',
            'images/Classica 0043/IMG-20250428-WA0017.jpg',
            'images/Classica 0043/IMG-20250701-WA0067.png',
            'images/Classica 0043/IMG-20250702-WA0005.jpg'
        ]
    },
    'performer': {
        title: 'Performer 0089',
        images: [
            'images/Performer 0089/IMG-20190709-WA0023.jpg',
            'images/Performer 0089/IMG-20190709-WA0025.jpg',
            'images/Performer 0089/IMG-20190709-WA0026.jpg',
            'images/Performer 0089/IMG-20201228-WA0010.jpg',
            'images/Performer 0089/Photoroom-20250128_232014.png',
            'images/Performer 0089/Photoroom-20250128_232039.png',
            'images/Performer 0089/TH3.jpg'
        ]
    },
    'arm-rest': {
        title: 'Chairs with ARM REST 00050',
        images: [
            'images/Chairs with ARM REST 00050/IMG-20250611-WA0005 (1).png',
            'images/Chairs with ARM REST 00050/IMG-20250611-WA0005.png',
            'images/Chairs with ARM REST 00050/IMG-20250611-WA0009.png',
            'images/Chairs with ARM REST 00050/IMG-20250611-WA0010.png',
            'images/Chairs with ARM REST 00050/IMG-20250611-WA0020.png',
            'images/Chairs with ARM REST 00050/IMG-20250611-WA0021.png'
        ]
    },
    'optimas-0050': {
        title: 'Optimas 0050',
        images: [
            'images/Optimas 0050/20250708_074659.png',
            'images/Optimas 0050/image (1).png',
            'images/Optimas 0050/image (2).png',
            'images/Optimas 0050/image.png',
            'images/Optimas 0050/IMG-20250822-WA0009.png'
        ]
    }
};

let currentGallery = null;
let currentSlideIndex = 0;

function openGallery(galleryId) {
    currentGallery = galleries[galleryId];
    if (!currentGallery) return;
    
    currentSlideIndex = 0;
    const modal = document.getElementById('galleryModal');
    const title = document.getElementById('galleryTitle');
    const totalSlides = document.getElementById('totalSlides');
    
    title.textContent = currentGallery.title;
    totalSlides.textContent = currentGallery.images.length;
    
    // Crear miniaturas
    const thumbnailsContainer = document.getElementById('galleryThumbnails');
    thumbnailsContainer.innerHTML = currentGallery.images.map((img, index) => `
        <img src="${img}" 
             class="gallery-thumbnail ${index === 0 ? 'active' : ''}" 
             onclick="goToSlide(${index})"
             alt="Miniatura ${index + 1}">
    `).join('');
    
    showSlide(0);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevenir scroll
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
    currentGallery = null;
}

function changeSlide(direction) {
    if (!currentGallery) return;
    currentSlideIndex += direction;
    
    // Loop circular
    if (currentSlideIndex >= currentGallery.images.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = currentGallery.images.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function goToSlide(index) {
    currentSlideIndex = index;
    showSlide(index);
}

function showSlide(index) {
    if (!currentGallery) return;
    
    const image = document.getElementById('galleryImage');
    const currentSlideSpan = document.getElementById('currentSlide');
    const thumbnails = document.querySelectorAll('.gallery-thumbnail');
    
    image.src = currentGallery.images[index];
    currentSlideSpan.textContent = index + 1;
    
    // Actualizar miniaturas activas
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// Cerrar con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeGallery();
    }
});

// Navegar con flechas
document.addEventListener('keydown', (e) => {
    if (document.getElementById('galleryModal').style.display === 'block') {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        }
    }
});

// Cerrar al hacer clic fuera del contenido
document.getElementById('galleryModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'galleryModal') {
        closeGallery();
    }
});

