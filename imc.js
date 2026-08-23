var peso = 60;
var altura = 1.67;

//imc ideal <18,5 e 24,9>

function calculaimc(peso, altura) {
    var imc = peso / (altura * altura)
    return imc.toFixed(2);
}


function resultado(imc) {
    if (imc < 18.5) {
        console.log(`Seu IMC é ${imc} está baixo, cuide-se.`)
    }
    if (imc > 24.9) {
        console.log(`Seu IMC é ${imc} e está alto, cuide-se.`)
    }

    else {
        console.log(`Seu IMC é ${imc} e está saudável, continue se cuidando.`)
    }
}

const imc = calculaimc(peso, altura);
resultado(imc);
