window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("header").classList.add("fixed-header");
  } else {
    document.querySelector("header").classList.remove("fixed-header");
  }
}