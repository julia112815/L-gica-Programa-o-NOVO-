let nota1
let nota2
let nota3
let media

nota1 = parseFloat(prompt("Qaunto foi sua primeira nota?"))
nota2 = parseFloat(prompt("Qaunto foi sua segunda nota?"))
nota3 = parseFloat(prompt("Qaunto foi sua terceira nota?"))

media = (nota1 + nota2 + nota3) / 3
 if(media >= 7){
    document.write("Você está aprovado.")
 } else {
    (media < 7)
    document.write("Você não foi aprovado!")
 }
