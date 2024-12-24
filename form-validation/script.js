"use strict";

const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// input error function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// input success function
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// check email validation
// const validateEmail = (email) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };

function isEmailValid(input) {
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (validRegex.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// CHECK REQUIRED FIELD
function formValidate(inputArr) {
  inputArr.forEach((input) =>
    input.value.trim() === ""
      ? showError(input, `${getField(input)} is required`)
      : showSuccess(input)
  );
}

// GET FIELD FUNCTION
function getField(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  formValidate([userName, email, password, password2]);
  isEmailValid(email);

  // if (userName.value === "") {
  //   showError(userName, "username is required");
  // } else {
  //   showSuccess(userName);
  // }

  // if (email.value === "") {
  //   showError(email, "Email is required");
  // } else if (!validateEmail(email.value)) {
  //   showError(email, "Email is not valid");
  // } else {
  //   showSuccess(email);
  // }

  // if (password.value === "") {
  //   showError(password, "Password is required");
  // } else {
  //   showSuccess(password);
  // }

  // if (password2.value === "") {
  //   showError(password2, "Confirm Password is required");
  // } else {
  //   showSuccess(password2);
  // }
});
