const baza = [
    // 
    // Premium: "Premium",
    // Sport: "Sport",
    // SportCar: "Sport Car",
    {
        id: 1,
        brand: "Chevrolet",
        name: "Equinox",
        price: 130,
        img: "/img/images/1632489639.png",
        year: "2022",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            SUV: "Yo'l tanlamas",
            Comfort: "Komford"
        }
    },
    {
        id: 2,
        brand: "BMW",
        name: "BMW 2 Series Gran Coupe",
        price: 150,
        img: "/img/images/bmw-2-gran-coupe-4d-white-2021.png",
        year: "2021",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            SUV: "Yo'l tanlamas",
        }
    },
    {
        id: 3,
        brand: "BMW",
        name: " BMW 4 Series 430i 2D Convertible Blue",
        price: 165,
        img: "/img/images/bmw-4-2d-coupe-blue-US-2021.png",
        year: "2021",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            Sport: "Sport",
            SportCar: "Sport Car",

        }
    },
    {
        id: 4,
        brand: "BMW",
        name: "BMW 5 Series 540i 4D",
        price: 165,
        img: "/img/images/bmw-5-4d-blue-US-2022.png",
        year: "2022",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            Sport: "Sport",
            SportCar: "Sport Car",

            Premium: "Premium"


        }
    },
    {
        id: 5,
        brand: "BMW",
        name: "BMW 7 Series",
        price: 165,
        img: "/img/images/bmw-7-4d-silver-2021.png",
        year: "2021",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            Sport: "Sport",
            SportCar: "Sport Car",
            Comfort: "Komford"

        }
    },
    {
        id: 6,
        brand: "BMW",
        name: "BMW 3 Series 330i 4D",
        price: 145,
        img: "/img/images/bmw-330i-4d-blue-2021.png",
        year: "2021",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            Sport: "Sport",
            SportCar: "Sport Car",
        }
    },
    {
        id: 7,
        brand: "BMW",
        name: "BMW 8 SERIES 3.0 840I 2d",
        price: 175,
        img: "/img/images/bmw-840i-2d-coupe-blue-2021.png",
        year: "2021",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            Sport: "Sport",
            SportCar: "Sport Car",
            Premium: "Premium",
            Comfort: "Komford"

        }
    },
    {
        id: 8,
        brand: "BMW",
        name: "BMW 8 Series 840i 2D Convertible",
        price: 175,
        img: "/img/images/bmw-840i-convertible-2d-grey-open-US-2021.png",
        year: "2021",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            Sport: "Sport",
            SportCar: "Sport Car",
            Comfort: "Komford"

        }
    },
    {
        id: 9,
        brand: "BMW",
        name: "BMW X1",
        price: 175,
        img: "/img/images/bmw-x1-suv-white-2021.png",
        year: "2021",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            Comfort: "Komford",
            SUV: "Yo'l tanlamas",
            Premium: "Premium",

        }
    },
    {
        id: 10,
        brand: "BMW",
        name: "BMW X3",
        price: 175,
        img: "/img/images/bmw-x3-suv-white-US-2021.png",
        year: "2021",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            Comfort: "Komford",
            SUV: "Yo'l tanlamas",
            Premium: "Premium",

        }
    },
    {
        id: 11,
        brand: "BMW",
        name: "BMW X5 40i 4D",
        price: 175,
        img: "/img/images/bmw-x5-40i-4d-suv-white-2021.png",
        year: "2021",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            Comfort: "Komford",
            SUV: "Yo'l tanlamas",
            Premium: "Premium",

        }
    },
    {
        id: 12,
        brand: "BMW",
        name: "BMW XM 2024",
        price: 175,
        img: "/img/images/bmw-xm-suv-blue-US-2024.png",
        year: "2024",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            Comfort: "Komford",
            SUV: "Yo'l tanlamas",
            Premium: "Premium",

        }
    },
    {
        id: 13,
        brand: "BMW",
        name: "BMW Z4 2D",
        price: 175,
        img: "/img/images/bmw-Z4-2d-convertible-white-US-2021.png",
        year: "2021",
        region: {
            Toshkent: "Toshkent",
        },
        cars: {
            Sport: "Sport",
            SportCar: "Sport Car",
        }
    },
]

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

function addSUV() {
    window.addEventListener("DOMContentLoaded", function () {
        const Cars = baza.filter((item) => item.cars.SUV);
        let number = selectElement.value;

        const loadMoreCars = function () {
            const sliceNumber = Cars.slice(0, number);
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
                <button>Забронировать</button>
                <p><span>${item.price}</span>$/kun</p>
              </div>
            </div>
          `;
                })
                .join("");

            ListSUV.innerHTML = carsHTML;

        };

        selectElement.addEventListener("change", function () {
            number = selectElement.value;
            loadMoreCars();
        });

        loadMoreCars();
    });
}

function addSport() {
    window.addEventListener("DOMContentLoaded", function () {
        const Cars = baza.filter((item) => item.cars.Sport);
        let number = selectElement.value;

        const loadMoreCars = function () {
            const sliceNumber = Cars.slice(0, number);
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
                  <button>Забронировать</button>
                  <p><span>${item.price}</span>$/kun</p>
                </div>
              </div>
            `;
                })
                .join("");

            ListSport.innerHTML = carsHTML;
        };

        selectElement.addEventListener("change", function () {
            number = selectElement.value;
            loadMoreCars();
        });

        loadMoreCars();
    });
}
function addPremium() {
    window.addEventListener("DOMContentLoaded", function () {
        const Cars = baza.filter((item) => item.cars.Premium);
        let number = selectElement.value;

        const loadMoreCars = function () {
            const sliceNumber = Cars.slice(0, number);
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
                  <button>Забронировать</button>
                  <p><span>${item.price}</span>$/kun</p>
                </div>
              </div>
            `;
                })
                .join("");

            ListPremium.innerHTML = carsHTML;
        };

        selectElement.addEventListener("change", function () {
            number = selectElement.value;
            loadMoreCars();
        });

        loadMoreCars();
    });
}
function addComfort() {
    window.addEventListener("DOMContentLoaded", function () {
        const Cars = baza.filter((item) => item.cars.Comfort);
        let number = selectElement.value;

        const loadMoreCars = function () {
            const sliceNumber = Cars.slice(0, number);
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
                  <button>Забронировать</button>
                  <p><span>${item.price}</span>$/kun</p>
                </div>
              </div>
            `;
                })
                .join("");

            ListComfort.innerHTML = carsHTML;
        };

        selectElement.addEventListener("change", function () {
            number = selectElement.value;
            loadMoreCars();
        });

        loadMoreCars();
    });
}

addSUV();
addSport();
addPremium();
addComfort();

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
const FirstMain = document.querySelector(".main")
const FirstHero = document.querySelector(".hero")
const boxBtnShow = document.querySelector(".box__btn")
const KatalogMain = document.querySelector(".Katalog-main")
boxBtnShow.addEventListener("click", function () {
   showAuto()
})
function showAuto(){
    KatalogMain.style.display = "block"
    FirstMain.style.display = "none"
    FirstHero.style.display = "none"
    FilterAll()
}
