fetch("http://localhost:3000/api/cars")
    .then((response) => response.json())
    .then((data) => {
        let baza = data;

        if (!localStorage.getItem("itemId")) {
            showIfId.style.display = "none";
            errorList.style.display = "block";
            errorList.style.display = "flex";
        } else {
            var itemId = localStorage.getItem("itemId");
            const item = baza.find((element) => element.id === Number(itemId));
            const itemTitle = document.querySelector(".itemTitle");
            const itemName = document.querySelector(".itemName");
            const ItemName = document.querySelector(".ItemName");

            itemTitle.innerHTML = item.name;
            itemName.innerHTML = item.name;
            ItemName.innerHTML = item.name;

            const itemRightList = document.querySelector(".ItemRightList");

            itemRightList.innerHTML = `
             <div class="ItemRightPrice">
              <h3>${item.price} $</h3>
      </div>
      <div class="ItemRightBox">
      <div class="ItemRightTextTop">
      <h3>Стоимость аренды</h3>
      <div class="priceItem">
      <div>
      <span><h4>от 7 до 14 суток</h4></span>
      <h4>${item.price} $</h4>
      </div>
      <div>
      <span><h4>от 14 до 29 суток</h4></span>
      <h4>${item.price - 20} $</h4>
      </div>
              <div>
              <span><h4>от 30 суток</h4></span>
              <h4>${item.price - 50} $</h4>
              </div>
              </div>
              <div class="mathPrice">
              <div class="Price-info">
              <div class="product-price">
              <h4>${item.price} $</h4>
              </div>
              <span><i class="fa-solid fa-times"></i></span>
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
              <span class="arendaZalog">
              <i class="fa-solid fa-shield"></i>
              <p>Залог 1000 $</p>
              </span>
              </div>
              </div>
              <div class="CarCharacter">
              <ul>
              <li>
              <p>Ташкент</p>
              </li>
              <li>
              <img src="/img/logo/dvigitel.svg" alt="icon">
              <p>Toshkent</p>
              </li>
              <li>
              <i class="fa-solid fa-gas-pump"></i>
              <p>benzin</p>
              </li>
              </ul>
              </div>
              `;

              const arendaCarButton = document.querySelector(".arenda-Car");

              const itemImgList = document.querySelector(".ItemImgList");
            //   const imageUrls = Object.values(item.images);
            //   const imgData = imageUrls.map((imageUrl) => {
            //       return `<img src="${imageUrl}" alt="${item.name}">`;
            //   }).join("");
              
              itemImgList.innerHTML = `
                    <div class="imgTop">
                    <img src="${item.img}" alt="${item.name}">
                    </div>
                    <div class="imgItemGalarey">
                    </div>
                    `;
                    arendaCarButton.addEventListener("click", function () {
                      localStorage.removeItem("itemId");
            });
        }

    })
    .catch((error) => {
        console.error("Malumotlarni olishda xatolik:", error);
    });

const showIfId = document.querySelector(".show-if-id");
const errorList = document.querySelector(".error-list");
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
