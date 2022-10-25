const newsletterForm = document.querySelector(".newsletter-form");
const newsletterError = document.querySelector(".newsletter-error");
const newsletterValidation = document.querySelector(".newsletter-validation");
const email = document.querySelector(".newsletter-email");

const windowWidth = window.matchMedia("(max-width: 1580px)");

function formValidation(event) {
  event.preventDefault();

  if (validEmail(email.value) === true) {
    if (windowWidth.matches) {
      newsletterValidation.style.display = "block";
    } else {
      newsletterValidation.style.display = "inline";
    }

    newsletterError.style.display = "none";

    setTimeout(function () {
      newsletterValidation.style.display = "none";
    }, 3000);

    newsletterForm.reset();
  } else {
    if (windowWidth.matches) {
      newsletterError.style.display = "block";
    } else {
      newsletterError.style.display = "inline";
    }

    newsletterValidation.style.display = "none";

    setTimeout(function () {
      newsletterError.style.display = "none";
    }, 3000);
  }
}

newsletterForm.addEventListener("submit", formValidation);

function validEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
