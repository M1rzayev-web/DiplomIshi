const hBurger = document.querySelector(".h__burger");
const hBurgerX = document.querySelector(".h__burgerX");
const hMobile = document.querySelector(".header__mobile");

hBurger.addEventListener("click", function () {
    hMobile.style.display = "block";
    setTimeout(function () {
        hMobile.style.transition = "transform 0.5s ease";
        hMobile.style.transform = "translateX(0)";
    }, 1);

});

hBurgerX.addEventListener("click", function () {
    hMobile.style.transition = "transform 0.5s ease";
    hMobile.style.transform = "translateX(-100%)";
    setTimeout(function () {
        hMobile.style.display = "none";
    }, 1000);
});
const CallDiv = document.querySelector(".call_in-div");
const hideCall = document.querySelector(".h-div-Call");
hideCall.addEventListener("click", hideCallDiv);

function showCallDiv() {
  CallDiv.style.display = "block";
  CallDiv.style.display = "flex";
}

function hideCallDiv() {
  CallDiv.style.display = "none";
}

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    localStorage.setItem('scrollTopContact', scrollTop);
  });
  
  // Saytga qayta kirishda olish
  window.addEventListener('load', function() {
    var storedScrollTop = localStorage.getItem('scrollTopContact');
    if (storedScrollTop !== null) {
      window.scrollTo({
        top: storedScrollTop,
        behavior: 'smooth'
      });
      localStorage.removeItem('scrollTopContact');
    }
  });