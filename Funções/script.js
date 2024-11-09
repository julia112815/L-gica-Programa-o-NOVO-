//1° - Função que não recebe parâmetros e não têm retorno

function name (){
    let numero1, numero2, soma
    numero1 = 5
    numero2 = 5
    soma = numero1 + numero2console.log(`${soma}`)
}

soma1()
console.log(soma1() + 5)

//2° - Função que recebe parâmetros/argumentos e não têm retorno
function soma2(parametro1, parametro2){
    let soma
    soma = parametro1 + parametro2
    console.log(soma)

}
console.log(`------função com parâmetro e sem retorno----`)
soma2(4) // 
soma2(4,4) // Retorna a soma



