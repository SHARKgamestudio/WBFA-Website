const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("mouseenter", function() {
    this.style.color = "orange";
    this.style.boxShadow = "0px 0px 10px 2px orange";
  });
  link.addEventListener("mouseleave", function() {
    this.style.color = "#333";
    this.style.boxShadow = "none";
  });
});

const slides = document.querySelector(".slides");
const handles = document.querySelectorAll(".handle");

handles.forEach((handle, index) => {
  handle.addEventListener("click", function() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    handles.forEach(handle => handle.style.backgroundColor = "#333");
    handle.style.backgroundColor = "orange";
  });
});

document.querySelector(".download-btn").addEventListener("click", function() {
    var downloadIcon = document.querySelector(".download-icon");
    downloadIcon.style.transform = "rotate(360deg)";
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
