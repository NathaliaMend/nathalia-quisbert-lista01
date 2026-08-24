let produto = {
    nome: 'molho de tomate',
    preco: '5.99',
    estoque: 150
}
function mercado(produto) {
    for (let nome in produto) {
        console.log(`${nome} = ${produto[nome]}`);
    }
}
mercado(produto);