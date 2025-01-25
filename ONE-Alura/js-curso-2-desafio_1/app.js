let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificador() {
    console.log('o botão foi clicado');
}

function alerta() {
    alert('Eu amo JS');
}

function escolhaCidade() {
    let cidade = prompt('Digite um nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function digiteNumeros() {
    let numero1 = parseInt(prompt('Digite um número.'));
    let numero2 = parseInt(prompt('Digite um número.'));
    let resultado = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${resultado}`);
}