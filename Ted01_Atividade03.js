
function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}


function aplicarDesconto(valorTotal) {
    const LIMITE_DESCONTO = 100.00;
    const PERCENTUAL_DESCONTO = 0.10; // 10%

    if (valorTotal > LIMITE_DESCONTO) {
        const valorComDesconto = valorTotal * (1 - PERCENTUAL_DESCONTO);
        return valorComDesconto;
    } else {
        return valorTotal;
    }
}


function exibirResumo() {
    const precoUnitarioInput = prompt("Digite o preço unitário do produto (ex: 50.50):");
    const quantidadeInput = prompt("Digite a quantidade comprada (ex: 2):");


        const precoUnitario = parseFloat(precoUnitarioInput);
    const quantidade = parseInt(quantidadeInput);

    )
    if (isNaN(precoUnitario) || isNaN(quantidade) || precoUnitario <= 0 || quantidade <= 0) {
        alert("Entrada inválida. Certifique-se de digitar números positivos para preço e quantidade.");
        return;
    }

    
    const valorAntesDesconto = calcularTotal(precoUnitario, quantidade);

    
    const valorFinal = aplicarDesconto(valorAntesDesconto);

   
    const valorAntesFormatado = valorAntesDesconto.toFixed(2).replace('.', ',');
    const valorFinalFormatado = valorFinal.toFixed(2).replace('.', ',');
    
    
    const valorDesconto = (valorAntesDesconto - valorFinal).toFixed(2).replace('.', ',');

    let mensagemDesconto = "";
    if (valorAntesDesconto > 100) {
        mensagemDesconto = `Parabéns! Você economizou R$ ${valorDesconto} com 10% de desconto.`;
    } else {
        mensagemDesconto = "Não houve desconto aplicado, pois o valor é R$ 100,00 ou menos.";
    }


    const resumo = `
--- Resumo da Compra ---

Preço Unitário: R$ ${precoUnitario.toFixed(2).replace('.', ',')}
Quantidade: ${quantidade}

Valor Total (antes do desconto): R$ ${valorAntesFormatado}
Valor do Desconto: R$ ${valorDesconto}
Valor Final (com desconto aplicado): R$ ${valorFinalFormatado}

${mensagemDesconto}

    `;

    console.log(resumo); 
    alert(resumo);       
}


exibirResumo();
