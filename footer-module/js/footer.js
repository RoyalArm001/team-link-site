// FOOTER MODULE - JavaScript Logic
document.addEventListener('DOMContentLoaded', () => {
  // Տարեթվի ավտոմատ թարմացում
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // SVG սպրայթի բեռնում
  fetch('/assets/icons.svg')
    .then(response => response.text())
    .then(svg => {
      document.body.insertAdjacentHTML('afterbegin', svg);
    });
});

// Ֆուտերի դինամիկ բեռնում
function loadFooter() {
  fetch('/footer-module/footer.html')
    .then(response => response.text())
    .then(html => {
      const footerContainer = document.createElement('div');
      footerContainer.innerHTML = html;
      document.body.appendChild(footerContainer);
      
      // CSS-ի բեռնում
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/footer-module/css/footer.css';
      document.head.appendChild(link);
    });
}

// Կանչել ֆունկցիան էջի բեռնվելուց հետո
if (!document.getElementById('footer-container')) {
  const container = document.createElement('div');
  container.id = 'footer-container';
  document.body.appendChild(container);
}
loadFooter();
