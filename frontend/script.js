function startQuiz() {
  alert("Style Quiz coming soon!");
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let error = document.getElementById("error");

  if (name === "" || email === "" || message === "") {
    error.textContent = "Please fill out all fields.";
    return false;
  }

  error.textContent = "Message sent!";
  return false;
}
