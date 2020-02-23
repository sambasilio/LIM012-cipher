import cipher from './cipher.js';

let cifrar = document.getElementById("cifrando");
let descifrar = document.getElementById("decifrando");
let textoATraducir = document.getElementById("textoATraducir");
let shift = document.getElementById("shift");

//Reinicio con tecla ENTER al darle copiar en el alert botón ACEPTAR!
document.getElementById("btnCopiar").accessKey = "1";


// Funcion: No permite ingreso de negativos cero y otros ajenos a números en el input DESPLAZAMIENTO por teclado
shift.addEventListener('keydown', (evento) => {
    const teclaPresionada = evento.key;
    const teclaPresionadaEsUnNumero = Number.isInteger(parseInt(teclaPresionada));
    const sePresionoUnaTeclaNoAdmitida =
        teclaPresionada != 'ArrowDown' &&
        teclaPresionada != 'ArrowUp' &&
        teclaPresionada != 'ArrowLeft' &&
        teclaPresionada != 'ArrowRight' &&
        teclaPresionada != 'Backspace' &&
        teclaPresionada != 'Delete' &&
        teclaPresionada != 'Enter' &&
        teclaPresionada === '-' &&
        !teclaPresionadaEsUnNumero;
    const siComienzaPorCero = shift.value.length === 0 && teclaPresionada == 0;

    if (sePresionoUnaTeclaNoAdmitida || siComienzaPorCero) {
        evento.preventDefault(); //no ocurrirá.
    }

});

//Cifrado y decifrado llamando los métodos del objeto cipher.js.
cifrar.addEventListener("click", () => {

    let mResultado = textoATraducir;

    mResultado.value = (cipher.encode(parseInt(shift.value), textoATraducir.value));

});
descifrar.addEventListener("click", () => {

    let mResultado = textoATraducir;

    mResultado.value = (cipher.decode(parseInt(shift.value), textoATraducir.value));

});

//ALERT: Cogemos el valor del texto ingresado sea cifrado o descifrado y se copia en portapapeles.
document.getElementById("btnCopiar").addEventListener("click", () => {

    let textArea = document.createElement("textarea");
    const textoEscrito = textoATraducir.value;

    if (!textoEscrito) {
        return;
    }
    textArea.value = textoATraducir.value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy"); //Manipulamos el contenido de esta parte: Copia la selección actual en el portapapeles
    textArea.remove();

    alert("📋Se ha copiado tu mensaje: " + textArea.value + " 👈" + " \n" + " \n 📣COMPÁRTELO en tus redes❗");
});