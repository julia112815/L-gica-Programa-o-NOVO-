// Elabore um programa que ilustra a montagem de uma estrutura de repetição
// decrescente, com o valor inicial informado pelo
// usuário até o número 1*

let valor

valor = parseInt(prompt("Digite um valor:"))
document.write(`<h2>Decrescente do ${valor}<h2> <br>`)

for(let i = valor; i >=1 ; i--){
    document.write(`${i} \t <br>`)
   

}
