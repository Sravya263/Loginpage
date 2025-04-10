function handleSignUp() {
  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;
  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Sign up successful!");
  return false;
}

function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (savedUser && savedUser.username === username && savedUser.password === password) {
    alert("Login successful!");
  } else {
    alert("Login failed. Try again.");
  }
  return false;
}