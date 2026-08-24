var vetor = [10, 20, 30, 40, 50]

function trasprafrente(vetor) {    
    let tamanho = vetor.length
    let iMax = tamanho -1    
    let atual = 0
    let invertido = []
    while (iMax >= 0) {            
        invertido[atual] = vetor[iMax];
        iMax--;
        atual++;
    }
   
    return "Os números de tras para frente ficam: " + invertido;
}
console.log(trasprafrente(vetor))