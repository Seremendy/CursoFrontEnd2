// console.log("Hello World!");
// Javascript possui uma tipagem dinâmica: infere os tipos de dados
// Javasxript possui uma tipagem fraca
// Camel case utilize sempre no Javascript ( começa com letra minuscula e depois usa maiuscula e *nunca começe variavel com numeros*)

var nomeDoAluno = "Rodrigo Morello"; // string
var idade = 25; // number
var altura = 1.75; // number
var estudando = true; // boolean (true ou false)

console.log(nomeDoAluno, typeof nomeDoAluno);

console.log(idade, typeof idade);
// console.log(typeof idade);

console.log(altura, typeof altura);

console.log(estudando, typeof estudando);

var semConteudo; // declarando uma variável sem conteudo

var curso = "Front-end em React", 
    topico = "JavaScript Básico I";

// ! Não utilize o var nos seus códigos JavaScript -------------------------------------

let notaDoAluno = 10;
const mediaDoAluno = 8;

notaDoAluno = 9;
// mediaDoAluno = 5; não é permitido mudar constante

console.log(notaDoAluno)
