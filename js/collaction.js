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
const KatalogList = document.querySelector(".Katalog__list");
const selectKatalog = document.getElementById("K__select");
const selectNum = document.getElementById("K-select-num");

selectKatalog.addEventListener("change", FilterAll);

selectNum.addEventListener("change", FilterAll )
function FilterAll() {
    let SelValue = selectKatalog.value;
    let filteredData = [];
    let number = selectNum.value;

    if (SelValue === "all") {
        filteredData = baza.sort((a, b) => a.id - b.id);
    } else if (SelValue === "min") {
        filteredData = baza.sort((a, b) => a.price - b.price);
    } else if (SelValue === "max") {
        filteredData = baza.sort((a, b) => b.price - a.price);
    } else if (SelValue === "new") {
        filteredData = baza.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (SelValue === "AtoB") {
        filteredData = baza.sort((a, b) => a.name.localeCompare(b.name));
    }

    const filterNum = filteredData.slice(0, number);
    const data = filterNum.map((item) => {
        return `
        <div class="box__Item" key="${item.id}">
            <div class="box__item-Loc">
                <p>Ташкент</p>
            </div>
            <div class="box__item-Img">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <h4 class="box__item-name">${item.name}</h4>
            <div class="box__item-description">
                <ul>
                    <li><p>Ташкент</p></li>
                    <li><img src="/img/logo/dvigitel.svg" alt=""><p>Toshkent</p></li>
                    <li><i class="fa-solid fa-gas-pump"></i><p>benzin</p></li>
                </ul>
            </div>
            <div class="box__item-price">
                <button>Забронировать</button>
                <p><span>${item.price}</span>$/kun</p>
            </div>
        </div>
        `;
    }).join("");

    KatalogList.innerHTML = data;

}
const CallDiv=document.querySelector(".call_in-div")
const hideCall=document.querySelector(".h-div-Call")
CallDiv.addEventListener("click", hideCallDiv);
hideCall.addEventListener("click", hideCallDiv)
function showCallDiv(){
CallDiv.style.display="block"
CallDiv.style.display="flex"
}
function hideCallDiv(){
    CallDiv.style.display="none"
}

window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    localStorage.setItem('scrollTop', scrollTop);
  });
  
  // Saytga qayta kirishda olish
  window.addEventListener('load', function() {
    var storedScrollTop = localStorage.getItem('scrollTop');
    if (storedScrollTop !== null) {
      window.scrollTo({
        top: storedScrollTop,
        behavior: 'smooth'
      });
      localStorage.removeItem('scrollTop');
    }
  });