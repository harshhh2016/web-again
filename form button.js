<section>
  <h2>Quick Enquiry</h2>

  <form id="enquiryForm" onsubmit="submitEnquiry(event)">
    <input type="text" id="fullName" placeholder="Full Name" required>
    <input type="text" id="city" placeholder="City" required>
    <textarea id="enquiryMessage" placeholder="Your message" required></textarea>

    <button type="submit">Send</button>
  </form>

  <p id="thankYouMsg" style="display:none; color:green; font-weight:bold;">
    Thank you for your submission!
  </p>
</section>
function submitEnquiry(event) {
  event.preventDefault(); // stop page refresh

  // Clear the form
  document.getElementById("enquiryForm").reset();

  // Show thank you message
  document.getElementById("thankYouMsg").style.display = "block";
}




