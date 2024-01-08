let faseAtual = localStorage.getItem('faseAtual') || 1;

const reiniciar = document.querySelector('#btnReiniciar');
const continuar = document.querySelector('#btnContinuar');

reiniciar.addEventListener('click' , function() {
   localStorage.setItem('faseAtual' , 1);
   window.location.href = `fase1.html`; 
});

continuar.addEventListener('click' , function() {
    window.location.href = `fase${faseAtual}.html`;
});

if (faseAtual != 1)
{
    continuar.disabled = false;
    continuar.style.cursor = "pointer";
}