// alert('Boas vindas ao nosso site!.');
// // let nome = ('Lua');
// // let idade = 25;
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;
// let mensagemDeErro = ('Erro! Preencha todos os campos');
// alert(mensagemDeErro);

// let nome = prompt('Qual é seu nome?');
// let idade = prompt('Qual é sua idade?');

// if (idade >= 18) {
//     alert('Pode tirar a habilitação!');
// }


// EXERCICIO 1--------------------------------------------


// let diaDaSemana = prompt('Qual é o dia da semana?');
// if (diaDaSemana == 'Sábado') {
//     alert('Bom fim de semana!');
// } else if (diaDaSemana == 'Domingo') {
//     alert('Bom fim de semana!');
// } else {
//     alert('Digite Sábado ou Domingo.')
// }

// EXERCICIO 2---------------------------------------------------


// let verifiqueNumero = prompt('Qual é o número?');

// if(verifiqueNumero >= 0) {
//     alert('Seu número é positivo');
// } else {
//     alert('Seu número é negativo');
// }


// EXERCICIO 3--------------------------------------------------


// let pontucao = prompt('Qual é sua pontuação?');

// if (pontucao >= 100) {
//     alert('Parabéns, você venceu!')
// } else {
//     alert('Tente novamente para ganhar.')
// }


// EXERCICIO 4------------------------------------------


// let saldoDaConta = prompt('Qual é o saldo da conta?');
// alert(`O saldo na conta é de ${saldoDaConta}`);


// EXERCICIO 5---------------------------------------------------------------


// let insiraNome = prompt('Qual é seu nome?');
// alert(`Boas vindas ${insiraNome}`);


// DESAFIOS while
// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

// let contador = 1;
// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// } 


// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

// let contador = 10;
// while (contador >= 0) {
//     console.log(contador);
//     contador--;
// } 




// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.


// let numeroMaximo = prompt('Digite um número para a contagem regressiva:');
// while (contador >= 0) {
//     console.log(contador);
//     contador--;
// } 



// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.


// let numeroMaximo = prompt('Digite um número para a contagem progressiva:');
// let contador = 0;

// while (contador <= numeroMaximo) {
//     console.log(contador);
//     contador++;
// } 


// 1 Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

// console.log('boas-vindas');

// 2 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

// let nome = 'Rodrigo';
// console.log(`Olá, ${nome}`);

//  3 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

// let nome = 'Rodrigo';
// alert(`Olá, ${nome}`);

// 4 Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

// let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
// console.log(linguagem);

// 5 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

// let valor1 = 5;
// let valor2 = 5;

// let soma = (valor1 + valor2);

// console.log(`A soma de ${valor1} e ${valor2} é igual a ${soma}`);

// 6 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

// let valor1 = 5;
// let valor2 = 5;
// let subtracao =(valor1 - valor2);
// console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${subtracao}`);

// 7 Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

// let idade = prompt('Você é maior de idade?');
// if (idade >= 18) {
//     console.log('Você é maior de idade pode passar!');
// } else {
//     console.log('Desculpe, espere mais alguns anos.');
// }

// 8 Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

// let numero = prompt('Digite um número.');
// if (numero < 0) {
//     console.log('é negativo');
// }else {
//     console.log('é positivo');
// }

// 9 Use um loop while para imprimir os números de 1 a 10 no console.

// let numero = 1;

// while(numero <= 10) {
//     console.log(numero);
//     numero++;
// }

// 10 Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

// let nota = 5;
// if (nota >= 7) {
//     console.log('Aprovado');
// } else {
//     console.log('Reprovado');
// }

// 11 Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

// console.log(Math.random());

// 12 Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

// console.log(parseInt(Math.random() * 10) + 1);

// 13 Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

// console.log(parseInt(Math.random() * 1000) +1);



// Criar uma função que exibe "Olá, mundo!" no console.
// function exibirOla() {
//     console.log('Olá, mundo!');
// }
// exibirOla();


// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

// function exibirOlaNome(nome) {
//     console.log(`Olá, ${nome}`);
// }

// exibirOlaNome('Rodrigo');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

// let numero = prompt('Digite um número.');
// function dobro(numero) {
//     return numero * 2;
// }

// let resultado = dobro(numero);
// console.log(`O dobro do número é ${resultado}`);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.

// function calcularMedia(a, b, c) {
//     return (a + b + c) / 3;
// }

// let media = calcularMedia(5, 5, 5);
// console.log(`A média é ${media}`);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

// function encontrarMaior(a, b) {
//     return a > b ? a : b;
// }

// let maiorNumero = encontrarMaior(5, 10);
// console.log(maiorNumero);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

// function quadrado(numero) {
//     return numero * numero;
// }

