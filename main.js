const hiddenImgs = document.querySelectorAll('.hidden-images div img');
const hiddenLinks = document.querySelectorAll('.hidden-images div a'); 

const total = hiddenImgs.length;
let index = 0;

const imgLeft = document.getElementById('left');
const imgCenter = document.getElementById('center');
const imgRight = document.getElementById('right');
const centerLink = document.getElementById('centerLink'); 

let autoSlideInterval = null;
let userInteractedTimeout = null;

function updateCarousel() {
  const leftIndex = (index - 1 + total) % total;
  const rightIndex = (index + 1) % total;

  imgLeft.src = hiddenImgs[leftIndex].src;
  imgCenter.src = hiddenImgs[index].src;
  imgRight.src = hiddenImgs[rightIndex].src;

  centerLink.href = hiddenLinks[index].href;
}

function nextSlide() {
  index = (index - 1 + total) % total;
  updateCarousel();
}

function prevSlide() {
  index = (index + 1) % total;
  updateCarousel();
}

function startAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(prevSlide, 4000);
}

function userInteraction() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
  if (userInteractedTimeout) {
    clearTimeout(userInteractedTimeout);
  }
  userInteractedTimeout = setTimeout(() => {
    startAutoSlide();
  }, 5000);
}

document.getElementById('nextBtn').addEventListener('click', () => {
  nextSlide();
  userInteraction();
});

document.getElementById('prevBtn').addEventListener('click', () => {
  prevSlide();
  userInteraction();
});


updateCarousel();
startAutoSlide();

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


const navItems = navLinks.querySelectorAll("a");

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
