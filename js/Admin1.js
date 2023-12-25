

let baza = JSON.parse(localStorage.getItem('baza')) || [];
const CarsListItem = document.querySelector(".CarsListItem");
const form = document.getElementById('carRentalForm');
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener("click", function () {
    const brand = document.getElementById('brand').value;
    const nameValue = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const fileInput = document.getElementById('Image');

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('/upload', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                const copiedImagePath = data.copiedImagePath;
                const newItem = {
                    id: baza.length + 1,
                    brand: brand,
                    name: nameValue,
                    price: price,
                    img: "/img/images/" + copiedImagePath, // Update img property with the copied image path
                    cars: {
                        Sport: "Sport",
                        SportCar: "Sport Car",
                    }
                };
                baza.push(newItem);
                localStorage.setItem('baza', JSON.stringify(baza));
                showItem();
            })
            .catch(error => {
                console.error('Error uploading file:', error);
            });
        }
    });
});

function showItem() {
    const items = baza.map((item) => {
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
                    <button class="sendIDLocal">Забронировать</button>
                    <p><span>${item.price}</span>$/kun</p>
                </div>
            </div>
        `;
    }).join("");

    console.log(items);
    CarsListItem.innerHTML = items;
}

showItem();
