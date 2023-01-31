
$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
});

$('.slider-principal2').slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});


const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);