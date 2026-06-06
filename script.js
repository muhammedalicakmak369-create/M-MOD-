document.addEventListener('DOMContentLoaded', function() {
    console.log('Sayfa yüklendi!');
    
    // Basit bir menü açma/kapatma örneği
    const menuToggle = document.querySelector('nav ul');
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
    });
});