// let resultado = quadrado(6);
// console.log(resultado);

// 1 Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

// function calcularImc(peso, altura) {
//     return peso / (altura * altura);
// }

// let imcPeso = parseInt(prompt('Digite seu peso:'));
// let imcAltura = parseFloat(prompt('Digite sua altura:'));
// alert(`Seu IMC é ${calcularImc(imcPeso, imcAltura)}`);

// 1 codigo alternativo

// function calculaIMC(altura, peso){

//     let imc = peso / (alturaMetros * alturaMetros);
//   }

// 2 Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// let numero = parseInt(prompt('Digite um número para calcular o fatorial:'));
// function calcularFatorial(numero) {
//     let fatorial = 1;
//     for (let i = 1; i <= numero; i++) {
//         return fatorial *= i;
//     }
// }
// alert(fatorial);

// 2 codigo alternativo

// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     }
  
//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//       fatorial *= i;
//     }
  
//     return fatorial;
//   }
  
// 2 Exemplo de uso
//   let numero = 5;
//   let resultado = calcularFatorial(numero);
//   console.log(`O fatorial de ${numero} é ${resultado}`);

// 3 Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// let valorDolar = parseFloat(4.80);
// let transformarDolar = parseInt(prompt('Digite o valor em dólar para transformar em reais:'));

// function converterDolarParaReal(valorDolar) {
//     return transformarDolar * valorDolar;
// }
// if (transformarDolar >= 1) {
//     let mensagemDolares = transformarDolar > 1 ? 'dólares' : 'dolar';
//     alert(`O valor em ${converterDolarParaReal(valorDolar)} reais é  ${transformarDolar} ${mensagemDolares}`);
// }

// 3 codigo alternativo

// function converterDolarParaReal(valorEmDolar) {
//     let cotacaoDolar = 4.80;
//     let valorEmReais = valorEmDolar * cotacaoDolar;
//     return valorEmReais.toFixed(2);
//   }
  
// 3 Exemplo de uso
//   let valorEmDolar = 50;
//   let valorEmReais = converterDolarParaReal(valorEmDolar);
//   console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);

// 4 Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// let largura = parseFloat(prompt('Digite a largura da sala:'));
// let altura = parseFloat(prompt('Digite a altura da sala:'));

// function calcularArea(largura, altura) {
//     return largura * altura;
// }

// function calcularPerimetro(largura, altura) {
//     return 2 * (largura + altura);
// }

// alert(`A área da sala é ${calcularArea(largura, altura)} e o perímetro é ${calcularPerimetro(largura, altura)}`);

// 4 codigo alternativo

// function calcularAreaPerimetroSalaRetangular(altura, largura) {
//     let area = altura * largura;
//     let perimetro = 2 * (altura + largura);
    
//     console.log(`Área da sala: ${area} metros quadrados`);
//     console.log(`Perímetro da sala: ${perimetro} metros`);
//   }
  
// 4 Exemplo de uso
//   let altura = 3; // em metros
//   let largura = 5; // em metros
//   calcularAreaPerimetroSalaRetangular(altura, largura);
  
// 5 Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

// function calcularAreaPerimetroSalaCircular(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;
    
//     console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//     console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
//   }

// let raio = parseFloat(prompt('Digite o raio da sala circular:'));
// calcularAreaPerimetroSalaCircular(raio)

// 5 codigo alternativo

// function calcularAreaPerimetroSalaCircular(raio) {
//     let area = Math.PI * raio * raio;
//     let perimetro = 2 * Math.PI * raio;
    
//     console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//     console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
//   }
  
// 5 Exemplo de uso
//   let raio = 4; // em metros
//   calcularAreaPerimetroSalaCircular(raio);

// 6 Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// let numero = parseInt(prompt('Digite um número para ver a tabuada:'));
// function tabuada(numero) {
//     for (let numeroMultiplicado = 1; numeroMultiplicado <= 10; numeroMultiplicado++) {
//         alert(`${numero} x ${numeroMultiplicado} = ${numero * numeroMultiplicado}`);
//     }
// }

// tabuada(numero);

// 6 codigo alternativo

// function mostrarTabuada(numero) {
//     for (let i = 1; i <= 10; i++) {
//       let resultado = numero * i;
//       console.log(`${numero} x ${i} = ${resultado}`);
//     }
//   }
  
// 6 Exemplo de uso
//   let numero = 7;
//   mostrarTabuada(numero);

// LISTAS

// Crie uma lista vazia, com o nome listaGenerica.

// let listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

// let nomes = ['Rodrigo', 'Lucas', 'João'];
// console.log(nomes[0]);

// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

// console.log(nomes[1]);

// Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

// console.log(nomes[2]);