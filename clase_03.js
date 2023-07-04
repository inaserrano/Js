// Ciclo For //

// Ejemplo turnos //
// for (let i = 1; i < 20; i ++) {
//     let ingnombre = prompt("Ingrese un nombre: ")
//     alert(" Turno n° "+i+" Nombre: "+ingnombre)
//     console.log(" Turno n° "+i+" Nombre: "+ingnombre)
// }

// Ejemplo Tablas //
// let numero = parseInt(prompt("Ingresar Numero: "))
// for (let i = 1; i <= 10; i++){
//     let resultado = numero * i
//     alert(numero + "*"+i+" = "+resultado)
// }

// Sentencia Break
// for (let i=1;i<=10;i++){
//     if (i==8){
//         break;
//     }
//     alert(i);
// }

// Sentencia Continue
// for (let i=1;i<=10;i++){
//     if (i == 5){
//         continue;
//     }
//     alert(i)
// }

// Sentencia While
// let repetir = true;
// while(repetir){
//     console.log("Al infinito y ... ¡Mas allá!")
// }

// While con ESC
// let entrada = prompt("Ingresar un dato: ")
// while(entrada != "ESC"){
//     alert("El usuario ingresó "+entrada)
//     entrada = prompt("Ingresar otro dato: ")
// }

// Do While
// let repetir = false;
// do{
//     console.log("Solo una vez!")
// }while(repetir)

// ejemplo Do While
// let numero = 0
// do{
//     numero = prompt("Ingresar un numero")
//     console.log(numero)
// }while(parseInt(numero))

// Ejemplo while y switch
let entrada = prompt("Ingresar un nombre: ")
while (entrada != "esc"){
    switch (entrada){
        case "Lessi":
            alert("Hola Lessi")
            break
        case "Iña":
            alert("Hola Iña")
            break
        case "Siglia":
            alert("Hola Memeeee")
            break
        default:
            alert("Nombre no registrado")
            break
    }
    entrada = prompt("Ingresa un nombre: ")
}