   // Smooth scrolling
   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  // Active nav link updater
  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach((section) => {
      if (window.scrollY >= section.offsetTop - 60) {
        current = section.getAttribute("id");
      }
    });
    document.querySelectorAll("nav a").forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href").includes(current)) {
        a.classList.add("active");
      }
    });
  });

const images = [
    {
        title: "State-of-the-art Equipment",
        description: "Experience training with the latest fitness technology",
                image: "./assets/images/gym-e.png",

    },
    {
        title: "Professional Trainers",
        description: "Get guidance from certified fitness experts",
                image: "./assets/images/gym-e2.png",

    },
    {
        title: "Spacious Workout Areas",
        description: "Train comfortably in our well-designed spaces",
                image: "./assets/images/gym-e3.png",

    },
    {
        title: "Modern Facilities",
        description: "Enjoy premium amenities throughout your workout",
                image: "./assets/images/gym-e4.png",

    }
];

class Slideshow {
    constructor(images) {
        this.images = images;
        this.currentIndex = 0;
        this.showcase = document.querySelector('.showcase');
        this.title = document.querySelector('.showcase-title');
        this.description = document.querySelector('.showcase-description');
        
        document.querySelector('.prev-btn').addEventListener('click', () => this.prev());
        document.querySelector('.next-btn').addEventListener('click', () => this.next());
        
        this.updateSlide();
        this.startAutoSlide();
    }

    updateSlide() {
        const currentImage = this.images[this.currentIndex];
        this.showcase.style.backgroundImage = `url(${currentImage.image})`;
        this.title.textContent = currentImage.title;
        this.description.textContent = currentImage.description;
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateSlide();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateSlide();
    }

    startAutoSlide() {
        setInterval(() => this.next(), 5000);
    }
}

const slideshow = new Slideshow(images);