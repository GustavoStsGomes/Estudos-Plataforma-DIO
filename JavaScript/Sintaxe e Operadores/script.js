function operacao(){
    let n1 = Number(prompt("insira o primeiro valor"))
    let n2 = Number(prompt("insira o segundo valor"))
    let soma = n1 + n2
    let iguais = ''
    let compara10 = ''
    let compara20 = ''

    //teste numeros nulls
    if (!n1 || !n2){
        alert(`[ERRO] parâmetros inválidos!`)
        operacao()

    } else{
        //teste de numeros iguais
        n1 === n2 ? iguais = 'são' : iguais = 'não são'

        //teste compara com 10
        soma > 10 ? compara10 = 'maior' : compara10 ='menor'

        //teste compara com 20
        soma > 20 ? compara20 = 'maior' : compara20 ='menor'

        //apresenta resultado
        alert(`Os números ${n1} e ${n2} ${iguais} iguais. Sua soma é ${soma}, que é ${compara10} que 10 e ${compara20} que 20.`)
    }

    alert(resposta)
}

operacao()