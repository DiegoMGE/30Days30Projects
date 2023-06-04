const form = document.getElementById("form");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

function validateInputs() {
  const fullNameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value;

  // Validate Full Name
  if (fullNameValue === "") {
    setError(fullName, "You need to type your name.");
  } else if (!validateName(fullNameValue)) {
    setError(
      fullName,
      "Your name must be at least 3 characteres and no more than 50."
    );
  } else {
    setSuccess(fullName);
  }

  // Validate Email
  if (emailValue === "") {
    setError(email, "Email cannot be blank.");
  } else if (!validateEmail(emailValue)) {
    setError(email, "Not a valid email, try again.");
  } else {
    setSuccess(email);
  }

  //   Validate Message
  if (messageValue === "") {
    setError(message, "Message cannot be blank.");
  } else if (!validateMessage(messageValue)) {
    setError(
      message,
      "Message must be at least 70 characteres and no more than 200."
    );
  } else {
    setSuccess(message);
  }
}

function setError(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector("#error");
  formControl.className = "form-control error";
  error.innerText = message;
}

function setSuccess(input) {
  const formControl = input.parentElement;
  const error = formControl.querySelector("#error");
  formControl.className = "form-control success";
  error.innerText = "";
}

function validateName(name) {
  return /^[a-zA-Z ]{3,50}$/.test(name);
}

function validateEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function validateMessage(message) {
  return /^(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()\-+={}[\]|\\:;"'<>,.?\/~` ]{70,200}$/.test(
    message
  );
}
