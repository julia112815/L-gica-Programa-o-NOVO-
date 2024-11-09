// Faça um programa que receba um número e informa se ele é ou não primo. Apenas para relembrar, um numero primo é aquele que possui apenas dois divisores: 1 e ele mesmo. 

// 3/1=0 
// 3/2= N
// 3/3=0

// 4/1=0
// 4/2=0
// 4/3=N
// 4/4=0

//5/1=0 
//5/2=N 
//5/3=N 
//5/4=N 
//5/5=0

let num, cont = 0

num = parseInt(prompt("Digite um número:"))

do{
    num =parseInt(prompt("Digite um número para saber se ele é primo"))
    
    if(num <= 0 || isNaN(num)){
    alert("Digite número inteiro e maior que 0")
}

}while(num <=0 || isNaN(num));

for(let i; i<=num; i++){
    document.write(`${num}%${i} = ${num%i} <br>`)
    if(numero % i === 0){
        cont++
    }
}
if(cont === 2){
    document.write(`O número ${num} é primo.`)
}
document.write(`O número ${num} não é primo.`)
