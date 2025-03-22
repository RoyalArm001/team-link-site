// Ռեսպոնսիվ մենյուի համար
window.addEventListener('resize', function() {
  const menu = document.querySelector('.menu');
  if (window.innerWidth < 768) {
    menu.style.flexDirection = 'column';
    menu.style.position = 'fixed';
    menu.style.bottom = '0';
    menu.style.left = '0';
    menu.style.right = '0';
  } else {
    menu.style.flexDirection = 'row';
    menu.style.position = 'relative';
  }
});