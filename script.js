// Ռեսպոնսիվ մենյուի համար
window.addEventListener('resize', function() {
  const menu = document.querySelector('.top-right-menu');
  if (window.innerWidth < 768) {
    menu.style.flexDirection = 'column';
    menu.style.position = 'fixed';
    menu.style.top = '20px';
    menu.style.right = '20px';
  } else {
    menu.style.flexDirection = 'column';
    menu.style.position = 'fixed';
    menu.style.top = '20px';
    menu.style.right = '20px';
  }
});