// ===============================
// CONFIG (IMPORTANT 🔥)
// ===============================
const API_URL = "https://portfolio-backend-80m0.onrender.com";

// ===============================
// Contact Form Backend Integration
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

            // 🔥 IMPORTANT CHECK
            if (!response.ok) {
                throw new Error("Server error");
            }

            const data = await response.json();

            document.getElementById("status").innerText = "✅ Message sent successfully!";
            contactForm.reset();

        } catch (error) {
            console.error("ERROR:", error);
            document.getElementById("status").innerText = "❌ Error sending message!";
        }
    });
}