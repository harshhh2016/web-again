function validateFeedback() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone") 
               ? document.getElementById("phone").value.trim()
               : "";
  const message = document.getElementById("message").value.trim();

  // Empty field check
  if (name === "" || email === "" || message === "" || (phone !== "" && phone.length === 0)) {
    alert("Please fill all required fields.");
    return false;
  }

  // Email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Phone validation (if field exists)
  if (phone !== "") {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit mobile number.");
      return false;
    }
  }