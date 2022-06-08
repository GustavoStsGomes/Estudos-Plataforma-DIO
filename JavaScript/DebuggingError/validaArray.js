/*
O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações:
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof
*/

function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os parâmetros!")

        if(typeof(arr) !== 'object') throw TypeError("Array não é do tipo object!")

        if(typeof(num) !== 'number') throw TypeError("Parâmetro numérico do tipo incorreto!")

        if(arr.length !== num) throw RangeError("Tamanho inválido!")

    } catch (e){
        if(e instanceof ReferenceError){
            console.log("[ERRO] Esse é um ReferenceError!")
            console.log(e.message)
        } else if (e instanceof TypeError){
            console.log("[ERRO] Esse é um TypeError!")
            console.log(e.message)
        } else if (e instanceof RangeError){
            console.log("[ERRO] Esse é um RangeError!")
            console.log(e.message)
        } else {
            console.log("[ERRO] Erro não esperado:", e)
        }
    }
}

//console.log(validaArray()) //reference
//console.log(validaArray(5, 5)) //object
//console.log(validaArray([], 'a')) //numerico
console.log(validaArray([1,2,3], 5))//tamanho
