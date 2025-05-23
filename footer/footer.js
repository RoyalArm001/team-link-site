// footer.js

document.addEventListener('DOMContentLoaded', function() {
  const socialIcons = document.querySelectorAll('.social-icon');
  socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
          icon.style.transform = 'scale(1.1)';
      });
      icon.addEventListener('mouseleave', () => {
          icon.style.transform = 'scale(1)';
      });
  });
});
