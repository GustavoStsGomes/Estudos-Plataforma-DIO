/*
var jogador1 = 0
var jogador2 = 0
var placar

//if ternario
jogador1 >= 0 && jogador2 >= 0 ? console.log('Jogadores validos!') : console.log('Jogadores invalidos!')

//if, else if, else
if(jogador1 > 0){
    console.log('Jogador 1 marcou ponto')
    placar = jogador1 > jogador2
}else if (jogador2 > 0){
    console.log('Jogador 2 marcou ponto')
    placar = jogador2 > jogador1
}else {
    console.log('ninguém marcou ponto')
}

//switch case
switch (placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou')
        break;
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou')
        break;    
    default:
        console.log('ninguém ganhou')
}

let array = ['valor1', 'valor2', 'valor3','valor4','valor5']

let object = {
    propriedade1: 'valor1',
    propriedade2: 'valor2',
    propriedade3: 'valor3'
}

estrutura for (incio, condição, fim)
for (let indice = 0; indice < array.length; indice++){
    console.log(indice)
}


//for/in executa de acordo com a propriedade
for (let i in array){
    console.log(i)
}

//com objeto
for (let i in object){
    console.log(i)
}

//imprimendo o valor
for (let i of array){
    console.log(i)
}


//while -- verificação feita antes da execução
var a = 0

while (a < 10){
    console.log(a)
    a++
}
*/

// do while -- verificação feita depois da execução
var a = 0

do {
    console.log(a)
    a++
} while (a < 10)