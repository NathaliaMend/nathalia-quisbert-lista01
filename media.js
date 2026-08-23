var vetor = [10, 10, 8.5, 10, 10];

// media dos valores

function calculamedia(vetor) {
    var i = 0;
    let soma = 0;
    while (i < vetor.length) {
        soma = soma + vetor[i]
        i++;
    }
    media = soma / vetor.length;
    return media;
}
console.log(`A media dos numeros é`, calculamedia(vetor));