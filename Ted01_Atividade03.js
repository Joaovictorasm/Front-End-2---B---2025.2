
function exibirResumo() {
    
    const preco = parseFloat(prompt("Digite o preço do item:"));
    const quantidade = parseInt(prompt("Digite a quantidade de itens:"));

    
    if (isNaN(preco) || isNaN(quantidade) || preco <= 0 || quantidade <= 0) {
        alert("Erro: Por favor, insira valores numéricos válidos e positivos.");
        return; 
    }

   
    const valorTotal = preco * quantidade;

   
    const desconto = 0.10;
    const valorComDesconto = valorTotal * (1 - desconto);

    
    alert(`
        Resumo da Compra:
        -------------------------
        Valor Total (sem desconto): R$ ${valorTotal.toFixed(2)}
        Valor com Desconto (10%): R$ ${valorComDesconto.toFixed(2)}
    `);
}


exibirResumo();