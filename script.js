/* ---------- Mobile navigation ---------- */
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const headerNav = document.getElementById("header-nav");

if (mobileMenuToggle && headerNav) {
  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = headerNav.classList.toggle("open");
    mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  headerNav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      headerNav.classList.remove("open");
      mobileMenuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- Scroll reveal ---------- */
function initReveals() {
  const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -80px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initReveals);
} else {
  initReveals();
}

/* ---------- Contact form validation ---------- */
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

const validators = {
  name: (value) => value.trim().length >= 2,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  subject: (value) => value.trim().length >= 3,
  message: (value) => value.trim().length >= 10,
};

const fieldErrors = {
  name: "Please enter your full name (at least 2 characters).",
  email: "Please enter a valid email address.",
  subject: "Please enter a subject (at least 3 characters).",
  message: "Please enter a message (at least 10 characters).",
};

function showError(fieldId, message) {
  const errorEl = document.getElementById(`${fieldId}-error`);
  const inputEl = document.getElementById(`contact-${fieldId}`);
  if (errorEl) errorEl.textContent = message;
  if (inputEl) inputEl.setAttribute("aria-invalid", "true");
}

function clearError(fieldId) {
  const errorEl = document.getElementById(`${fieldId}-error`);
  const inputEl = document.getElementById(`contact-${fieldId}`);
  if (errorEl) errorEl.textContent = "";
  if (inputEl) inputEl.removeAttribute("aria-invalid");
}

function validateField(fieldId) {
  const inputEl = document.getElementById(`contact-${fieldId}`);
  if (!inputEl) return true;
  const value = inputEl.value;
  const isValid = validators[fieldId](value);
  if (isValid) {
    clearError(fieldId);
    return true;
  }
  showError(fieldId, fieldErrors[fieldId]);
  return false;
}

if (contactForm) {
  contactForm.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("blur", () => {
      const fieldId = input.name;
      if (fieldId) validateField(fieldId);
    });

    input.addEventListener("input", () => {
      const fieldId = input.name;
      if (fieldId && input.getAttribute("aria-invalid") === "true") {
        validateField(fieldId);
      }
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let isFormValid = true;
    ["name", "email", "subject", "message"].forEach((fieldId) => {
      if (!validateField(fieldId)) isFormValid = false;
    });

    if (!isFormValid) {
      formMessage.textContent = "Please fix the errors above before sending.";
      formMessage.className = "form-message error";
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Simulate form submission (replace with real endpoint later)
    setTimeout(() => {
      formMessage.textContent = "Thank you! Your message has been sent.";
      formMessage.className = "form-message success";
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;

      setTimeout(() => {
        formMessage.textContent = "";
        formMessage.className = "form-message";
      }, 5000);
    }, 1200);
  });
}