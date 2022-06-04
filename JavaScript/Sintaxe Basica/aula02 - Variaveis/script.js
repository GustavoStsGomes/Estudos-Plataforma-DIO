/*
//~~tipos primitivos
//boolean
var TourF = false
console.log(TourF)
console.log(typeof(TourF))

//number
var numeroQualquer = 1
console.log(numeroQualquer)
console.log(typeof(numeroQualquer))

//string
var nome = 'Gustavo'
console.log(nome)
console.log(typeof(nome))
//~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~modos de declaração
var variavel
console.log(variavel)

let variavel2
console.log(variavel2)

const CONSTANTE = 'Gustavo'
console.log(CONSTANTE)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~Escopos Globais e locais
var escopoGlobal = 10;

function somar(){
    var escopoLocal = escopoGlobal + 10
    console.log(`Dentro da Função - Global:${escopoGlobal} e Local:${escopoLocal}`)
}

console.log(somar())
console.log(`Fora da Função - Global:${escopoGlobal} e Local:${escopoLocal}`)//erro pq var escopo local não existe aqui.
//~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~Atribuição, Comparação e Comparação identica
// 1 "=" significa atribuição
var atribuicao = 5

// 2 "="(==) significa comparação
var comparacao = '0' == 0
console.log(comparacao)//true

// 2 "="(===) significa comparação identifca(valor e tipo)
var comparacao = '0' === 0
console.log(comparacao)//false
//~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~Operadores Matemáticos
// adição (+), subtração (-), multiplicação (*), divisão real (/), divisão inteira/resto da divisão (%), potenciação (**)
var adicao = 10 + 5
console.log(adicao)

var subtracao = 10 - 5 
console.log(subtracao)

var multiplicacao = 10 * 5 
console.log(multiplicacao)

var divisaoReal = 10 / 5 
console.log(divisaoReal)

var divisaoInteira = 10 % 3 
console.log(divisaoInteira)

var potenciacao = 10 ** 2 
console.log(potenciacao)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~Operadores Relacionais
// maior que (>), menor que (<), maior ou igual (>=), menor ou igual (<=)
var maiorQue = 5 > 2
console.log(maiorQue)

var menorQue = 5 < 2
console.log(menorQue)

var maiorIgual = 5 >= 2
console.log(maiorIgual)

var menorIgual = 5 <= 2
console.log(menorIgual)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~Operadores Lógicos
// e/agregador (&&), ou/conversor (||), não/negação (!)
var e = true && false
console.log(e)

var ou = true || false
console.log(ou)

var nao = !true
console.log(nao)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/