//let numero=1
// 1° Maneira 1
//while(numero != 0){
//    alert("Entrou no laço")
//    numero = parseInt(prompt("Digite 0 pra sair"))
//}


//2° Maneira - continue - break
//for(let i = 1; i<10; i++){
    //if(i === 5){
        //continue //Repete a instrução, fazendo um novo teste lógico
    //}
//if(i === 7){
    //break //Finaliza a estrutura de repetição
//}

    //console.log("i:"+i)
//}

//Faça um programa que receba um número e informa se ele é ou não primo. Apenas para relembrar, um número primo é aquele que possui apenas 2 divisores: 1 e ele mesmo.

alert("Digite 0 para sair do programa")
let numero;

do{
    numero = prompt(parseInt("Digite um número:"))
    if(numero === 0 || isNaN(numero)){
        //confirmar a saída
        let sair = prompt("Confirmar saída")
        if(sair){
            break
        }else{
            continue
         }
    }

    //continuar a lógica par(dobro) e impar(triplo)
if( numero % 2 === 0){
    alert(`O dobro de ${numero} é: ${numero*2}`);
    }else {
        alert (`O tripo do número ${numero} é: ${numero * 3}`)
}
alert ("Digite 0 para sair do programa")


}while (true)