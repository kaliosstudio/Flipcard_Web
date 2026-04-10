document.addEventListener("DOMContentLoaded", () => {
    
    // Navbar Scroll Effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("nav-scrolled", "py-2");
            navbar.classList.remove("py-4");
        } else {
            navbar.classList.remove("nav-scrolled", "py-2");
            navbar.classList.add("py-4");
        }
    });

    // Scroll Reveal Observer
    const revealElements = document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right");
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-active");
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
    
    // Trigger hero animations immediately if they are visible on load
    setTimeout(() => {
        const heroLeft = document.querySelector(".reveal-left");
        const heroRight = document.querySelector(".reveal-right");
        if(heroLeft) heroLeft.classList.add("reveal-active");
        if(heroRight) heroRight.classList.add("reveal-active");
    }, 100);
});
