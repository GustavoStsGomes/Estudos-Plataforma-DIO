//solução 01
function verificaPalindromo(string){
    //verifica se a string existe, se não exister já sai da função
    if (!string) return "string inexistente"

    //quebra string, reveter os dados, monta outra string, e compara com a que entrou
    return string.split("").reverse().join("") === string

}

function verificaPalindromo02(string){
    if (!string) return "string inexistente"

    for (let i in string){
        //compara o começo da string com o final dela, length tem contagem diferente do vetor por isso o -1 
        // e o -i é para acompanhar o indice inicial das bordas para o centro da string
        if(string[i] !== string[string.length -1 -i]){
            return false
        }
    }
    return true

}

console.log(verificaPalindromo02("abba"))
