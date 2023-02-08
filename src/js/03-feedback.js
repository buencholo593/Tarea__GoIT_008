const textMail = document.querySelector(".email_user");
const textArea = document.querySelector(".text_user");
const sendInfo = document.querySelector(".feedback-form")

sendInfo.addEventListener(`submit`, saveMessage)

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


sendInfo.addEventListener(`submit`, _.throttle(5000))