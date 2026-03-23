const API_URL = "https://portfolio-backend-8om0.onrender.com";

// THEME TOGGLE
const toggle = document.getElementById("themeToggle");

if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
  };
}

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.onclick = () => {
    navLinks.classList.toggle("show");
  };
}

// SCROLL BUTTONS
document.getElementById("contactBtn").onclick = () => {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("skillsBtn").onclick = () => {
  document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
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
const btn = form.querySelector("button");

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
      "✅ Thank you for reaching out. Your message has been successfully delivered.";

    form.reset();

  } catch {
    document.getElementById("status").innerText =
      "❌ Something went wrong. Please try again later.";
  }

  btn.innerText = "Send";
  btn.disabled = false;
});