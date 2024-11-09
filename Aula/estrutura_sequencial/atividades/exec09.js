let real, dolar, cotacao
let nome

nome = prompt("Qual o seu nome?")
cotacao = parseFloat(prompt(`${nome}, quanto está custando o dólar?`))
real = parseFloat(prompt(`${nome}, qual valor você deseja converter em dólar?`))

dolar = real / cotacao

document.write (`O valor que você tem em dólar é: ${dolar}`)
document.write (`O valor que você tem em reais é de:${real}`)