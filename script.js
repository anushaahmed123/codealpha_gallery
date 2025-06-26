const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const images = document.querySelectorAll(".gallery-item");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentIndex = 0;

function showLightbox(index) {
  lightbox.style.display = "flex";
  lightboxImg.src = images[index].src;
  currentIndex = index;
}

images.forEach((img, index) => {
  img.addEventListener("click", () => showLightbox(index));
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
});

// Filter images by category
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    images.forEach(img => {
      const imgCategory = img.getAttribute("data-category");
      if (category === "all" || category === imgCategory) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});
