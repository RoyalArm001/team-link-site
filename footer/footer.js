document.addEventListener('DOMContentLoaded', function() {
  let footer = document.querySelector("footer");
  if (footer) {
    footer.style.display = "block";
    footer.style.position = "relative";
    footer.style.height = "auto";
    footer.style.minHeight = "100px";
    footer.style.opacity = "1";
    console.log("Ֆուտերը գտնվել է:", footer);
    feather.replace()
    console.log("Ֆուտերի չափսերը:", footer.getBoundingClientRect());
  }
});
/* footer.js կամ app.min.js / script.js */

window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});



  