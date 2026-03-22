// ===============================
// CONFIG (CHANGE THIS URL)
// ===============================
const API_URL = "https://portfolio-backend-80m0.onrender.com";

// ===============================
// Theme Toggle
// ===============================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.onclick = () => {
        document.body.classList.toggle("light");
        document.body.classList.toggle("dark");
    };
}

// ===============================
// Smooth Scroll
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
// CONTACT FORM (FIXED)
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

            const data = await response.json();
            document.getElementById("status").innerText = data.message;

            contactForm.reset();
        } catch (error) {
            document.getElementById("status").innerText = "Error sending message!";
        }
    });
}