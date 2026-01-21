<button onclick="toggleSection()">Show / Hide Offer</button>

<section id="offerSection">
  <h2>Special Offer</h2>
  <p>Get 10% off on your total bill today!</p>
</section>




#offerSection {
  display: none;
  margin-top: 20px;
  padding: 20px;
  background-color: #fff3f6;
  border-radius: 10px;
}






function toggleSection() {
  let section = document.getElementById("offerSection");

  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

