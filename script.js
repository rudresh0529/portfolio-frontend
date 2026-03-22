// ===============================
// CONFIG (IMPORTANT 🔥)
// ===============================
const API_URL = "https://portfolio-backend-80m0.onrender.com"; // 👈 change if your backend URL is different


// ===============================
// Dark / Light Mode Toggle
// ===============================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.onclick = () => {
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
    };
}


// ===============================
// Mobile Navbar Toggle
// ===============================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.onclick = () => {
        navLinks.classList.toggle("show");
    };
}


// ===============================
// Smooth Scroll Buttons
// ===============================
const skillsBtn = document.getElementById("skillsBtn");
const contactBtn = document.getElementById("contactBtn");

if (skillsBtn) {
    skillsBtn.onclick = () => {
        document.getElementById("skills").scrollIntoView({
            behavior: "smooth"
        });
    };
}

if (contactBtn) {
    contactBtn.onclick = () => {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    };
}


// ===============================
// Scroll Reveal Animation
// ===============================
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ===============================
// CONTACT FORM (FINAL FIX 🔥)
// ===============================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = this.querySelector("input[type='text']").value;
        const email = this.querySelector("input[type='email']").value;
        const message = this.querySelector("textarea").value;

        try {
            const response = await fetch(`${API_URL}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, message })
            });

            // Check if response is ok
            if (!response.ok) {
                throw new Error("Server error");
            }

            const data = await response.json();
            document.getElementById("status").innerText = data.message;

            contactForm.reset();

        } catch (error) {
            console.error("Error:", error);
            document.getElementById("status").innerText = "❌ Error sending message!";
        }
    });
}