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

// Un Experimento 

const validateNombre = () => {
    const validar = () => {
        console.log(nombre.value);
    };
    const romper = () => {
        nombre.input.removeEventListener("keypress");
    };
    nombre.input.addEventListener("keypress", validar);
    nombre.input.addEventListener("onfocusout", romper);
};

nombre.input.addEventListener("focus", validateNombre);

let apellido = new inputFields("apellido");

const validateApellido = () => {
    let validar = () => {
        console.log(apellido.value);  
    };
};

apellido.input.addEventListener("focusout", validateApellido);

let username = new inputFields("username");

const validateUsername = () => {
    console.log(username.value);
};

username.input.addEventListener("focusout", validateUsername);

let password = new inputFields("password");
let repassword = new inputFields("repassword");

const validatePassword = () => {
    console.log(password.value);
};

password.input.addEventListener("focusout", validatePassword);