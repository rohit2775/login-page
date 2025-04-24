function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (email === "admin@example.com" && password === "admin123") {
    message.innerText = "Login successful 🎉";
    message.style.color = "lightgreen";
  } else {
    message.innerText = "Invalid credentials 😢";
    message.style.color = "red";
  }
}