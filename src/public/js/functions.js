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
}

let nombre = new inputFields("nombre");
let apellido = new inputFields("apellido");
let username = new inputFields("username");
let password = new inputFields("password");
let repassword = new inputFields("repassword");

/*
const validar = (element) => {
    console.log(element);
    let value = element.value;
    let help = element.help;
    let input = element.input;
    let textOnly = /^[A-Za-zÑñ ]*$/;
    if(textOnly.test(value) && value != null && value != "") {
        // Success
        console.log("Success");
        help.classList.add("is-hidden");
        help.classList.remove("is-danger");
        help.classList.add("is-success");
        input.classList.add("is-success");
        input.classList.remove("is-danger");
    } else {
        // Fail
        console.log("Failure");
        console.log(value);
        help.classList.remove("is-hidden");
        help.classList.add("is-danger");
        help.classList.remove("is-success");
        input.classList.remove("is-success");
        input.classList.add("is-danger");
        if(!textOnly.test(value)) {
            help.innerHTML = "Invalid name";
        } else if(value == null || value == "") {
            help.innerHTML = "The name field is required";
        }
    }
};

const validateElement = (element) => {
    console.log("Script funcionando");
    console.log(element);
    validar(nombre);
    const romper = () => {
        element.input.removeEventListener("click", validar);
    };
    element.input.addEventListener("click", validar);
    element.input.addEventListener("focusout", romper);
};

nombre.input.addEventListener("focus", validateElement(nombre));
*/

// Un Experimento 

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
