
let nomes = ["Maria", "João", "Pedro", "Ana", "Carlos"];
console.log(`Array original: [${nomes}]`);
console.log(`O terceiro nome do array é: ${nomes[2]}`); 


nomes.push("Fernanda"); 
console.log(`Array após adicionar nomes: [${nomes}]`);




nomes.pop(); 
console.log(`Array após remover o último nome: [${nomes}]`);




const numeros = [2, 4, 6, 8];
const numerosDobrados = numeros.map(function(numero) {
    return numero * 2;
});
console.log(`Array original de números: [${numeros}]`);
console.log(`Novo array com números dobrados: [${numerosDobrados}]`);


const outrosNumeros = [1, 3, 5, 7, 9];
const maioresQueCinco = outrosNumeros.filter(function(numero) {
    return numero > 5;
});
console.log(`Array original: [${outrosNumeros}]`);
console.log(`Novo array com números maiores que 5: [${maioresQueCinco}]`);
