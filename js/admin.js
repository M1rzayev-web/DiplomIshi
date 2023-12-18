document.addEventListener('DOMContentLoaded', () => {
  const CarsListItem = document.querySelector(".CarsListItem");
  const form = document.getElementById('carRentalForm');
  const submitBtn = document.getElementById('submitBtn');

  const deleteItemFromAPI = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/cars/${id}`, {
        method: 'DELETE',
      });
      const result = await response.json();
      console.log('Serverdan o\'chirilgan ma\'lumotlar:', result);
      alert('Ma\'lumot o\'chirildi! Rahmat!');
      // Refresh the car list after deletion
      const data = await fetchData();
      displayCars(data);
    } catch (error) {
      console.error('Serverga so\'rov jo\'natishda xatolik:', error);
      alert('Xatolik yuz berdi! Qaytadan urinib ko\'ring.');
    }
  };

  submitBtn.addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const IDNumber = document.getElementById('IdNumber').value;
    const brand = document.getElementById('brand').value;
    const img = document.getElementById('Image').value;

    try {
      const response = await fetch('http://localhost:3000/api/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: IDNumber,
          brand,
          name,
          price,
          img,
          year: "2022",
          region: { Toshkent: "Toshkent" },
          cars: { Comfort: "Komfort" },
          images: {},
        }),
      });
      const data = await response.json();
      console.log('Serverdan qaytgan ma\'lumotlar:', data);
      alert('Yuborildi! Rahmat!');
    } catch (error) {
      console.error('Serverga so\'rov jo\'natishda xatolik:', error);
      alert('Xatolik yuz berdi! Qaytadan urinib ko\'ring.');
    }

    // Clear the form after submitting
    form.reset();
  });

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/cars');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Malumotlarni olishda xatolik:', error);
    }
  };

  const displayCars = (data) => {
    const dataAdmin = data.map(item => `
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
          <div class="sendIDLocal" data-id="${item.id}" onclick="deleteItemFromAPI('${item.id}')">Delete</div>
          <p><span>${item.price}</span>$/kun</p>
        </div>
      </div>
    `).join("");

    CarsListItem.innerHTML = dataAdmin;
  };

  // Load cars from the server when the page is loaded
  fetchData()
    .then(data => {
      displayCars(data);
    });
});
