//1 questao
let populacaoA = 80000;
const taxaA = 0.03;

let populacaoB = 200000;
const taxaB = 0.015;


let anos = 0;


while (populacaoA < populacaoB) {

    populacaoA += populacaoA * taxaA;
    populacaoB += populacaoB * taxaB;
    
    anos++;
}

console.log(`População A inicial: ${80000}`);
console.log(`População B inicial: ${200000}`);
console.log("---");
console.log(`Número de anos necessários para a população A ultrapassar a de B: ${anos}`);
console.log(`População final de A: ${populacaoA.toFixed(0)}`);
console.log(`População final de B: ${populacaoB.toFixed(0)}`);

//2

let pares = 0;
let impares = 0;
let numero;


for (let i = 0; i < 10; i++) {
   
    numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));

    
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

alert(`
    Análise dos 10 números digitados:
    Quantidade de números pares: ${pares}
    Quantidade de números ímpares: ${impares}
`);

//3

const N = parseInt(prompt("Digite a quantidade de números que deseja inserir:"));


if (isNaN(N) || N <= 0) {
    alert("Por favor, insira um número inteiro positivo válido.");
} else {
    let menorValor;
    let maiorValor;
    let soma = 0;

  
    for (let i = 0; i < N; i++) {
        
        const numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));

       
        soma += numero;

        
        if (i === 0) {
            menorValor = numero;
            maiorValor = numero;
        } else {
         
            if (numero < menorValor) {
                menorValor = numero;
            }
           
            if (numero > maiorValor) {
                maiorValor = numero;
            }
        }
    }

    
    alert(`Resultados da sua lista de ${N} números:
        Menor valor: ${menorValor}
        Maior valor: ${maiorValor}
        Soma total: ${soma.toFixed(2)}`);
}

//4

let salario = 1000.00;
let percentualAumento = 0.0015; // 0.15%


for (let ano = 1997; ano <= 2025; ano++) {
    
    percentualAumento *= 2;
    
    salario += salario * percentualAumento;
}


console.log(`O salário atual do funcionário é: R$ ${salario.toFixed(2)}`);

//2 versao!!

const salarioInicial = parseFloat(prompt("Informe o salário inicial do funcionário em 1995:"));


if (isNaN(salarioInicial) || salarioInicial <= 0) {
    alert("Por favor, digite um valor numérico válido e maior que zero.");
} else {
    
    let salario = salarioInicial;
    let percentualAumento = 0.0015; // 0.15%

  
    for (let ano = 1997; ano <= 2025; ano++) {
        percentualAumento *= 2;
        salario += salario * percentualAumento;
    }

    
    alert(`O salário inicial em 1995 era: R$ ${salarioInicial.toFixed(2)}
O salário atual do funcionário é: R$ ${salario.toFixed(2)}`);
}
//5 questao

function calcularCirculo() {
   
    const raio = parseFloat(prompt("Digite o raio do círculo:"));

  
    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, digite um número válido e positivo para o raio.");
        return; 
    }

   
    const PI = Math.PI;

    
    const area = PI * (raio * raio);
    const perimetro = 2 * PI * raio;

    
    alert(`Resultados para um círculo com raio ${raio}:
Área: ${area.toFixed(2)}
Perímetro: ${perimetro.toFixed(2)}`);
}


calcularCirculo();

//questao 6

function calcularRetornoDoInvestimento() {
    
    const capital = parseFloat(prompt("Digite o capital inicial (C) investido:"));
    const taxa = parseFloat(prompt("Digite a taxa de juros mensal (i), em %:"));
    const tempo = parseInt(prompt("Digite o tempo do investimento, em meses (t):"));

    
    if (isNaN(capital) || isNaN(taxa) || isNaN(tempo) || capital <= 0 || tempo < 0) {
        alert("Erro: Por favor, insira valores numéricos válidos. O capital e o tempo devem ser positivos.");
        return; 
    }

    const taxaDecimal = taxa / 100;

   
    const montante = capital * Math.pow((1 + taxaDecimal), tempo);

    
    alert(`
        Relatório do Investimento:
        -------------------------
        Capital Inicial (C): R$ ${capital.toFixed(2)}
        Taxa de Juros (i): ${taxa.toFixed(2)}% ao mês
        Tempo (t): ${tempo} meses
        -------------------------
        Montante Final (M): R$ ${montante.toFixed(2)}
    `);
}


calcularRetornoDoInvestimento();