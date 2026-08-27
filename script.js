/* ===================================
   TYPING ANIMATION
=================================== */

const typingText = [
    "นักพัฒนาเว็บไซต์",
    "ผู้เรียนรู้ด้าน Programming",
    "ผู้สนใจด้าน Technology",
    "Future Developer"
];

const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = typingText[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex =
                (wordIndex + 1) % typingText.length;
        }

    }

    const speed = isDeleting ? 50 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* ===================================
   DARK / LIGHT MODE
=================================== */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    themeToggle.querySelector("i");


/* ตรวจสอบ Theme ที่เคยเลือก */

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});


/* ===================================
   MOBILE MENU
=================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ปิดเมนูเมื่อกดลิงก์ */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ===================================
   SCROLL REVEAL
=================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* ===================================
   SKILL PROGRESS ANIMATION
=================================== */

const progressBars =
    document.querySelectorAll(".progress");


const animateProgress = () => {

    progressBars.forEach(bar => {

        const position =
            bar.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            bar.style.width =
                bar.getAttribute("data-width");

        }

    });

};


window.addEventListener(
    "scroll",
    animateProgress
);

animateProgress();


/* ===================================
   BACK TO TOP
=================================== */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ===================================
   CURRENT YEAR
=================================== */

document.getElementById("year")
.textContent =
new Date().getFullYear();


/* ===================================
   CONTACT FORM
=================================== */

const contactForm =
    document.querySelector(".contact-form");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert(
        "ขอบคุณสำหรับข้อความ! ระบบตัวอย่างนี้ยังไม่ได้เชื่อมต่อกับระบบรับข้อความ"
    );

});