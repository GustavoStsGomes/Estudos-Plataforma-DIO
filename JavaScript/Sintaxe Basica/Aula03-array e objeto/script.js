/*
//Como declarar um array
//pode guardar varios tipos de dados. 
let array = ['string', 1, true] 
console.log(array)

//pode guardar inclusive outros arrays
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4'],] 
//console.log(array[0]) // pegando um item do array
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Manipulando array
// forEach passa por todo o array
array.forEach(function(item, index){console.log(item, index)})

// push adiciona no final do array
array.push(8)
console.log(array)

// pop remove no final do array
array.pop()
console.log(array)

// shift remove no inicio do array
array.unshift()
console.log(array)

// unshift adiciona no inicio do array
array.unshift('primeiro')
console.log(array)

// indexOf encontra o indice de um valor
console.log(array.indexOf(true))

//splice remove ou substitui pelos indices
array.splice(0, 3)
console.log(array)

// slice retorna um array já existente
let novoArray = array.splice(0, 3)
console.log(novoArray)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    objectInterno: {
        objectInterno: 'objeto interno'
    }
}

console.log(object)//acessando o objeto todo
console.log(object.boolean)//acessando uma propriedade

//desestruturação
var string = object.string
console.log(string)

var {string, boolean, objectInterno} = object
