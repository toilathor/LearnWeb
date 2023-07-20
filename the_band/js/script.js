const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
modalContainer = document.querySelector(".js-modal-container");
const modalClose = document.querySelector(".js-modal-close");

console.log(buyBtns);
function showBuyTicket() {
  modal.classList.add("open");
}

function hideBuyTicket(params) {
  modal.classList.remove("open");
}

buyBtns.forEach((element) => {
  element.addEventListener("click", showBuyTicket);
});

modalClose.addEventListener("click", hideBuyTicket);

modal.addEventListener("click", hideBuyTicket);

modalContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

var header = document.getElementById("header");
var mobileMenu = document.getElementById("mobile-menu");
var headerHeight = header.clientHeight;

// Open/Close menu
mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};

// Auto close menu
var menusItems = document.querySelectorAll('#nav li a[href*="#"]');
menusItems.forEach((element) => {
  element.onclick = function (event) {
    console.log(element);
    if (
      element.nextElementSibling != null &&
      element.nextElementSibling.classList.contains("subnav")
    ) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  };
});
