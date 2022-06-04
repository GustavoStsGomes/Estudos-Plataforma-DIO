function calculadora(){
    const OPERACAO = prompt("Escolha uma Operação:\n1- Soma(+)\n2- Subtração(-)\n3- Multiplicação(*)\n4- Divisão Real(/)\n5- Divisão Inteira(%)\n6- Pontenciação(**)")
    
    if (OPERACAO < 1 || OPERACAO > 6 ){
        alert(`[ERRO] Operação não identificada`)
        calculadora()

    }else {
        let n1 = Number(prompt("insira o primeiro valor"))
        let n2 = Number(prompt("insira o segundo valor"))
        let resultado

        if (!n1 || !n2){
            alert(`[ERRO] parâmetros inválidos!`)
            calculadora()

        }else {
            switch(Number(OPERACAO)){
                case 1: 
                    resultado = n1 + n2 
                    alert(`${n1} + ${n2} = ${resultado}`)
                    break

                case 2: 
                    resultado = n1 - n2 
                    alert(`${n1} - ${n2} = ${resultado}`)
                    break

                case 3: 
                    resultado = n1 * n2 
                    alert(`${n1} * ${n2} = ${resultado}`)
                    break

                case OPERACAO == 4: 
                    resultado = n1 / n2 
                    alert(`${n1} / ${n2} = ${resultado}`)
                    break

                case 5: 
                    resultado = n1 % n2 
                    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                    break

                case 6: 
                    resultado = n1 ** n2 
                    alert(`O numero ${n1} elevado a potencia ${n2} é igual a ${resultado}`)
                    break 
            }
            novaOperacação()
            
            function novaOperacação(){
                let opcao = prompt('Deseja fazer outra operação?\n1- Sim\n2- Não')
        
                if (opcao == 1){
                    calculadora()

                }else if (opcao == 2){
                    alert('Até mais!')

                }else{
                    alert('[ERRO] Opção não encontrada, digite opção valida')
                    novaOperacação()
                }
            }
        }
    }
}

calculadora()

   
    