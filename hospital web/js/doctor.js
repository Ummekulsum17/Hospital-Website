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