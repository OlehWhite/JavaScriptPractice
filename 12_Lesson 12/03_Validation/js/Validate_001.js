// установка обработчиков для форм и элементов форм.
const init = () => {
    for (let i = 0; i < document.forms.length; i++) {
        const form = document.forms[i];
        const [...formElements] = form.elements;

        let formValidation = false;

        formElements.forEach((input) => {
            if (
                input.type === "text" ||
                input.type === "number" || 
                input.type === "email"
                ) {
                // проверка имеются ли атрибуты требующие проверки.
                const pattern = input.getAttribute("data-val");

                if (pattern) {
                    input.onchange = validateInput; // обработчик на изменение.
                    formValidation = true; // форма требует проверку.
                }
            }
        })

        if (formValidation) {
            form.addEventListener("submit", validateForm) // установка обработчика для формы на submit
        }
    }
}

// обработчик на изменение содержимого полей ввода.
function validateInput() {
    const pattern = this.dataset.val,  // data-val
        msg = this.dataset.valMsg,
        msgId = this.dataset.valMsgId,
        value = this.value;

    const res = value.search(pattern);
    if (res === -1) {
        document.getElementById(msgId).innerHTML = msg;
        this.className = "error";
    }
    else {
        document.getElementById(msgId).innerHTML = "";
        this.className = "valid";
    }
}

// обработчик на submit формы.
function validateForm() {

    let invalid = false;

    for (let i = 0; i < this.elements.length; ++i) {
        let e = this.elements[i];
        if (e.type == "text" && e.onchange != null) {
            e.onchange();
            if (e.className == "error") {
                invalid = true;
            }
        }
    }

    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        return false;
    }
}

// регистрация события загрузки документа.
if (window.addEventListener) window.addEventListener("load", init, false);