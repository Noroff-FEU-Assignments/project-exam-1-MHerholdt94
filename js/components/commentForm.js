let form;
let action;

function findElements() {
  form = document.querySelector("#commentform");
  ({ action } = form);
}

function showMessage(data) {
  alert(data.message);
}

function onSuccess(response) {
  return response.json().then(showMessage);
}

function onError(data) {
  console.error(data);
}

function collectData(currentForm) {
  const data = new FormData(currentForm);
  return data;
}

function setOptions(currentForm) {
  return {
    method: "post",
    body: collectData(currentForm),
  };
}

function sendForm(currentForm) {
  return fetch(action, setOptions(currentForm));
}

function onSubmit(event) {
  event.preventDefault();
  const { currentTarget } = event;
  sendForm(currentTarget)
    .then((response) => onSuccess(response, currentTarget))
    .catch(onError);
}

function subscribe() {
  form.addEventListener("submit", onSubmit);
}

function init() {
  findElements();
  subscribe();
}

init();
