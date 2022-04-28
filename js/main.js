var className = "bg-secondary";
var scrollTrigger = 60;
window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

jQuery(".mobileMenu-openIcon").click(function () {
  jQuery(".header-main-menu").toggleClass("show");
});
