const cars = [
  {
    name: "Mahindra Thar",
    type: "SUV",
    price: "₹15.54 Lakh",
    fuel: "Diesel",
    transmission: "Manual",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Mahindra_Thar_Photoshoot_At_Perupalem_Beach_%28West_Godavari_District%2CAP%2CIndia_%29_Djdavid.jpg"
  },
  {
    name: "Tata Nexon",
    type: "SUV",
    price: "₹16.54 Lakh",
    fuel: "Diesel",
    transmission: "Manual",
    image: "https://auto.hindustantimes.com/cms-images/tata_nexon/images/exterior_tata-nexon_front-left-view-1_600x338.jpeg"
  },
  {
    name: "Hyundai Creta",
    type: "SUV",
    price: "₹18.54 Lakh",
    fuel: "Diesel",
    transmission: "Manual",
    image: "https://caronphone.com/news/wp-content/uploads/Creata-Dark-Edition-img-2.jpg"
  },
  {
    name: "Hyundai Venue",
    type: "SUV",
    price: "₹10.54 Lakh",
    fuel: "Diesel",
    transmission: "Manual",
    image: "https://trident-group.s3.ap-south-1.amazonaws.com/hyundai/models/colors/1698929086.png"
  },
  
];
const carList = document.getElementById('car-list');

cars.forEach(car => {
  const div = document.createElement('div');
  div.className = "car-card";
  div.innerHTML = `
    <img src="${car.image}" alt="${car.name}" />
    <h2>${car.name}</h2>
    <p>Type: ${car.type}</p>
    <p>Fuel: ${car.fuel}</p>
    <p>Transmission: ${car.transmission}</p>
    <p>Price: ${car.price}</p>
  `;
  carList.appendChild(div);
});
