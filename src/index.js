import cipher from './cipher.js';

let cifrar = document.getElementById("cifrando");
let descifrar = document.getElementById("decifrando");
let textoATraducir = document.getElementById("textoATraducir");
let shift = document.getElementById("shift");
document.getElementById("btnCopiar").accessKey = "1";

//EL PREVENT DEFAULT para que ahora si no permita escribir caracteres que no sean de tipo número o negativos por teclado
//funcion para permitir que NO se teclee letras u otro caracter gracias al prevente default
shift.addEventListener("keypress", (Negativo) => {
        if (!soloNumeros(event)) {
            Negativo.preventDefault();
        }
    })
    // Funcion que solo permite introducir numeros y definimos segun codigo ASCII cuales
let soloNumeros = (Negativo) => {
    var key = Negativo.charCode;
    return key >= 48 && key <= 57;
};


cifrar.addEventListener("click", () => {

    let mResultado = textoATraducir;

    mResultado.value = (cipher.encode(parseInt(shift.value), textoATraducir.value));

});
descifrar.addEventListener("click", () => {

    let mResultado = textoATraducir;

    mResultado.value = (cipher.decode(parseInt(shift.value), textoATraducir.value));

});

document.getElementById("btnCopiar").addEventListener("click", () => {

    let textArea = document.createElement("textarea");
    const emptyResultField = textoATraducir.value;

    if (!emptyResultField) {
        return;
    }
    textArea.value = textoATraducir.value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();

    alert("Se ha copiado tu mensaje! " + textArea.value);

});



//funcion para eni  null y corchetes