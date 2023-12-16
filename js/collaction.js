const baza = [
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

selectNum.addEventListener("change", FilterAll)
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
                    <button onclick="SendLocalFunc(${item.id})" class="sendIDLocal">Забронировать</button>
                    <p><span>${item.price}</span>$/kun</p>
            </div>
        </div>
        `;
    }).join("");
    
    KatalogList.innerHTML = data;
    
}
FilterAll()
function SendLocalFunc(id) {
    localStorage.setItem("itemId", id);
    window.location.href = "/product/items.html";
}
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
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    localStorage.setItem('scrollTopCollaction', scrollTop);
});

// Saytga qayta kirishda olish
window.addEventListener('load', function () {
    var storedScrollTop = localStorage.getItem('scrollTopCollaction');
    if (storedScrollTop !== null) {
        window.scrollTo({
            top: storedScrollTop,
            behavior: 'smooth'
        });
        localStorage.removeItem('scrollTopCollaction');
    }
});