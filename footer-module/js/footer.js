// FOOTER MODULE - JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // 1. Բեռնել ֆուտերը
  const loadFooter = () => {
    fetch('./footer.html')
      .then(res => res.text())
      .then(html => {
        const container = document.createElement('div');
        container.innerHTML = html;
        document.body.appendChild(container);
        
        // 2. Բեռնել CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './footer.css';
        document.head.appendChild(link);
        
        // 3. Սկրիպտի ավտոմատ գործարկում
        initFooter();
      });
  };

  // 4. Ֆուտերի լոգիկա
  const initFooter = () => {
    // Տարեթիվ
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // SVG սպրայթի բեռնում
    fetch('./assets/icons.svg')
      .then(res => res.text())
      .then(svg => {
        document.body.insertAdjacentHTML('afterbegin', svg);
      });
  };

  // Գործարկել
  loadFooter();
});