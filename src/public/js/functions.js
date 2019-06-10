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
    setValue(value) {
        this.value = value || this.input.value;
    }
    getValue() {
        return this.value;
    }
    validar(regex) {
        this.setValue();
        let value = this.getValue();
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
    validarPassword(password) {
        this.setValue();
        let value = this.getValue();
        if(value == password) {
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
            if (value == null || value == "") {
                this.status = 1;
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
    let textOnly = /^[A-Za-zÑñ ]*$/;
    const element = nombre;
    const validando = () => { 
        element.validar(textOnly);
        if (element.status == 1) {
            element.help.innerHTML = "Nombre inválido";
        } else {
            element.help.innerHTML = "El campo no puede estar vacío";
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
            element.help.innerHTML = "El campo no puede estar vacío";
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
    let textOnly = /^[0-9a-zA-Z]*$/;
    const element = username;
    const validando = () => {
        element.setValue(element.getValue().toLowerCase);
        element.validar(textOnly); 
        if (element.status == 1) {
            element.help.innerHTML = "Usuario inválido";
        } else {
            element.help.innerHTML = "El campo no puede estar vacío";
        }
    };
    const romper = () => {
        element.input.removeEventListener("keyup", validando);
    };
    element.input.addEventListener("keyup", validando);
    element.input.addEventListener("focusout", romper);
};

username.input.addEventListener("focus", validateUsername);

// Validar Password

const validatePassword = () => {
    let noSpaces = /^[^ ]*$/;
    const element = password;
    const validando = () => { 
        element.validar(noSpaces);
        if (element.status == 1) {
            element.help.innerHTML = "Contraseña inválida";
        } else {
            element.help.innerHTML = "El campo no puede estar vacío";
        }
    };
    const romper = () => {
        element.input.removeEventListener("keyup", validando);
    };
    element.input.addEventListener("keyup", validando);
    element.input.addEventListener("focusout", romper);
};

password.input.addEventListener("focus", validatePassword);

// Validar RePassword

const validateRepassword = () => {
    let pass = password.getValue();
    let rePass = repassword.getValue();
    const element = repassword;
    const validando = () => { 
        element.validarPassword(pass);
        if (pass != rePass) {
            element.help.innerHTML = "Las contraseñas no coinciden";
        }
    };
    const romper = () => {
        element.input.removeEventListener("keyup", validando);
    };
    element.input.addEventListener("keyup", validando);
    element.input.addEventListener("focusout", romper);
};

repassword.input.addEventListener("focus", validateRepassword);