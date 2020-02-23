import cipher from './cipher.js';

let cifrar = document.getElementById("cifrando");
let descifrar = document.getElementById("decifrando");
let textoATraducir = document.getElementById("textoATraducir");
let shift = document.getElementById("shift");
document.getElementById("btnCopiar").accessKey = "1";

shift.addEventListener('keydown', function(evento) {
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
        !teclaPresionadaEsUnNumero;
    const comienzaPorCero = shift.value.length === 0 && teclaPresionada == 0;

    if (sePresionoUnaTeclaNoAdmitida || comienzaPorCero) {
        evento.preventDefault();
    }

});


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