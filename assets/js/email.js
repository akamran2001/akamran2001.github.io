//Email form handler
var form = document.getElementById("contact-form");
function handleForm(event) {
  let email = {
    to: "testemail",
    name: event.target[0].value,
    subject: event.target[1].value,
    message: event.target[2].value,
  };
  event.target.method = "post";
  event.target.action = `mailto:${email.to}?subject=${email.subject}%20-%20${email.name}&body=${email.message}`;
}
form.addEventListener("submit", handleForm);
