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
        this.help = element(this.id).children[1].children[1];
        this.validate = false;
        this.status = 1;
        this.value = "";
    }
    setValue() {
        this.value = this.input.value;
    }
    getValue() {
        return this.value;
    }
    validar(regex) {
        this.setValue();
        let value = this.getValue();
        console.log(this);
        if(regex.test(value) && value != null && value != "") {
            // Success
            this.help.classList.add("is-hidden");
            this.help.classList.remove("is-danger");
            this.help.classList.add("is-success");
            this.input.classList.add("is-success");
            this.input.classList.remove("is-danger");
            this.status = 0;
            this.validate = true;
        } else {
            // Fail
            this.help.classList.remove("is-hidden");
            this.help.classList.add("is-danger");
            this.help.classList.remove("is-success");
            this.input.classList.remove("is-success");
            this.input.classList.add("is-danger");
            this.validate = false;
            if(!regex.test(value)) {
                this.status = 1;
            } else if(value == null || value == "") {
                this.status = 2;
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

// const validateNombre = () => {
//     const validar = () => {
//         let value = nombre.input.value;
//         let textOnly = /^[A-Za-zÑñ ]*$/;
//         if(textOnly.test(value) && value != null && value != "") {
//             // Success
//             console.log("Success");
//             nombre.help.classList.add("is-hidden");
//             nombre.help.classList.remove("is-danger");
//             nombre.help.classList.add("is-success");
//             nombre.input.classList.add("is-success");
//             nombre.input.classList.remove("is-danger");
//         } else {
//             // Fail
//             console.log("Failure");
//             nombre.help.classList.remove("is-hidden");
//             nombre.help.classList.add("is-danger");
//             nombre.help.classList.remove("is-success");
//             nombre.input.classList.remove("is-success");
//             nombre.input.classList.add("is-danger");
//             if(!textOnly.test(value)) {
//                 nombre.help.innerHTML = "Invalid name";
//             } else if(value == null || value == "") {
//                 nombre.help.innerHTML = "The name field is required";
//             }
//         }
//     };
//     const romper = () => {
//         nombre.input.removeEventListener("keyup", validar);
//     };
//     nombre.input.addEventListener("keyup", validar);
//     nombre.input.addEventListener("focusout", romper);
// };

// nombre.input.addEventListener("focus", validateNombre);

// Validar Nombre

const validateNombre = () => {
    let textOnly = /^[A-Za-zÑñ ]*$/;
    const element = nombre;
    const validando = () => { 
        element.validar(textOnly);
        if (element.status == 1) {
            element.help.innerHTML = "Nombre inválido";
        } else {
            element.help.innerHTML = "This field cannot be empty";
        }
    };
    const romper = () => {
        element.input.removeEventListener("keyup", validando);
    };
    element.input.addEventListener("keyup", validando);
    element.input.addEventListener("focusout", romper);
};

nombre.input.addEventListener("focus", validateNombre);

// Validar Apellido

const validateApellido = () => {
    let textOnly = /^[A-Za-zÑñ ]*$/;
    const element = apellido;
    const validando = () => { 
        element.validar(textOnly);
        if (element.status == 1) {
            element.help.innerHTML = "Apellido inválido";
        } else {
            element.help.innerHTML = "This field cannot be empty";
        }
    };
    const romper = () => {
        element.input.removeEventListener("keyup", validando);
    };
    element.input.addEventListener("keyup", validando);
    element.input.addEventListener("focusout", romper);
};

apellido.input.addEventListener("focus", validateApellido);

// Validar User

const validateUsername = () => {
    let textOnly = /^[0-9a-z]*$/;
    const element = username;
    const validando = () => { 
        element.validar(textOnly);
        if (element.status == 1) {
            element.help.innerHTML = "Invalid Username";
        } else {
            element.help.innerHTML = "This field cannot be empty";
        }
    };
    const romper = () => {
        element.input.removeEventListener("keyup", validando);
    };
    element.input.addEventListener("keyup", validando);
    element.input.addEventListener("focusout", romper);
};

username.input.addEventListener("focus", validateUsername);