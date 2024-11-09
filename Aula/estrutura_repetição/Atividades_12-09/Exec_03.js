//Elabore um programa que leia um número e verifique se ele é ou não perfeito. Um número dito perfeito é aquele que é igual à soma dos seus divisores inteiros (exceto o próprio número).

let numero, numPerfeito = 0

do{
    numero = parseInt(prompt("Digite um número para saber se ele é perfeito"))
    if(numero <= 0 || isNaN(numero)){
        alert("Número digitado inválido")
    }
} while (numero <= 0 || isNaN(numero));

for(let i = 1; i<= numero; i++){
if(numero % i ===0){
    numPerfeito = numPerfeito + 1
}
 
}       
if(numPerfeito === numero){
    document.write(`O número ${numero} é um número perfeito.`)
}else{
    document.write(`O número ${numero} NÃO é um número perfeito.`)
}