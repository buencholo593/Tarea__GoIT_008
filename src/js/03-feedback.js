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

    localStorage.setItem("feedback-form-state", JSON.stringify(objInfo));
    updateOutput();
    sendInfo.reset();
};

sendInfo.addEventListener(`submit`, updateOutput);

function updateOutput() {
    const getInfo = localStorage.getItem("feedback-form-state");
    const convertObj = JSON.parse(getInfo); // Save Object

    if ( convertObj === null) {
        return "There is no any information"
    }

    const valuesObj = Object.values(convertObj);

    textMail.value = valuesObj[0];
    textArea.value = valuesObj[1]

};