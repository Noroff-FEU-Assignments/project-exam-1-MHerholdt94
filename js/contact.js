import { scrollTop, goBack, hamburgerMenu } from "./components/siteButtons.js";
import "./components/newsletter.js";
import { buttonScroll } from "./components/scrollEvent.js";

window.addEventListener("scroll", buttonScroll);
hamburgerMenu();
goBack();
scrollTop();

// Contact form container
const formContainer = document.querySelector(".form-container");

// Form inputs
const fullName = document.querySelector("#contactFullName");
const email = document.querySelector("#contactEmail");
const subject = document.querySelector("#contactSubject");
const message = document.querySelector("#contactMessage");

// Error messages
const fullNameError = document.querySelector("#fullNameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const messageError = document.querySelector("#messageError");

// Validation message container
const validationMessage = document.querySelector("#validationMessage");

// Validate the form inputs
function formValidation(event) {
  event.preventDefault();

  if (lengthCheck(fullName.value, 4) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (validEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (lengthCheck(subject.value, 14) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (lengthCheck(message.value, 24) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (
    lengthCheck(fullName.value, 4) === true &&
    validEmail(email.value) === true &&
    lengthCheck(subject.value, 14) === true &&
    lengthCheck(message.value, 24) === true
  ) {
    validationMessage.style.display = "block";
    formContainer.reset();
  } else {
    validationMessage.style.display = "none";
  }
}

formContainer.addEventListener("submit", formValidation);

// Check length of input values
function lengthCheck(val, len) {
  if (val.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

// Check if email is valid
function validEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
