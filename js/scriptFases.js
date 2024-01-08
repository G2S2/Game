const erro = document.querySelector('#erro');
const mensagem = document.querySelector('#mensagem');
const opcoes = document.querySelectorAll('p');

opcoes.forEach(opcao => opcao.addEventListener('click' , function() {
    if (opcao.textContent === erro.textContent)
    {
        let faseAtual = parseInt(localStorage.getItem('faseAtual')) + 1;
        localStorage.setItem('faseAtual' , faseAtual);
        window.location.href = `fase${faseAtual}.html`;
    }
    else{
        mensagem.innerHTML = "<p>Tente Novamente.</p>";
    }
}));