import throttle from "lodash.throttle";

const textMail = document.querySelector(".email_user");
const textArea = document.querySelector(".text_user");
const sendInfo = document.querySelector(".feedback-form")

if (localStorage.getItem("feedback-form-state").length > 0) {
  objInfo=JSON.parse(localStorage.getItem("feedback-form-state"));
  textMail.value = objInfo.email;
  textArea.value = objInfo.message;
}

var throttleTime = throttle(saveMessage,250);

sendInfo.addEventListener(`submit`, throttleTime)

function saveMessage(evt) {
  evt.preventDefault();

  const objInfo = {
    email : textMail.value,
    message : textArea.value
  };

  if (textMail.value === "" || textArea.value === "") {
    alert("Todos los espacios deben estar rellenados!");
    return
  }
  localStorage.setItem("feedback-form-state", JSON.stringify(objInfo));
  sendInfo.reset();
};

