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
window.addEventListener("DOMContentLoaded", function () {
    const showIfId = document.querySelector(".show-if-id")
    const erorList = document.querySelector(".eror-List")
    if (!localStorage.getItem("itemId")) {
        showIfId.style.display = "none"
        erorList.style.display = "block"
        erorList.style.display = "flex"
    } else {
        console.log("ok");
        var itemId = localStorage.getItem('itemId');
        const item = baza.find((element) => element.id === Number(itemId));
        const itemTitle = document.querySelector(".itemTitle")
        const itemName = document.querySelector(".itemName")
        const ItemName = document.querySelector(".ItemName")
        itemTitle.textContent = item.name
        itemName.textContent = item.name
        ItemName.textContent = item.name
        const itemImgList = document.querySelector(".ItemImgList")
        itemImgList.innerHTML = `
    <div class="imgTop">
                            <img src="${item.img}" alt="${item.name}">
                        </div>
                        <div class="imgItemGalarey">
                            <img src="${item.img}" alt="${item.name}">
                            <img src="${item.img}" alt="${item.name}">
                            <img src="${item.img}" alt="${item.name}">
                            <img src="${item.img}" alt="${item.name}">
                            <img src="${item.img}" alt="${item.name}">
                            <img src="${item.img}" alt="${item.name}">

                        </div>
    `;
        const ItemRightList = document.querySelector(".ItemRightList")
        ItemRightList.innerHTML = `
    <div class="ItemRightPrice">
                        <h3>${item.price} $</h3>
                    </div>
                    <div class="ItemRightBox">
                        <div class="ItemRightTextTop">
                            <h3>Стоимость аренды</h3>
                            <div class="priceItem">
                                <div><span>
                                        <h4>от 7 до 14 суток</h4>
                                    </span>
                                    <h4>${item.price} $</h4>
                                </div>
                                <div><span>
                                        <h4>от 14 до 29 суток</h4>
                                    </span>
                                    <h4>${item.price - 20} $</h4>
                                </div>
                                <div><span>
                                        <h4>от 30 суток</h4>
                                    </span>
                                    <h4>${item.price - 50} $</h4>
                                </div>
                            </div>
                            <div class="mathPrice">
                                <div class="Price-info">
                                    <div class="product-price">
                                        <h4>${item.price} $</h4>
                                    </div>
                                    <span><i class="fa-solid fa-xmark"></i></span>
                                    <div class="product-quantity">
                                        <div class="product-quantity-inner">
                                            <span><i class="fa-solid fa-minus"></i></span>
                                            <input type="text" value="1">
                                            <span><i class="fa-solid fa-plus"></i></span>
                                        </div>
                                    </div>
                                    <span><i class="fa-solid fa-equals"></i></span>
                                    <div class="product-last-price">
                                        <h4>${item.price} $</h4>
                                    </div>
                                </div>
                            </div>
                            <button class="arenda-Car">Арендовать</button>
                            <span class="arendaZalog"><i class="fa-solid fa-shield"></i>
                                <p>Залог 1000 $</p>
                            </span>
                        </div>
                    </div>
                    <div class="CarCharacter">
                        <ul>
                            <li>
                                <p>Ташкент</p>
                            </li>
                            <li><img src="/img/logo/dvigitel.svg" alt="icon">
                                <p>Toshkent</p>
                            </li>
                            <li><i class="fa-solid fa-gas-pump"></i>
                                <p>benzin</p>
                            </li>
                        </ul>
                    </div>
    `
        localStorage.removeItem('itemId');
    }

});