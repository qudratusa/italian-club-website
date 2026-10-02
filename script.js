document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("darkModeToggle");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("italianClubTheme"); } catch {}
  function applyTheme(dark) {
    document.body.classList.toggle("dark-mode", dark);
    themeButton.textContent = dark ? "Light mode" : "Dark mode";
    themeButton.setAttribute("aria-pressed", String(dark));
  }
  if (themeButton) {
    applyTheme(savedTheme ? savedTheme === "dark" : systemDark.matches);
    themeButton.addEventListener("click", () => {
      const dark = !document.body.classList.contains("dark-mode");
      applyTheme(dark);
      savedTheme = dark ? "dark" : "light";
      try { localStorage.setItem("italianClubTheme", savedTheme); } catch {}
    });
    systemDark.addEventListener("change", event => {
      if (!savedTheme) applyTheme(event.matches);
    });
  }

  const accordionButton = document.querySelector(".accordion-toggle");
  if (accordionButton) {
    const content = document.getElementById(accordionButton.getAttribute("aria-controls"));
    accordionButton.addEventListener("click", () => {
      const expanded = accordionButton.getAttribute("aria-expanded") === "true";
      accordionButton.setAttribute("aria-expanded", String(!expanded));
      accordionButton.textContent = expanded ? "Read project history" : "Hide project history";
      content.hidden = expanded;
    });
  }

  const dialog = document.getElementById("rsvpDialog");
  if (dialog) {
    let opener = null;
    document.querySelectorAll("[data-rsvp]").forEach(button => {
      button.addEventListener("click", () => {
        opener = button;
        document.getElementById("rsvp-title").textContent = button.dataset.rsvp + " · RSVP preview";
        dialog.showModal();
      });
    });
    document.getElementById("closeModal").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", event => {
      const bounds = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
    });
    dialog.addEventListener("close", () => { if (opener) opener.focus(); });
    // Native modal dialogs contain focus and close with Escape.
  }

  const slides = [...document.querySelectorAll(".carousel-slide")];
  if (slides.length) {
    let index = 0;
    let timer = null;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let paused = reducedMotion.matches;
    const pauseButton = document.getElementById("pauseCarousel");
    const status = document.getElementById("slideStatus");
    function showSlide(next, manual = false) {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, position) => { slide.hidden = position !== index; });
      status.setAttribute("aria-live", manual ? "polite" : "off");
      status.textContent = (index + 1) + " of " + slides.length;
    }
    function syncPlayback() {
      clearInterval(timer);
      pauseButton.textContent = paused ? "Play" : "Pause";
      pauseButton.setAttribute("aria-pressed", String(paused));
      pauseButton.setAttribute("aria-label", paused ? "Play automatic slideshow" : "Pause automatic slideshow");
      if (!paused) timer = setInterval(() => {
        // Do not move content while someone is interacting with the carousel.
        if (!document.hidden && !document.querySelector(".carousel").matches(":hover, :focus-within")) showSlide(index + 1);
      }, 5000);
    }
    document.getElementById("prevSlide").addEventListener("click", () => { showSlide(index - 1, true); syncPlayback(); });
    document.getElementById("nextSlide").addEventListener("click", () => { showSlide(index + 1, true); syncPlayback(); });
    pauseButton.addEventListener("click", () => { paused = !paused; syncPlayback(); });
    reducedMotion.addEventListener("change", event => { if (event.matches) { paused = true; syncPlayback(); } });
    showSlide(0);
    syncPlayback();
  }

  const membershipForm = document.getElementById("membershipForm");
  if (membershipForm) {
    membershipForm.addEventListener("submit", event => {
      event.preventDefault();
      document.getElementById("formStatus").textContent =
        "Demo complete. No membership was created, and your details were not sent or saved.";
      membershipForm.reset();
    });
    document.getElementById("membershipSubmit").disabled = false;
  }

  const phraseButton = document.getElementById("phraseBtn");
  if (phraseButton) {
    const phrases = [
      ["Ciao!", "Hi! / Bye!", "A friendly, informal greeting."],
      ["Come stai?", "How are you?", "Use this when checking in with a friend."],
      ["Piacere di conoscerti.", "Nice to meet you.", "A warm way to introduce yourself."],
      ["Grazie mille!", "Thank you so much!", "A little extra appreciation."],
      ["A presto!", "See you soon!", "A friendly way to say goodbye."]
    ];
    let nextPhrase = 0;
    phraseButton.addEventListener("click", () => {
      const [italian, english, note] = phrases[nextPhrase];
      nextPhrase = (nextPhrase + 1) % phrases.length;
      const heading = document.createElement("h3");
      heading.lang = "it";
      heading.textContent = italian;
      const translation = document.createElement("p");
      translation.textContent = english;
      const detail = document.createElement("p");
      detail.className = "muted";
      detail.textContent = note;
      document.getElementById("phraseInfo").replaceChildren(heading, translation, detail);
      phraseButton.textContent = "Show another phrase";
    });
  }
});
