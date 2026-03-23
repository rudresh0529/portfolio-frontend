const API_URL = "https://portfolio-backend-8om0.onrender.com";

// THEME TOGGLE
const toggle = document.getElementById("themeToggle");

toggle.onclick = () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
};

// SCROLL ANIMATION
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

// FORM
const form = document.getElementById("contactForm");
const btn = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form[0].value;
  const email = form[1].value;
  const message = form[2].value;

  btn.innerText = "Sending...";
  btn.disabled = true;

  try {
    const res = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    if (!res.ok) throw new Error();

    document.getElementById("status").innerText =
      "✅ Your message has been sent successfully. I will get back to you shortly.";

    form.reset();

  } catch {
    document.getElementById("status").innerText =
      "❌ Unable to send message. Please try again later.";
  }

  btn.innerText = "Send Message";
  btn.disabled = false;
});