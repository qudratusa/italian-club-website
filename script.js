// ===== Carousel Logic is added here =====
let currentSlide = 0;

// It displays the slide at index n
function showSlide(n) {
  const slides = document.querySelectorAll(".carousel-slide");
  if (slides.length === 0) return;

  if (n >= slides.length) currentSlide = 0;
  if (n < 0) currentSlide = slides.length - 1;

  slides.forEach(slide => (slide.style.display = "none"));
  slides[currentSlide].style.display = "block";
}

// It moves the carousel forward and backward
function moveSlide(step) {
  const slides = document.querySelectorAll(".carousel-slide");
  if (slides.length === 0) return;

  currentSlide += step;
  if (currentSlide >= slides.length) currentSlide = 0;
  if (currentSlide < 0) currentSlide = slides.length - 1;

  slides.forEach(slide => (slide.style.display = "none"));
  slides[currentSlide].style.display = "block";
}

// ===== Modal Logic is added =====

// Opens the RSVP modal
function openModal() {
  document.getElementById("modal").style.display = "block";
}

// Closes the RSVP modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Closes modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

// ===== DOMContentLoaded Setup is included =====
document.addEventListener("DOMContentLoaded", () => {
  // === This initializes Carousel ===
  const slides = document.querySelectorAll(".carousel-slide");
  if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(() => moveSlide(1), 5000); // It auto plays every 5 seconds
  }

  // === Accordion Setup is added here ===
  const accordionBtn = document.querySelector(".accordion-toggle");
  const accordionContent = document.querySelector(".accordion-content");

  if (accordionBtn && accordionContent) {
    accordionBtn.addEventListener("click", () => {
      const isOpen = accordionContent.classList.contains("show");

      if (isOpen) {
        accordionContent.style.maxHeight = null;
        accordionContent.classList.remove("show");
      } else {
        accordionContent.classList.add("show");
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      }
    });
  }

  // === Dark Mode Toggle is added here ===
  const toggleBtn = document.getElementById("darkModeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });

    // ===== Dog API Fetch for Membership Page =====
const fetchDogBtn = document.getElementById('fetchDogBtn');
const dogInfoDiv = document.getElementById('dogInfo');

if (fetchDogBtn && dogInfoDiv) {
  fetchDogBtn.addEventListener('click', async () => {
    try {
      const response = await fetch('https://dogapi.dog/api/v2/breeds');
      if (!response.ok) {
        throw new Error('Failed to fetch dog data.');
      }

      const data = await response.json();
      const breeds = data.data;

      if (breeds.length > 0) {
        // It will randomly pick a breed
        const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];

        // It will display breed info
        dogInfoDiv.innerHTML = `
          <h3>${randomBreed.attributes.name}</h3>
          <p>${randomBreed.attributes.description}</p>
          <p><strong>Life Span:</strong> ${randomBreed.attributes.life.min} - ${randomBreed.attributes.life.max} years</p>
        `;
      } else {
        dogInfoDiv.innerHTML = `<p>No dog breeds found. Try again later!</p>`;
      }
    } catch (error) {
      dogInfoDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
  });
}

  }
});