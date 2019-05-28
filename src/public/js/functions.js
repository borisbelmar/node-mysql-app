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

// Constantes globales
const element = (id) => { return document.getElementById(id); };

class inputFields {
    constructor(elementId) {
        this.id = elementId;
        this.label = element(this.id).children[0];
        this.input = element(this.id).children[1].children[0];
        this.value = this.input.value;
        this.help = element(this.id).children[1].children[1];
        this.validate = false;
    }
    validar() {
        let value = nombre.input.value;
        let textOnly = /^[A-Za-zÑñ ]*$/;
        if(textOnly.test(value) && value != null && value != "") {
            // Success
            console.log("Success");
            nombre.help.classList.add("is-hidden");
            nombre.help.classList.remove("is-danger");
            nombre.help.classList.add("is-success");
            nombre.input.classList.add("is-success");
            nombre.input.classList.remove("is-danger");
        } else {
            // Fail
            console.log("Failure");
            nombre.help.classList.remove("is-hidden");
            nombre.help.classList.add("is-danger");
            nombre.help.classList.remove("is-success");
            nombre.input.classList.remove("is-success");
            nombre.input.classList.add("is-danger");
            if(!textOnly.test(value)) {
                nombre.help.innerHTML = "Invalid name";
            } else if(value == null || value == "") {
                nombre.help.innerHTML = "The name field is required";
            }
        }
    }
}

let nombre = new inputFields("nombre");
let apellido = new inputFields("apellido");
let username = new inputFields("username");
let password = new inputFields("password");
let repassword = new inputFields("repassword");

// Validaciones

// Validar Nombre

const validateNombre = () => {
    const validar = () => {
        let value = nombre.input.value;
        let textOnly = /^[A-Za-zÑñ ]*$/;
        if(textOnly.test(value) && value != null && value != "") {
            // Success
            console.log("Success");
            nombre.help.classList.add("is-hidden");
            nombre.help.classList.remove("is-danger");
            nombre.help.classList.add("is-success");
            nombre.input.classList.add("is-success");
            nombre.input.classList.remove("is-danger");
        } else {
            // Fail
            console.log("Failure");
            nombre.help.classList.remove("is-hidden");
            nombre.help.classList.add("is-danger");
            nombre.help.classList.remove("is-success");
            nombre.input.classList.remove("is-success");
            nombre.input.classList.add("is-danger");
            if(!textOnly.test(value)) {
                nombre.help.innerHTML = "Invalid name";
            } else if(value == null || value == "") {
                nombre.help.innerHTML = "The name field is required";
            }
        }
    };
    const romper = () => {
        nombre.input.removeEventListener("keyup", validar);
    };
    nombre.input.addEventListener("keyup", validar);
    nombre.input.addEventListener("focusout", romper);
};

nombre.input.addEventListener("focus", validateNombre);

const validateNombre = () => {
    const validar = () => {
        let value = nombre.input.value;
        let textOnly = /^[A-Za-zÑñ ]*$/;
        if(textOnly.test(value) && value != null && value != "") {
            // Success
            console.log("Success");
            nombre.help.classList.add("is-hidden");
            nombre.help.classList.remove("is-danger");
            nombre.help.classList.add("is-success");
            nombre.input.classList.add("is-success");
            nombre.input.classList.remove("is-danger");
        } else {
            // Fail
            console.log("Failure");
            nombre.help.classList.remove("is-hidden");
            nombre.help.classList.add("is-danger");
            nombre.help.classList.remove("is-success");
            nombre.input.classList.remove("is-success");
            nombre.input.classList.add("is-danger");
            if(!textOnly.test(value)) {
                nombre.help.innerHTML = "Invalid name";
            } else if(value == null || value == "") {
                nombre.help.innerHTML = "The name field is required";
            }
        }
    };
    const romper = () => {
        nombre.input.removeEventListener("keyup", validar);
    };
    nombre.input.addEventListener("keyup", validar);
    nombre.input.addEventListener("focusout", romper);
};

apellido.input.addEventListener("focus", validateNombre);