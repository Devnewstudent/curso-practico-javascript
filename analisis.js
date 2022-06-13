const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);
function esPar(numerito) {
   return (numerito % 2 === 0);

}
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }



function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {  
        const pesonitaMitad1 = lista[mitad -1];
        const pesonitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([pesonitaMitad1, pesonitaMitad2]);
        return mediana;
    }else{
        const pesonitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const medianaGeneralCol =  medianaSalarios(salariosColSorted);


const spliceSmart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceSmart;
const salariosColTop10 = salariosColSorted.splice( spliceSmart, spliceCount);
const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol, medianaTop10Col,
}
   
);