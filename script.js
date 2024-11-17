
function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
}


document.addEventListener('click', function(event) {
    const dropdownMenu = document.getElementById('dropdownMenu');
    const menuIconContainer = document.querySelector('.menu-icon-container');

    if (!menuIconContainer.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
    }
});



document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true, // Ativa o loop infinito
      autoplay: {
        delay: 2500, // Tempo entre as transições (2,5 segundos)
        disableOnInteraction: false, // Continua o autoplay após interação
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true, // Permite clicar na paginação
      },
    });
  });


 