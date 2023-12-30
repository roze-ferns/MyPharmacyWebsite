// index.js

// Set the current tab to the first tab (0)
let currentTab = 0;

// Display the current tab
showTab(currentTab);

function showTab(n) {
  const tabs = document.getElementsByClassName("tab");
  tabs[n].style.display = "block";

  if (n === 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }

  if (n === tabs.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }

  fixStepIndicator(n);
}

function nextPrev(n) {
  const tabs = document.getElementsByClassName("tab");

  if (n === 1 && !validateForm()) return false;

  tabs[currentTab].style.display = "none";
  currentTab = currentTab + n;

  if (currentTab >= tabs.length) {
    saveFormData();
    displayData();

    // Hide the Previous and Next buttons after form submission
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";

    return false;
  }

  showTab(currentTab);
}

function validateForm() {
  const tabs = document.getElementsByClassName("tab");
  const inputs = tabs[currentTab].getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      inputs[i].className += " invalid";
      return false;
    }
  }

  return true;
}

function saveFormData() {
  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    university: document.getElementById("university").value,
    degree: document.getElementById("degree").value,
    department: document.getElementById("department").value,
    availability: document.getElementById("availability").value,
  };

  localStorage.setItem("formData", JSON.stringify(formData));
}

function displayData() {
  const formData = JSON.parse(localStorage.getItem("formData"));
  const dataDisplay = document.getElementById("dataDisplay");

  dataDisplay.innerHTML = `
        <h3>Submitted Data:</h3>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>University:</strong> ${formData.university}</p>
        <p><strong>Degree:</strong> ${formData.degree}</p>
        <p><strong>Preferred Department:</strong> ${formData.department}</p>
        <p><strong>Availability:</strong> ${formData.availability}</p>
    `;
}
