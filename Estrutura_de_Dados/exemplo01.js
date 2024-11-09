// Vamos criar um algoritmo que pergunte ao usuário a temperatura média dos meses durante o ano, lembrando que um ano tem 12 meses. Utilizando Array.

 let tempAnual = []
 let mediaTemp, acumuladora

 // temAnual [0] = Number(prompt("Digite a temperatura do mês 01"))
 // temAnual [1] = Number(prompt("Digite a temperatura do mês 02"))
 // temAnual [2] = Number(prompt("Digite a temperatura do mês 03"))
 // temAnual [3] = Number(prompt("Digite a temperatura do mês 04"))
 // temAnual [4] = Number(prompt("Digite a temperatura do mês 05"))
 
 // 1° Armazenar dados na estrutura de dados -> ARRAY(vetor)
 for(let i = 0; i<12; i++){
       tempAnual[i] = Number(prompt("Digite a temperatura do mês:"))
 }

 //2° Mostrar/ processar os valores do array de forma individual
 for(let i =0; i<tempAnual.length; i++){
       acumuladora = acumuladora + tempAnual[i]
 }
 
 //mediaTemp = acumuladora / 12s
 mediaTemp= acumuladora / tempAnual.length
 console.log(typeof acumuladora) //number
 console.log (typeof 12) //number
 console.log (mediaTemp)
 
 document.write(`<p>TempAnual: ${tempAnual}</p>`)
 document.write(`<p>Média da TempAnual: ${mediaTemp}</p>`)
 
 

 