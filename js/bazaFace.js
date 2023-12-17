// const baza = [];

fetch('http://localhost:3000/api/cars')
  .then(response => response.json())
  .then(baza => {
    addSUV(baza)
    addComfort(baza)
    addPremium(baza)
    addSport(baza)
    console.log(baza);
})
.catch(error => {
    console.error('Malumotlarni olishda xatolik:', error);
  });

const tabs = document.querySelectorAll(".box__btns button");
const tabsParent = document.querySelector(".box__btns");
const tabsContent = document.querySelectorAll(".tabcontent");
const incBtn = document.querySelector(".inc__nav")
const decBtn = document.querySelector(".dec__nav")
function hideTabContent() {
    tabsContent.forEach((item) => {
        item.classList.add("DeActiveContent");
        item.classList.remove("ActiveContent");
    });


    tabs.forEach((item, i) => {

        item.classList.remove("activeBtns");
        const img = item.querySelector("img");
        if (img) {
            img.src = `/img/logo/${i + 1}.svg`;
        }
    });
}

function showTabContent(i = 0) {

    tabsContent.forEach((item) => {
        item.classList.add("DeActiveContent");
        item.classList.remove("ActiveContent");
    });

    tabs.forEach((item) => {
        item.classList.remove("activeBtns");
    });

    tabs[i].classList.add("activeBtns");

    const img = tabs[i].querySelector("img");
    if (img) {
        img.src = `/img/logo/${i + 1}white.svg`;
    }

    tabsContent[i].classList.add("ActiveContent");
    tabsContent[i].classList.remove("DeActiveContent");
}

hideTabContent();
showTabContent();

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        hideTabContent();
        showTabContent(index);
    });
});

const ListSUV = document.querySelector(".box__SUV-List")
const ListSport = document.querySelector(".box__Sport-List")
const ListPremium = document.querySelector(".box__Prem-List")
const ListComfort = document.querySelector(".box__Comf-List")
const selectElement = document.querySelector("#numbers");

function addSUV(baza) {
    const Cars = baza.filter((item) => item.cars.SUV);
    loadCars(ListSUV, Cars);
}

function addSport(baza) {
    const Cars = baza.filter((item) => item.cars.Sport);
    loadCars(ListSport, Cars);
}

function addPremium(baza) {
    const Cars = baza.filter((item) => item.cars.Premium);
    loadCars(ListPremium, Cars);
}

function addComfort(baza) {
    const Cars = baza.filter((item) => item.cars.Comfort);
    loadCars(ListComfort, Cars);
}
function loadCars(list, cars) {
    let number = selectElement.value;

    const loadMoreCars = function () {
        const sliceNumber = cars.slice(0, number);
        const carsHTML = sliceNumber
            .map((item) => {
                return `
                <div class="box__Item">
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
                  <button onclick="SendLocalFunc(${item.id})" class="sendIDLocal">Забронировать</button>
                  <p><span>${item.price}</span>$/kun</p>
                </div>
              </div>
      `;
            })
            .join("");

        list.innerHTML = carsHTML;
    };

    selectElement.addEventListener("change", function () {
        number = selectElement.value;
        loadMoreCars();
    });

    loadMoreCars();
}
function SendLocalFunc(id) {
    localStorage.setItem("itemId", id);
    window.location.href = "/product/items.html";
}

const zayavfka = [
    {
        id: 1,
        name: "Подать заявку",
        deckription: "Оформляете заявку на сайте, связываетесь по телефону или в мессенджерах и бронируете автомобиль",
        img: "/img/logo/zayavka.svg"
    },
    {
        id: 2,
        name: "Договор",
        deckription: "Подписываете договор на аренду автомобиля, вносите оплату и страховой депозит",
        img: "/img/logo/dogovor.svg"
    },
    {
        id: 3,
        name: "Получение",
        deckription: "Забираете авто в нашем салоне или мы можем доставить в любую точку Москвы",
        img: "/img/logo/poluchenie.svg"
    }
]
function showKeyDeck() {
    const showDiv = document.querySelector(".key__deck-List")

    window.addEventListener("DOMContentLoaded", function () {
        const data = zayavfka.map((item) => {
            return `
            <li>
                    <span><img src="${item.img}" alt="logo"><p>${item.id}</p></span>
                    <div>
                        <h4>${item.name}</h4>
                        <p>${item.deckription}</p>
                    </div>
                </li>
            `
        }).join("")
        showDiv.innerHTML = data
    })
}
showKeyDeck()

const reasonsData = [
    {
        id: 1,
        name: "Страховка",
        deckription: "Все наши автомобили застрахованы по ОСАГО И КАСКО",
        img: "/img/logo/reasons1.svg"
    },
    {
        id: 2,
        name: "Ценовая политика",
        deckription: "Всегда доступные цены и приятные бонусы постоянным клиентам",
        img: "/img/logo/reasons2.svg"
    },
    {
        id: 3,
        name: "Оплата",
        deckription: "Любая удобная для вас форма оплаты (нал/безнал, банковский перевод)",
        img: "/img/logo/reasons4.svg"
    },
    {
        id: 4,
        name: "Автопарк",
        deckription: "Весь автопарк в отличном состоянии    и всегда пополняется новыми моделями",
        img: "/img/logo/reasons5.svg"
    },
    {
        id: 5,
        name: "Скорость",
        deckription: "Оформление аренды любого авто в течении не более 15 минут",
        img: "/img/logo/reasons6.svg"
    },
]

function showReasons() {
    const showList = document.querySelector(".reasons__list")
    window.addEventListener("DOMContentLoaded", function () {
        const data = reasonsData.map((item) => {
            return `
            <div class="reasons__item">
            <span>
                <img src="${item.img}" alt="${item.name}">
            </span>
            <div class="reasons__text">
                <h4>${item.name}</h4>
                <p>${item.deckription}</p>
            </div>
        </div>
`
        }).join("")
        showList.innerHTML = data
    })
}
showReasons()


const brendBaza = [
    {
        id: 1,
        img: "/img/logo/audi.png",
    },
    {
        id: 2,
        img: "/img/logo/bmw.png",
    },
    {
        id: 3,
        img: "/img/logo/ford.png",
    },
    {
        id: 4,
        img: "/img/logo/kia.png",
    },
    {
        id: 5,
        img: "/img/logo/mers.png",
    },
    {
        id: 6,
        img: "/img/logo/wolks.png",
    },
    {
        id: 7,
        img: "/img/logo/porsche.png",
    },
]
function showBrend() {
    const div = document.querySelector(".brend__list")
    window.addEventListener("DOMContentLoaded", function () {
        const data = brendBaza.map((item) => {
            return `
            <img src="${item.img}" alt="brend">
            
            `
        }).join("")
        div.innerHTML = data
    })
}
showBrend()
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
    localStorage.setItem('scrollTopIndex', scrollTop);
  });
  
  // Saytga qayta kirishda olish
  window.addEventListener('load', function() {
    var storedScrollTop = localStorage.getItem('scrollTopIndex');
    if (storedScrollTop !== null) {
      window.scrollTo({
        top: storedScrollTop,
        behavior: 'smooth'
      });
      localStorage.removeItem('scrollTopIndex');
    }
  });
