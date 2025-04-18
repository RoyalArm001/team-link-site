document.addEventListener('DOMContentLoaded', function() {
  const menuContainer = document.createElement('div');
  menuContainer.innerHTML = `
    <nav class="tl-menu">
      <a href="/index.html" class="tl-btn" data-title="Գլխավոր">
        <img src="/menu/svgs/home.svg" class="tl-icon">
      </a>
      <a href="/pages/games.html" class="tl-btn" data-title="Խաղեր">
        <img src="/menu/svgs/games.svg" class="tl-icon">
      </a>
      <a href="/pages/dashboard.html" class="tl-btn" data-title="Dashboard">
        <img src="/menu/svgs/dashboard.svg" class="tl-icon">
      </a>
      <a href="/pages/login.html" class="tl-btn" data-title="Մուտք">
        <img src="/menu/svgs/login.svg" class="tl-icon">
      </a>
      <a href="/pages/contact.html" class="tl-btn" data-title="Կապ">
        <img src="/menu/svgs/contact.svg" class="tl-icon">
      </a>
      <a href="/pages/about.html" class="tl-btn" data-title="About">
        <img src="/menu/svgs/about.svg" class="tl-icon">
      </a>
    </nav>
  `;
  document.body.appendChild(menuContainer);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tl-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
      console.log('Clicked:', btn.href);
      window.location.href = btn.href; // Դիմացն էլ գնում է հղմանը
    });
  });
});

