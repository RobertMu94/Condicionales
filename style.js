/**Ejercicio 1 */

/**let respuesta = prompt("Eres bellisimo/a?");

if(respuesta === "si" ){
    console.log("Ciertamente.");    
}else if(respuesta === "no" ){
    console.log("No te creo.");
}else{
    console.log("Responda si o no.");
}
*/

/**Ejercicio 2 */

/**let numero = prompt("Ingrese numero");

if(numero % 2 === 0 ){
    document.write("es divisible por 2");

}else{
    document.write("no es divisible por 2");
}
*/

/**Ejercicio 3 */

/**let numero1 = prompt("Ingrese numero");

if(numero1 % 2 === 0 ){
    alert("es un numero par");

}else{
    alert("es un numero impar");
}
*/

/**Ejercicio 4 */

/**let numerocliente = parseInt (prompt ("Ingrese numero de cliente"));

if(numerocliente === 1000 ){
    alert("ganaste premio");

} else {
    alert("Lo sentimos, sigue intentando");
}
*/

/**Ejercicio 5 */

/** let primernumero = parseFloat(prompt("Ingrese primer numero"));
let segundonumero = parseFloat(prompt("Ingrese segundo numero"));

if (isNaN(primernumero) || isNaN(segundonumero)) {
    alert("alguno de los dos valores no es un numero");
} else {
    if (primernumero < segundonumero) {
        alert(primernumero + "Es menor que" + segundonumero);
    } else {
        alert(segundonumero + "Es menor que" + primernumero);
    }
}
*/

/**Ejercicio 6 */

/**let primernumero = parseFloat(prompt("Ingrese primer numero"));
let segundonumero = parseFloat(prompt("Ingrese segundo numero"));
let tercernumero = parseFloat(prompt("Ingrese tercer numero"));

if ((isNaN(primernumero) || isNaN(segundonumero)) || isNaN(tercernumero)) {
    alert("alguno de los dos valores no es un numero");
} else {
    if (primernumero > segundonumero) {
        if (primernumero > tercernumero) {
            alert("El numero mayor es:" + primernumero);
        } else {
            alert("El numero mayor es:" + tercernumero);
        }
    } else {
        if (segundonumero > tercernumero) {
            alert("El numero mayor es:" + segundonumero);
        } else {
            alert("El numero mayor es:" + tercernumero);
        }
    }

}
*/
/**let primernumero = parseFloat(prompt("Ingrese primer numero"));
let segundonumero = parseFloat(prompt("Ingrese segundo numero"));
let tercernumero = parseFloat(prompt("Ingrese tercer numero"));

if ((isNaN(primernumero) || isNaN(segundonumero)) || isNaN(tercernumero)) {
    alert("alguno de los dos valores no es un numero");
} else {
    if( primernumero > segundonumero && primernumero > tercernumero){
        alert("El numero mayor es:" + primernumero);
    }else if(segundonumero > primernumero && segundonumero > tercernumero){
        alert("El numero mayor es:" + segundonumero);
    }else if(tercernumero > primernumero && tercernumero > segundonumero){
        alert("El numero mayor es:" + tercernumero);
    }else {
        alert("Los numeros son iguales");
    }

}*/

/**Ejercicio 7 */

/** let Dia =prompt("Ingrese un dia de la semana:");
let ElegirDia = Dia.toLowerCase();

if (ElegirDia == "lunes"){
    alert("Comienzo de semana");
}else if (ElegirDia == "martes" || ElegirDia == "miercoles" || ElegirDia == "jueves")  {
    alert("Ya casi es viernes");
}else if(ElegirDia == "viernes"){
    alert("Es viernes el cuerpo lo sabe");
}else if(ElegirDia == "sabado" || ElegirDia == "domingo"){
    alert("Es hoy! es hoy! fin de semana");
}else{
    alert("No ingresaste ningun dia");
}*/

/**Ejercicio 8 */

