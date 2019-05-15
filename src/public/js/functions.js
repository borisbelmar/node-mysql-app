// Cerrar Mensajes

const close = (element) => {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.parentNode.removeChild(element);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 10);
};

const closeMessage = () => {
    let message = document.getElementById("message");
    close(message);
};

// Validadores
// Optimizar con Childrens!

let username = {
    label: document.getElementById("usernameLabel"),
    input: document.getElementById("usernameInput"),
    help: document.getElementById("usernameHelp"),
    validate: false
};

let password = {
    label: document.getElementById("usernameLabel"),
    input: document.getElementById("usernameInput"),
    help: document.getElementById("usernameHelp"),
    validate: false
};

const validateUser = () => {
    console.log(username.input.value);
};

const validatePassword = () => {

};

username.input.addEventListener("focusout", validateUser);