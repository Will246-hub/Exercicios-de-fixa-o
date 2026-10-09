let Nome = prompt("Digite o seu nome: ") //saudação personalizada
alert(`Olá, bem vindo ${Nome}`)

let num1 = Number(prompt("Digite o primeiro número: "))//soma, subtração, multiplicação e divisão
let num2 = Number(prompt("Digite o segundo número: "))
let som = num1 + num2 
let div = num1 / num2 
let sub = num1 - num2
let mult = num1 * num2

alert(`Soma: ${som}`)
alert(`Subtração: ${sub}`)
alert(`Multiplicação: ${mult}`)
alert(`Divisão: ${div}`)

let idade = Number(prompt("Digite sua idade: ")) //pergunta de idade
if (idade <= 12) {
    alert("Você é Criança!")
} else if (idade<= 17) {
 alert("Você é Adolescente!")
} else if (idade<= 60) {
 alert("Você é Adulto!")
} else { 
    alert("Você é Idoso!")
}

let n = prompt("Digite um numero ") //par ou impar 
if(n % 2 == 0){
	alert("O Resultado é Par")
}else{
	alert("O Resultado é Impar")
}

let numero1 = Number(prompt("Digite o primeiro número: "))// maior entre os três
let numero2 = Number(prompt("Digite o segundo número: "))
let numero3 = Number(prompt("Digite o terceiro número: "))

const maior = Math.max(numero1, numero2, numero3) //a função math.max retorna o maior valor de varios numeros
alert(`O número maior foi: ${maior}`)

let nota = Number(prompt("Digite a sua nota: ")) //nota do aluno
if (nota >= 6) {
    alert("Aprovado!")
} else if (nota >= 4) {
 alert("Recuperação!")
} else { 
    alert("Reprovado!")
}

let preco = Number(prompt("Digite o valor do seu produto: ")) //preço do produto
let qtd = Number(prompt("Digite a quantidade do seu produto: "))

let total = preco * qtd 

if (qtd >= 3){
    let desconto = total * 0.9 
    alert(`O valor que será pago com o desconto de 10%, é de: ${desconto}`)
}else{
    alert(`O valor que será pago é de: ${total}`)
}

let NumA = Number(prompt("Digite o primeiro número: ")) //calculadora
let NumB = Number(prompt("Digite o segundo número: "))
let operadores = prompt("Digite o operador que irá utilizar(+, -, *, /): ")

let resultado 

switch (operadores) {
    case '+':
       resultado = NumA + NumB 
           alert(`O resultado é: ${resultado}`)
        break;
    case '-' :
       resultado = NumA - NumB 
        alert(`O resultado é: ${resultado}`)
        break;
    case '*' :
       resultado = NumA * NumB 
        alert(`O resultado é: ${resultado}`)
        break;
    case '/' :
       resultado = NumA / NumB 
        alert(`O resultado é: ${resultado}`)
        break;
    default:
        alert("Operador invalido")
        break;
}

let Anonascimento = Number(prompt("Digite o ano em que você nasceu: ")) //Ano e CNH

let aproximado = 2026 - Anonascimento 

if (aproximado <= 150) {
 alert(`A sua idade aproximada é: ${aproximado}`)
if (aproximado >= 18) {
    alert("Você tem idade para poder tirar sua CNH!")
}else{
    alert("Você não tem idade suficiente para poder tirar sua CNH!")
}
}else{
    alert("Idade invalida!")
} 

let temp = Number(prompt("Digite a temperatura atual em °C:")) //temperatura

if (temp < 18) {
  alert("Está Frio.")
} else if (temp <= 26) {
  alert("O clima está ameno.")
} else {
  alert("Está quente.")
}

let valor1 = Number(prompt("Digite o primeiro número: "))//operadores de comparação 
let valor2 = Number(prompt("Digite o segundo número: "))

if (valor1 > valor2) {
  alert(`O primeiro número (${valor1}) é maior que o segundo (${valor2}).`)
} else if (valor1 < valor2) {
  alert(`O primeiro número (${valor1}) é menor que o segundo (${valor2}).`)
} else {
  alert(`O primeiro número (${valor1}) é igual ao segundo (${valor2}).`)
}
