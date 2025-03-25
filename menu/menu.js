document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.createElement('div'); // Ստեղծում ենք կոնտեյներ
  menuContainer.innerHTML = `
    <nav class="tl-menu">
      <!-- Գլխավոր էջ -->
      <a href="index.html" class="tl-btn" data-title="Գլխավոր">
        <img src="menu/svgs/home.svg" class="tl-icon">
      </a>
      
      <!-- Էջեր /pages պապկից -->
      <a href="pages/games.html" class="tl-btn" data-title="Խաղեր">
        <img src="menu/svgs/games.svg" class="tl-icon">
      </a>
      
      <a href="pages/dashboard.html" class="tl-btn" data-title="Dashboard">
        <img src="menu/svgs/dashboard.svg" class="tl-icon">
      </a>
      
      <a href="pages/login.html" class="tl-btn" data-title="Մուտք">
        <img src="menu/svgs/login.svg" class="tl-icon">
      </a>
      
      <a href="pages/contact.html" class="tl-btn" data-title="Կապ">
        <img src="menu/svgs/contact.svg" class="tl-icon">
      </a>
      
      <a href="pages/about.html" class="tl-btn" data-title="Մեր Մասին">
        <img src="menu/svgs/about.svg" class="tl-icon">
      </a>
    </nav>
  `;

  document.body.prepend(menuContainer); // Ավելացնում ենք `body`-ի սկզբում
  
  // Հնարավոր խափանումները ստուգելու համար event-ներ ավելացնենք
  document.querySelectorAll('.tl-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
      console.log(`Clicked: ${event.currentTarget.href}`); // Console-ում կտեսնես որ URL-ն է սեղմվել
    });
  });
});
