function signup(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    alert("User already exists");
    return;
  }

  const newUser = {
    name,
    email,
    password
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Signup successful! Please login.");
  window.location.href = "login.html";
}
function login(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    alert("Invalid email or password");
    return;
  }

  localStorage.setItem(
    "loggedInUser",
    JSON.stringify({ name: user.name, email: user.email })
  );

  alert("Login successful");
  window.location.href = "index.html";
}
function logout() {
  localStorage.removeItem("loggedInUser");
  alert("You have been logged out");
  window.location.href = "login.html";
}
