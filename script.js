document.addEventListener("DOMContentLoaded", function () {
    // Fix Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
            console.log("Menu toggled"); // Debugging to check if it fires
        });
    } else {
        console.log("Menu toggle or navMenu not found!"); // Debugging to check if elements exist
    }

    // Hero Video Autoplay (If not already set)
    const heroVideo = document.querySelector(".hero-video");
    if (heroVideo) {
        heroVideo.play().catch((error) => {
            console.error("Video autoplay failed: ", error);
        });
    }

    // Existing Code - No Changes
    let dots = document.getElementById("loading-dots");
    if (dots) {
        let count = 0;
        let interval = setInterval(() => {
            count = (count + 1) % 4;
            dots.innerHTML = ".".repeat(count);
        }, 500);

        setTimeout(() => {
            clearInterval(interval);
            let loading = document.getElementById("loading");
            let popup = document.getElementById("popup");

            if (loading) loading.style.display = "none";
            if (popup) popup.style.display = "flex";
        }, 3000);
    }

    const agreeButton = document.getElementById("agree");
    if (agreeButton) {
        agreeButton.addEventListener("click", function () {
            const popup = document.getElementById("popup");
            if (popup) popup.style.display = "none";
        });
    }

    function startCounterAnimation() {
        const counters = document.querySelectorAll(".counter");

        counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const step = Math.max(target / 100, 1);

            function updateCounter() {
                count += step;
                counter.innerText = Math.floor(count);

                if (count < target) {
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            }
            updateCounter();
        });
    }

    function handleScroll() {
        const section = document.querySelector(".stats-section");
        if (!section) return;

        const sectionPosition = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionPosition < screenHeight - 100) {
            startCounterAnimation();
            window.removeEventListener("scroll", handleScroll);
        }
    }

    window.addEventListener("scroll", handleScroll);

    const steps = document.querySelectorAll(".process-step");

    function revealSteps() {
        let delay = 0;
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.classList.add("show");
            }, delay);
            delay += 400;
        });
    }

    function onScroll() {
        const section = document.querySelector(".process-section");
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (sectionTop < screenHeight - 100) {
            revealSteps();
            window.removeEventListener("scroll", onScroll);
        }
    }

    window.addEventListener("scroll", onScroll);
});
    









