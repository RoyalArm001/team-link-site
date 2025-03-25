document.addEventListener('DOMContentLoaded', () => {
  const menuHTML = `
    <nav class="tl-menu">
      <!-- Գլխավոր էջ -->
      <a href="/index.html" class="tl-btn" data-title="">
        <img src="/menu/svgs/home.svg" class="tl-icon">
      </a>
      
      <!-- Էջեր /pages պապկից -->
      <a href="/pages/games.html" class="tl-btn" data-title="Games">
        <img src="/menu/svgs/games.svg" class="tl-icon">
      </a>
      
      <a href="/pages/dashboard.html" class="tl-btn" data-title="Dashboard">
        <img src="/menu/svgs/dashboard.svg" class="tl-icon">
      </a>
      
      <a href="/pages/login.html" class="tl-btn" data-title="Login">
        <img src="/menu/svgs/login.svg" class="tl-icon">
      </a>
      
      <a href="/pages/contact.html" class="tl-btn" data-title="Contact">
        <img src="/menu/svgs/contact.svg" class="tl-icon">
      </a>
      
      <a href="/pages/about.html" class="tl-btn" data-title="About">
        <img src="/menu/svgs/about.svg" class="tl-icon">
      </a>
    </nav>
  `;
  
  document.body.insertAdjacentHTML('beforeend', menuHTML);
});