document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('carRentalForm');
  const submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const carModel = document.getElementById('carModel').value;
    

    fetch('http://localhost:3000/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: generateUniqueId(), brand: "Toyota", name: carModel, price: 120, img: "/img/images/toyota-camry-white-2022.png", year: "2022", region: { Toshkent: "Toshkent", }, cars: { Sedan: "Sedan", Comfort: "Komfort" }, images: { 1: "/img/images/toyota-camry-white-2022.png", 2: "/img/images/toyota-camry-black-2022.png", 3: '/img/images/toyota-camry-blue-2022.png' } }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Serverdan qaytgan ma\'lumotlar:', data);
        alert('Yuborildi! Rahmat!');
      })
      .catch(error => {
        console.error('Serverga so\'rov jo\'natishda xatolik:', error);
        alert('Xatolik yuz berdi! Qaytadan urinib ko\'ring.');
      });
  });
});

function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
