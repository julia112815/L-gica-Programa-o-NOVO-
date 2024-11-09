//Faça um algoritmo que leia um valor de N inteiro e positivo, calcule e mostre o valor de E, conforme a formula a seguir:

//`E = 1 + 1/1!  +  1/2!  +  1/3! + … + 1/N!`

let numero, e, fatorial = 1;

numero = Number(prompt("Digite um número:"))

for(let i = 1; i<= numero; i++){
    //fat = 1*1
    //fat = 1*2
    //fat = 1*3

  for(let j = 1; j<= i; j++ ){
    fatorial = fatorial * j
  }
e = e + 1/fatorial

}

documento.write(`Valor final de E = ${e}`)