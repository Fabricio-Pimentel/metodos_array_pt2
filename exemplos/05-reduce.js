console.log('=== EXEMPLOS COM reduce() ===\n');

// -------------------------------------------------------------------------
// Exemplo 1 (Básico): Posição de um valor primitivo
// -------------------------------------------------------------------------

console.log("--- Exemplo 1: Soma de números (Básico) ---");

const valores = [10, 25, 30, 45];

const somaTotal = valores.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0); // 0 é o valor inicial do acumulador

console.log("Valores:", valores);
console.log("Soma total:", somaTotal);
console.log("\n");

// -------------------------------------------------------------------------
// Exemplo 2 (intermediario): Somatória de preços em carrinho simples
// -------------------------------------------------------------------------

console.log("--- Exemplo 2: subtotal de carrinho de compras (intermediario) ---");

const carrinho = [
    { item: 'CamisetaDev', preco: 49.90 },
    { item: 'Caneca Js', preco: 29.90 },
    { item: 'Adesivo Node', preco: 10.00 }
];

const subtotal = carrinho.reduce((acc, produto) => {
    return acc + produto.preco;
}, 0);

console.log(`Subtotal do carrinho: R$ ${subtotal.toFixed(2)}`);
console.log("\n");

// -------------------------------------------------------------------------
// Exemplo 3 (Back-End Real): Fechamento de pedido com quantidade e cálculo de frete
// -------------------------------------------------------------------------

console.log("--- Exemplo 3: fechamento de Pedido e Relatório (Back-End Real) ----");

const pedido = [
    { id: 1, nome: 'Hamburguer Artesanal', preco: 32.0, qtd: 2 },
    { id: 2, nome: 'Batata frita Rústica', preco: 16.0, qtd: 1 },
    { id: 3, nome: 'Hamburguer Artesanal', preco: 7.0, qtd: 3 }
];

const taxaEntrega = 8.50;

//calcula o valor dos itens multiplicando o preço unitario pela quantidade
const totalItens = pedido.reduce((acumulador, item) => {
    return acumulador + (item.preco * item.qtd);
}, 0)

const totalFinal = totalItens + taxaEntrega;

console.log("Itens do Pedido:", pedido);
console.log(`Subtotal dos Itens : R$ ${totalItens.toFixed(2)}`);
console.log(`Taxa de Entrega : R$ ${taxaEntrega.toFixed(2)}`);
console.log(`Total a Pagar: R$ ${totalFinal.toFixed(2)}`);
