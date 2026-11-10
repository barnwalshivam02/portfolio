
// 1. Typing Animation
const typingElement = document.getElementById("typing");

const words = [
    "CSE Student",
    "Web Developer",
    "Programmer",
    "Software Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 110;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// 2. Dark / Light Mode
const themeButton = document.getElementById("theme-toggle");
const themeIcon = themeButton?.querySelector("i");

themeButton?.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    const lightMode = document.body.classList.contains("light-mode");

    if (themeIcon) {
        themeIcon.className = lightMode
            ? "fas fa-sun"
            : "fas fa-moon";
    }
});


// 3. Mobile Menu
const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuButton?.querySelector("i");

menuButton?.addEventListener("click", function () {
    navLinks?.classList.toggle("active");

    const menuOpen = navLinks?.classList.contains("active");

    if (menuIcon) {
        menuIcon.className = menuOpen
            ? "fas fa-times"
            : "fas fa-bars";
    }
});

// Mobile menu link click karne par menu close hoga
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks?.classList.remove("active");

        if (menuIcon) {
            menuIcon.className = "fas fa-bars";
        }
    });
});


// 4. Scroll Reveal Animation
const sections = document.querySelectorAll(".section");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.12
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });
} else {
    sections.forEach(function (section) {
        section.classList.add("show");
    });
}


// 5. Automatic Current Year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 6. Contact Form
const contactForm = document.getElementById("contact-form");

contactForm?.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    const subject = encodeURIComponent("Portfolio Contact Message");
    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    const mailtoLink =
        "mailto:barnwalshivam58@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;

    window.location.href = mailtoLink;
});
