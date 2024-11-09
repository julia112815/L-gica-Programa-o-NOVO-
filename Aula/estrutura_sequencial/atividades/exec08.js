
let horas, dias, segundos, minutos
let nome 

nome = prompt("Digite seu nome:")
horas = parseInt(prompt(`${nome}, são que horas?`))

//Cálculo
segundos = horas * 3600

//Horas em segundos 
document.write (`${horas} horas, equivale a `+segundos+` segundos <br>`)

// Segundo em minutos

minutos = segundos / 60

document.write(`${segundos} segundos, equivale a ${minutos} minutos, <br>`)

//Segundos em horas

horas = segundos / 3600

document.write(`${segundos} segundos, equivale a ${horas} horas, <br>`)

// Segundos em dias

dias = segundos / 86400

document.write(`${segundos} segundos, equivale a ${dias} dias. <br>`)

// Em forma de relógio



document.write(`${dias}d: ${horas}h: ${minutos}m: ${segundos}s`)