let carros = [
    {marca: 'Volkswagen', modelo: 'vw gol', ano: 2012},
    {marca: 'Fiat', modelo: 'fiat uno', ano: 2013},
    {marca: 'Fiat', modelo: 'fiat palio', ano: 2014},
    {marca: 'Hyundai', modelo: 'GM onix', ano: 2015},
    {marca: 'Chevrolet', modelo: 'H. HB20', ano: 2016},
    {marca: 'Honda', modelo: 'Honda civic', ano: 2017},
]

function modernos (carros){
let novos=[];
    for (let i=0; i<carros.length; i++) {
        if (carros[i].ano > 2015){
            novos.push(carros[i])
        }
    }
    console.log(`Fabricados depois de 2015:`,novos) 
    }

modernos(carros)