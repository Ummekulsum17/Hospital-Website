let cart = [];
let totalPrice = 0;

function addToCart(name, price) {
  // Add item to cart
  cart.push({ name, price });

  // Update cart display
  const cartList = document.getElementById("cart-list");
  const listItem = document.createElement("li");
  listItem.textContent = `${name} - $${price}`;
  cartList.appendChild(listItem);

  // Update total price
  totalPrice += price;
  document.getElementById("total-price").textContent = totalPrice;
}

document.getElementById("orderButton").addEventListener("click", function () {
  alert("Your order has been placed!");

  // Reset the cart and total price
  resetCart();
});

function resetCart() {
  // Clear the cart array
  cart = [];
  totalPrice = 0;

  // Clear the displayed cart list
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = '';

  // Reset the total price display
  document.getElementById("total-price").textContent = totalPrice;
}
//script
document.getElementById("appointmentForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const confirmationMessage = `Thank you, ${name}! Your appointment has been scheduled for ${date} at ${time}. We will contact you at ${email}.`;

  document.getElementById("confirmationMessage").textContent = confirmationMessage;

  // Optionally, reset the form
  event.target.reset();
});

function searchDoctor() {
  const query = document.getElementById('search').value.toLowerCase();
  const doctorList = document.querySelectorAll('#doctor-list li');

  doctorList.forEach(doctor => {
      const specialty = doctor.dataset.specialty.toLowerCase();
      if (specialty.includes(query)) {
          doctor.style.display = '';
      } else {
          doctor.style.display = 'none';
      }
  });
}
//doctor
document.getElementById('search-button').addEventListener('click', () => {
  const name = document.getElementById('name').value;
  const specialty = document.getElementById('specialty').value;
  const location = document.getElementById('location').value;

  const results = document.getElementById('results-list');
  results.innerHTML = ''; // Clear previous results

  // Mocked doctor data
  const doctors = [
    { name: "Dr. John Doe", specialty: "Cardiology", location: "New York" },
    { name: "Dr. Jane Smith", specialty: "Dermatology", location: "Los Angeles" },
    { name: "Dr. Emily Johnson", specialty: "Neurology", location: "Chicago" },
  ];

  const filteredDoctors = doctors.filter(doc => 
    (!name || doc.name.toLowerCase().includes(name.toLowerCase())) &&
    (!specialty || doc.specialty.toLowerCase().includes(specialty.toLowerCase())) &&
    (!location || doc.location.toLowerCase().includes(location.toLowerCase()))
  );

  if (filteredDoctors.length > 0) {
    filteredDoctors.forEach(doc => {
      const li = document.createElement('li');
      li.textContent = `${doc.name} - ${doc.specialty}, ${doc.location}`;
      results.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.textContent = "No doctors found.";
    results.appendChild(li);
  }
});