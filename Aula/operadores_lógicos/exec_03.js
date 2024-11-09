let lado1, lado2, lado3

lado1 = parseInt(prompt("Digite o valor do primeiro lado do triângulo:"))
lado2 = parseInt(prompt("Digite o valor do segundo lado do triâgulo:"))
lado3 = parseInt(prompt("Digite o valor do terceiro triângulo:"))

if (((lado1 + lado2) > lado3) && ((lado1 + lado3)> lado2)&&((lado2 + lado3)> lado1)){
    document.write("O seu triângulo é válido.")
}else {
    document.write("O seu triângulo é inválido.")
}