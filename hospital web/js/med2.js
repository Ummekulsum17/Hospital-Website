document.getElementById("appointmentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const confirmationMessage = `Thank you, Your appointment has been scheduled. We will contact you soon.`;

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


