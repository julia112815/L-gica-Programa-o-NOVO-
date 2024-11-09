let nome
let nota1, nota2, nota3
let media

nome = prompt("Digite o seu nome")
nota1 =parseFloat(prompt(`${nome}, Digite a primeira nota `)) 
nota2 =parseFloat(prompt(`${nome}, Digite a primeira nota `))
nota3 =parseFloat(prompt(`${nome}, a primeira nota `))

media = (nota1 + nota2 + nota3) / 3

document.write(`${nome} sua média é ${media}`)