import cipher from './cipher.js';

const footerYear = document.getElementById('year');
footerYear.innerHTML = new Date().getFullYear();

let textoATraducir = document.getElementById("textoATraducir");
let shift = document.getElementById("shift");

document.getElementById("btnCopiar").accessKey = "1";

shift.addEventListener('keydown', (evento) => {
    const teclaPresionada = evento.key;
    const teclaPresionadaEsUnNumero = Number.isInteger(parseInt(teclaPresionada));
    const sePresionoUnaTeclaNoAdmitida = teclaPresionada != 'ArrowDown' && 'ArrowUp' && 'ArrowLeft' && 'ArrowRight' && 'Backspace' && 'Delete' && 'Enter' && !teclaPresionadaEsUnNumero;
    const siComienzaPorCero = shift.value.length === 0 && teclaPresionada == 0;

    if (sePresionoUnaTeclaNoAdmitida || siComienzaPorCero) evento.preventDefault(); //no ocurrirá.
});

document.getElementById("cifrando").addEventListener("click", (evento) => {
    textoATraducir.value = (cipher.encode(parseInt(shift.value), textoATraducir.value));
    evento.preventDefault();
});
document.getElementById("decifrando").addEventListener("click", (evento) => {
    textoATraducir.value = (cipher.decode(parseInt(shift.value), textoATraducir.value));
    evento.preventDefault();
});

document.getElementById("btnCopiar").addEventListener("click", (evento) => {
    evento.preventDefault();
    let textArea = document.createElement("textarea");
    const textoEscrito = textoATraducir.value;

    if (!textoEscrito) return;

    textArea.value = textoATraducir.value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    textoATraducir.value = "";

    const alert = document.querySelector(".alert");
    const alerText = document.getElementById('alertText')
    alerText.innerHTML = "📋Se ha copiado tu mensaje: " + textArea.value + " 👈" + " \n" + " \n 📣COMPÁRTELO en tus redes❗";
    alert.classList.add("show");

    setTimeout(() => {
        alert.classList.remove("show");
        alerText.innerHTML = "";
    }, 2000);
});