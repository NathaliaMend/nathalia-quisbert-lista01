//var nome = 'nathalia';
//var idade = 25; 

function votacao(nome, idade) {
    if (idade < 16) {
        console.log(`${nome} não deverá votar esse ano.`);

    } if (idade >= 16 && idade <= 70) {
        console.log(`${nome} deverá votar esse ano.`);
    } if (idade == 16 || idade == 17 || idade > 70) {
        console.log(`O voto de ${nome} é opcional.`);
    }

}
// Para atribuir valores as variaveis pelo terminal:
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Digite o nome: ', (nome) => {
    console.log(`Você digitou: ${nome}`);

    readline.question('Digite a idade: ', (idade) => {
        console.log(`Você digitou: ${idade}`);
        votacao(nome, idade);
        readline.close();
    })
    
});
