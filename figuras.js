//codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

function perimetroCuadrado (lado) {
    return lado * 4;
}
//perimetroCuadrado()
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es: " + areaCuadrado + "cm´2");
function areaCuadrado (lado) {
    return lado * lado;
}
//perimetroCuadrado()
console.groupEnd();


//codigo del triangulo
console.group("Triangulos");
//const ladoTrinagulo1 = 6;
//const ladoTrinagulo2 = 6;
//const baseTrinagulo = 4;
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo (base, altura) {
    return (base * altura) /2;
}
//console.log("Los lados del triangulo miden: " 
//+ ladoTrinagulo1 + "cm, " 
//+ ladoTrinagulo2 + "cm, " 
//+ baseTrinagulo + "cm");

//const alturaTriangulo = 5.5;
//console.log("El altura del triangulo es: " + alturaTriangulo + "cm´2");
//const perimetroTriangulo = ladoTrinagulo1 + ladoTrinagulo2 + baseTrinagulo;
//console.log ("El perimetro del triangulo es: " + perimetroTriangulo + "cm" );

//const areaTriangulo = (baseTrinagulo * alturaTriangulo) / 2;
//console.log ("El area del triangulo: " + areaTriangulo + "cm´2");

console.groupEnd();

//codigo del circulo
const PI = Math.PI;
console.group("Circulos");
function diametroCirculo (radio) {
    return radio * 2;
}

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}
//radio
//const radioCirculo = 4;
// diametro
//const diametroCirculo = radioCirculo * 2;
//Pi
//const Pi = Math .PI;
//circunferencia
//const perimetroCirculo = diametroCirculo * Pi;
//Area
//const areaCirculo = (radioCirculo * radioCirculo) * Pi;

//console.log ("El radio del circulo es: " + radioCirculo + "cm" );
//console.log ("El diametro del circulo es: " + diametroCirculo + "cm" );
//console.log ("Pi es: " + Pi );
//console.log ("El perimetro del circulo es: " + perimetroCirculo + "cm" );
//console.log ("El area del circulo es: " + areaCirculo + "cm´2" );



console.groupEnd();