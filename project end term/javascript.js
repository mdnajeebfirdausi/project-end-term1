/* =====================================
   Md Najeeb Firdausi - PORTFOLIO JAVASCRIPT
   ===================================== */

const navLinks = document.querySelectorAll(".nav-links a");

function updateActiveLink() {
    const sections = document.querySelectorAll("main section");
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);

navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// 4. Dark / Light mode toggle
const themeButton = document.createElement("button");

themeButton.textContent = "☀️ Light Mode";
themeButton.className = "theme-button";
themeButton.setAttribute("aria-label", "Toggle colour theme");

document.querySelector(".navbar").appendChild(themeButton);

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    const lightModeEnabled =
        document.body.classList.contains("light-mode");

    themeButton.textContent = lightModeEnabled
        ? "🌙 Dark Mode"
        : "☀️ Light Mode";
});


// 5. Back to Top button
const backToTop = document.createElement("button");

backToTop.textContent = "↑";
backToTop.className = "back-to-top";
backToTop.setAttribute("aria-label", "Back to top");

document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// 6. Project card hover animation
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
        this.style.transition = "transform 0.3s ease";
    });
});


// 7. Footer mein current year
const footerText = document.querySelector("footer p");

if (footerText) {
    footerText.textContent =
        `© ${new Date().getFullYear()} Manish Kumar. Built with HTML, CSS & JavaScript.`;
}


// 8. Console message
console.log("Welcome to Manish Kumar's Portfolio!");
console.log("Portfolio JavaScript loaded successfully.");