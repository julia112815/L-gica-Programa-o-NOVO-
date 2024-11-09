// Elabore um programa que leia um número e
// apresente a tabuada desse número.



let numero = Number(prompt("Digite um número para tabuada:"))
debugger;
for (let i = 1; i <= 10; i++ ){
    document.write(` ${numero} x ${i} = ${numero*i} <br>`)
}