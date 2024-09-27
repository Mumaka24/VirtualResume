// Toggle Experience Details
const toggleDetailsBtn = document.getElementById("toggleDetailsBtn");
const experienceDetails = document.getElementById("experienceDetails");

toggleDetailsBtn.addEventListener("click", function() {
  if (experienceDetails.style.display === "none") {
    experienceDetails.style.display = "block";
    experienceDetails.innerHTML = `
      <h5>Administrator | MTG LLC, San Antonio, TX</h5>
      <p>Registered and started an arbitrage business, handled records, etc.</p>
    `;
  } else {
    experienceDetails.style.display = "none";
  }
});
