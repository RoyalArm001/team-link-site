document.addEventListener("DOMContentLoaded", function () {
  fetch("footer/footer.html")  // Ստուգիր ուղին
      .then(response => response.text())
      .then(html => {
          document.body.insertAdjacentHTML("beforeend", html); // Ավելացնում ենք էջի վերջում
          console.log("Ֆուտերը բեռնվել է հաջողությամբ!");
      })
      .catch(error => console.error("Ֆուտերի բեռնման սխալ:", error));
});
<script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js"></script>

  feather.replace()