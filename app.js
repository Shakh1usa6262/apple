// Kichik kartadagi rasmni aniqlash
const smallCardImage = document.getElementById('ozgaruvchi');

// Katta kartadagi kichik rasmlar kolleksiyasini aniqlash
const appleImages = document.querySelectorAll('.s_apple');

// Har bir kichik rasm uchun hodisalar o'rnatish
appleImages.forEach(image => {
    image.addEventListener('click', () => {
        // Kichik kartadagi rasm src ni yangilash
        smallCardImage.src = image.src;
    });
});
