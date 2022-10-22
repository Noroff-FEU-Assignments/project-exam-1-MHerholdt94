const newsletterForm = document.querySelector(".newsletter-form");
const newsletterError = document.querySelector(".newsletter-error");
const newsletterValidation = document.querySelector(".newsletter-validation");
const email = document.querySelector(".newsletter-email");

function formValidation(event) {
  event.preventDefault();

  if (validEmail(email.value) === true) {
    newsletterValidation.style.display = "inline";
    newsletterError.style.display = "none";

    setTimeout(function () {
      newsletterValidation.style.display = "none";
    }, 3000);

    newsletterForm.reset();
  } else {
    newsletterValidation.style.display = "none";
    newsletterError.style.display = "inline";

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
