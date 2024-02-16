window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("header").classList.add("fixed-header");
  } else {
    document.querySelector("header").classList.remove("fixed-header");
  }
}



window.addEventListener('DOMContentLoaded', () => {
  const largeCardsContainer = document.getElementById("largeCardsContainer");
  const numCards = document.querySelectorAll(".large-card").length;
  const cardWidth = document.querySelector(".large-card").offsetWidth + 15; // Considera el margen entre las tarjetas
  let currentIndex = 0;

  function showSlide(index) {
      const newTransformValue = -index * cardWidth;
      const maxTransformValue = -((numCards * 2) * cardWidth); // Considera duplicar la cantidad de tarjetas
      largeCardsContainer.style.transition = 'transform 0.5s ease';
      largeCardsContainer.style.transform = `translateX(${Math.max(maxTransformValue, Math.min(0, newTransformValue))}px)`;
  }

  function nextSlide() {
      currentIndex += 1;
      showSlide(currentIndex);

      if (currentIndex >= numCards) {
          currentIndex = 0;
          setTimeout(() => {
              largeCardsContainer.style.transition = 'none';
              showSlide(currentIndex);
          }, 500);
      }
  }

  function prevSlide() {
      currentIndex -= 1;
      showSlide(currentIndex);

      if (currentIndex < 0) {
          currentIndex = numCards - 1;
          setTimeout(() => {
              largeCardsContainer.style.transition = 'none';
              showSlide(currentIndex);
          }, 500);
      }
  }

  document.getElementById("prevBtn").addEventListener("click", prevSlide);
  document.getElementById("nextBtn").addEventListener("click", nextSlide);

  showSlide(currentIndex);
});






// Obtenemos todos los .head
const faqHeads = document.querySelectorAll(".faq .head");

faqHeads.forEach((faqHead) => {
    // Asignamos el evento click a cada .head
    faqHead.addEventListener("click", () => {
        // Obtenemos el nodo padre del .head, es decir .faq
        const faq = faqHead.parentNode;
        // Obtenemos el elemento contiguo al .head, es decir .content
        const faqContent = faqHead.nextElementSibling;
        
        // toggle() permite quitar o asignar la clase "active" al .faq
        faq.classList.toggle("active");
        
        // Si faq tiene la clase "active" entonces asignas al .content una altura
        // esta altura es el alto del contenido que esta oculto + 30px
        if (faq.classList.contains("active")) {
            faqContent.style.height = (faqContent.scrollHeight + 30) + "px";
        } else {
            // caso contrario, tendrá una altura de 0px
            faqContent.style.height = "0px";
        }
    });
});