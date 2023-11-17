const baza = [
    // Business: "Biznes",
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
            Business: "Biznes",
            SUV: "Yo'l tanlamas",
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
            Business: "Biznes",
            SUV: "Yo'l tanlamas",
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
            SUV: "Yo'l tanlamas",
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
            SUV: "Yo'l tanlamas",
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
            Business: "Biznes",
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
            Business: "Biznes",
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
            Business: "Biznes",
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
            Business: "Biznes",
        }
    },
]

var dateInputF = document.getElementById('FirstData');
var dateInputL = document.getElementById('LastData');

dateInputF.addEventListener('change', function () {
    var selectedDate = new Date(dateInputF.value);
    var day = selectedDate.getDate();
    var month = selectedDate.getMonth() + 1;
    var year = selectedDate.getFullYear();
    var formattedDate = year + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2);
    dateInputF.value = formattedDate;
    FirstDateFunc(formattedDate)
});
dateInputL.addEventListener('change', function () {
    var selectedDate = new Date(dateInputL.value);
    var day = selectedDate.getDate();
    var month = selectedDate.getMonth() + 1;
    var year = selectedDate.getFullYear();
    var formattedDate = year + '-' + ('0' + month).slice(-2) + '-' + ('0' + day).slice(-2);
    dateInputL.value = formattedDate;
    LastDateFunc(formattedDate)
});
function FirstDateFunc(n) {
    console.log("First data", n);
}
function LastDateFunc(n) {
    console.log("Last data", n);
}
const check1 = document.getElementById("check1");
const check2 = document.getElementById("check2");
const check3 = document.getElementById("check3");
const check4 = document.getElementById("check4");
const check5 = document.getElementById("check5");
const check6 = document.getElementById("check6");
const btnSearch = document.querySelector(".btn__search");
btnSearch.addEventListener("click", function () {
    if (check1.checked === true) {
        const selectedCars = baza.filter((item) => item.cars.SUV);
        const selectedIds = selectedCars.map((item) => item);
        console.log(selectedIds);
    }
    if (check2.checked === true) {
        const selectedCars = baza.filter((item) => item.cars.Business);
        const selectedIds = selectedCars.map((item) => item);
        console.log(selectedIds);
    }
    if (check3.checked === true) {
        const selectedCars = baza.filter((item) => item.cars.Premium);
        const selectedIds = selectedCars.map((item) => item);
        console.log(selectedIds);
    }
    if (check4.checked === true) {
        const selectedCars = baza.filter((item) => item.cars.Sport);
        const selectedIds = selectedCars.map((item) => item);
        console.log(selectedIds);
    }
    if (check5.checked === true) {
        const selectedCars = baza.filter((item) => item.cars.SportCar);
        const selectedIds = selectedCars.map((item) => item);
        console.log(selectedIds);
    }
    if (check6.checked === true) {
        const selectedCars = baza.filter((item) => item.cars.Comfort);
        const selectedIds = selectedCars.map((item) => item);
        console.log(selectedIds);
    }
});
const tabs = document.querySelectorAll(".box__btns button");
const tabsParent = document.querySelector(".box__btns");
const tabsContent = document.querySelectorAll(".tabcontent");

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
const ListBusness = document.querySelector(".box__Buss-List")
const ListSport = document.querySelector(".box__Sport-List")
const ListPremium = document.querySelector(".box__Prem-List")
const ListComfort = document.querySelector(".box__Comf-List")
function addSUV() {
    window.addEventListener("DOMContentLoaded", function () {
        const CarSUV = baza.filter((item) => item.cars.SUV)
        const Cars = CarSUV.map((item) => {
            return `
        <div class="box__Item">
        <div class="box__item-Loc">
            <p>${item.region.Toshkent}</p>
        </div>
        <div class="box__item-Img">
            <img src="${item.img}" alt="${item.name}">
        </div>
        <h4 class="box__item-name">${item.name}</h4>
        <div class="box__item-description">
            <ul>
                <li><p>${item.region.Toshkent}</p></li>
                <li><img src="/img/logo/dvigitel.svg" alt=""><p>Toshkent</p></li>
                <li><i class="fa-solid fa-gas-pump"></i><p>benzin</p></li>
            </ul>
        </div>
        <div class="box__item-price">
            <button>Bant qilish</button>
            <p><span>${item.price}</span>$/kun</p>
        </div>
    </div>
        `
        }).join("")
        ListSUV.innerHTML = Cars
    })
}

