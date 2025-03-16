// Գունային ռեժիմի փոփոխություն
const colorCircles = document.querySelectorAll('.color-circle');
const body = document.body;

colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        const selectedColor = circle.getAttribute('data-color');
        body.className = ''; // Մաքրել նախկին գունային ռեժիմը
        body.classList.add(selectedColor + '-mode');
    });
});

// Համբուրգեր մենյու
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Սքրոլ դեպի վերև
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});



function updateClock() {
    let now = new Date();
    let timeString = now.toLocaleTimeString();
    document.getElementById("clock").innerText = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Կանչում ենք, որ միանգամից ցույց տա

function setTheme(theme) {
    if (theme === 'system') {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
    }
    document.body.className = theme + "-theme";
    localStorage.setItem("theme", theme);
}

document.addEventListener("DOMContentLoaded", function () {
    let savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
});
