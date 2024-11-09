let numero

numero = parseInt(prompt("Digite um número:"))

if(numero%3 ==0 && numero%5 ==0){
    document.write("O número é múltiplo.")
}else{
    document.write("O número não é múltiplo.")
}