function addBuss() {
    window.addEventListener("DOMContentLoaded", function () {
        const CarBuss = baza.filter((item) => item.cars.Business)
        const Cars = CarBuss.map((item) => {
            return `
        <div class="box__Item">
        <div class="box__item-Loc">
            <p>${item.region.Toshkent}</p>
        </div>
        <div class="box__item-Img">
            <img src="${item.img}" alt="${item.name}">
        </div>
        <h4 class="box__item-name">${item.name}</h4>
        <div class="box__item-description">
            <ul>
                <li><p>${item.region.Toshkent}</p></li>
                <li><img src="/img/logo/dvigitel.svg" alt=""><p>Toshkent</p></li>
                <li><i class="fa-solid fa-gas-pump"></i><p>benzin</p></li>
            </ul>
        </div>
        <div class="box__item-price">
            <button>Bant qilish</button>
            <p><span>${item.price}</span>$/kun</p>
        </div>
    </div>
        `
        }).join("")
        ListBusness.innerHTML = Cars
    })
}
function addSport() {
    window.addEventListener("DOMContentLoaded", function () {
        const CarSport = baza.filter((item) => item.cars.SportCar)
        const Cars = CarSport.map((item) => {
            return `
        <div class="box__Item">
        <div class="box__item-Loc">
            <p>${item.region.Toshkent}</p>
        </div>
        <div class="box__item-Img">
            <img src="${item.img}" alt="${item.name}">
        </div>
        <h4 class="box__item-name">${item.name}</h4>
        <div class="box__item-description">
            <ul>
                <li><p>${item.region.Toshkent}</p></li>
                <li><img src="/img/logo/dvigitel.svg" alt=""><p>Toshkent</p></li>
                <li><i class="fa-solid fa-gas-pump"></i><p>benzin</p></li>
            </ul>
        </div>
        <div class="box__item-price">
            <button>Bant qilish</button>
            <p><span>${item.price}</span>$/kun</p>
        </div>
    </div>
        `
        }).join("")
        ListSport.innerHTML = Cars
    })
}
function addPremium() {
    window.addEventListener("DOMContentLoaded", function () {
        const CarPremium = baza.filter((item) => item.cars.Premium)
        const Cars = CarPremium.map((item) => {
            return `
        <div class="box__Item">
        <div class="box__item-Loc">
            <p>${item.region.Toshkent}</p>
        </div>
        <div class="box__item-Img">
            <img src="${item.img}" alt="${item.name}">
        </div>
        <h4 class="box__item-name">${item.name}</h4>
        <div class="box__item-description">
            <ul>
                <li><p>${item.region.Toshkent}</p></li>
                <li><img src="/img/logo/dvigitel.svg" alt=""><p>Toshkent</p></li>
                <li><i class="fa-solid fa-gas-pump"></i><p>benzin</p></li>
            </ul>
        </div>
        <div class="box__item-price">
            <button>Bant qilish</button>
            <p><span>${item.price}</span>$/kun</p>
        </div>
    </div>
        `
        }).join("")
        ListPremium.innerHTML = Cars
    })
}
function addComfort() {
    window.addEventListener("DOMContentLoaded", function () {
        const CarComfort = baza.filter((item) => item.cars.Comfort)
        const Cars = CarComfort.map((item) => {
            return `
        <div class="box__Item">
        <div class="box__item-Loc">
            <p>${item.region.Toshkent}</p>
        </div>
        <div class="box__item-Img">
            <img src="${item.img}" alt="${item.name}">
        </div>
        <h4 class="box__item-name">${item.name}</h4>
        <div class="box__item-description">
            <ul>
                <li><p>${item.region.Toshkent}</p></li>
                <li><img src="/img/logo/dvigitel.svg" alt=""><p>Toshkent</p></li>
                <li><i class="fa-solid fa-gas-pump"></i><p>benzin</p></li>
            </ul>
        </div>
        <div class="box__item-price">
            <button>Bant qilish</button>
            <p><span>${item.price}</span>$/kun</p>
        </div>
    </div>
        `
        }).join("")
        ListComfort.innerHTML = Cars
    })
}
addSUV();
addBuss();
addSport();
addPremium();
addComfort();