/**let numerocliente = parseInt (prompt ("Ingrese calificacion de 1 a 10"));

if(numerocliente == "0"  || numerocliente > "10"){
    alert("Error este numero no esta dentro del rango");
}else if(numerocliente >= "1" && numerocliente < "6"){
    alert("Reprobado");
}else if(numerocliente >= "6" && numerocliente <= "8"){
    alert("Regular");
}else if(numerocliente == "9"){
    alert("Bien");
}else if(numerocliente == "10"){
    alert("Exelente");
}else{
    alert("No ingreso ningun numero de rango");
}*/

/**Ejercicio 9 */

/**let Helado =prompt("Ingrese el nombre del topping para su helado: sin topping, oreo, kitkat, brownie");
let Tipohelado = Helado.toLowerCase();

if(Tipohelado === "sin topping"){
    alert("El precio es 5 MXN");
}else if(Tipohelado === "oreo"){
    alert("El precio es 10 MXN");
}else if(Tipohelado === "kitkat"){
    alert("El precio es 15 MXN");
}else if(Tipohelado === "brownie"){
    alert("El precio es 20 MXN");
}else{
    alert("no tenemos este topping, lo sentimos.El precio del helado sin topping es 5 MXN");

}*/

/**Ejercicio 10 */

/**let Programas = prompt("En que curso esta interesado: Course 2 meses, Carrera 6 meses, Master 12 meses");
let Tipoprograma = Programas.toLowerCase();
var preciocursos 

if(Tipoprograma === "course"){
    preciocursos = 4999;
}else if(Tipoprograma === "carrera"){
    preciocursos = 3999;
}else if(Tipoprograma === "master"){
    preciocursos = 2999;
}else{
    alert("No a ingresado ninguno de los cursos ofertados");
}
let Beca = prompt("Cuenta con alguna de estas becas: Facebook, Google, Jesua");
let Tipobeca = Beca.toLowerCase();

if(Tipobeca === "facebook"){
    preciocursos -= preciocursos *= 0.20;
}else if(Tipobeca === "google"){
    preciocursos -= preciocursos *= 0.15;
}else if(Tipoprograma === "jesua"){
    preciocursos -= preciocursos *= 0.5 ;
}else{
    alert("No a ingresado ninguno de las becas ofertados");
}
var Tiempocurso 
if(Tipoprograma === "course"){
    Tiempocurso = 2;
}else if(Tipoprograma === "carrera"){
    Tiempocurso = 6;
}else if(Tipoprograma === "carrera"){
       Tiempocurso = 12;
}
var preciototal = preciocursos*Tiempocurso
alert("El precio mensual de este curso con descuento es:" + preciocursos.toFixed(2) + ". El precio total del curso es:" + preciototal.toFixed(2) + "." );  
*/

/**Ejercicio 11 */

/**let vehiculo = prompt("Ingrese en nombre del tipo de vahiculo que usa: Coche, Moto, Autobus");
let Tipovehiculo = vehiculo.toLowerCase();

if(Tipovehiculo === "coche"){
    preciokm = 0.20
}else if(Tipovehiculo === "moto"){
    preciokm = 0.10
}else if(Tipovehiculo === "autobus"){
    preciokm = 0.5
}else{
    alert("No a ingresado ninguno de los tres vehiculos");
}

let litrosconsumidos = parseInt (prompt ("Ingrese los litros consumidos "));
var preciolitros
if(litrosconsumidos >= "1" && litrosconsumidos <= "100"){
    preciolitros = 5
}else if(litrosconsumidos >= "101" && litrosconsumidos <= "1000"){
    preciolitros = 10
}else{
    alert("No a ingresado ningun valor numerico");
}

let kilometros = parseInt(prompt("ingrese kilimetros recorridos"));   
var preciototal = preciokm*kilometros+preciolitros 
alert("EL precio total a pagar es de" + preciototal + "pesos");

*/

