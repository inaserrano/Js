// Actividad n°1
// Pedir un numero y sumarle un numero en cada repeticion
// Pedir un numero y escribir hola la cantidad de veces ese numero
// Pedir un texto, concatenar en cada repeticion hasta que se ingrese "esc"

let num = parseInt(prompt("Ingrese un numero: "))
for (let i=1;i<=10;i++){
    let resultado = num + i
    alert(resultado)
}

let numH = parseInt(prompt("Ingrese un numero: ")) 
for (let i=1;i<=numH;i++){
    alert("Hola! "+ i)
}

let texto = "";
while (true){
    let entrada = prompt("Ingrese un texto. Ingrese 'esc' para finalizar")
    if (entrada == "esc"){
        break
    }
    texto += entrada
}

console.log("Texto final: \n",texto)