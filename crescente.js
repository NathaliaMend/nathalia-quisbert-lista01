let num = [50, 43, 65];

function ordenar(num) {
    i = 0;
    while (i < num.length - 1) {
        if (num[i] > num[i + 1]) {
            let auxiliar = num[i];
            num[i] = num[i + 1];
            num[i + 1] = auxiliar;
            i = 0;
        } else {
            i++;
        }

    }
    return "Os números em ordem crescente são: " + num;
}

console.log(ordenar(num));
// O metodo utilizado é muito custoso porem mais facil de entender