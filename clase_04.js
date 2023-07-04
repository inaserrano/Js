// Funciones
function saludar() {
    console.log("Hola esto es una funcion!");
}
saludar();

function nombre(){
    let nombreing = prompt("Ingresar nombre: ")
    alert("El nombre ingresado es: " + nombreing);
}
nombre();

function nombreapellido(nom,ape){
    console.log("El nombre es: " + nom + " " + ape);
}
nombreapellido("Lucho","Gallardo");

let resultado = 0;
function suma(n1,n2){
    resultado = n1 + n2
    
}
function mostrar(msg){
console.log("El resultadod de la suma es: " + msg)
}
suma(4,6)
mostrar(resultado);

function calculadora(num1,num2,op){
    switch(op){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case"*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return 0;
            break;
    }
}
console.log("El resultado es: ",calculadora(10,5,"*"))