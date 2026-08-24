let num = [10, 200, 3, 48, 65];

//informar qual é o maior e o menor valor deste vetor ao usuário.
function maiormenor(num) {
    let i = 0;
    while (i < num.length - 1) {
        if (num[i] > num[i + 1]) {
            let auxiliar = num[i];
            num[i] = num[i + 1];
            num[i + 1] = auxiliar;
            i = 0;
        } else {
            i++;
        }
    } return {
        maior: num[0],
        menor: num[num.length - 1]
    }
}
console.log(maiormenor(num));