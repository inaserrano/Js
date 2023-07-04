const numeros =[1,2,3,4,5]
let resultado = numeros[1] + numeros[2]
console.log('El array numeros contiene: ',numeros)
console.log('Voy a sumar:',numeros[1], '+',numeros[2])
console.log('EL resultado es: ',resultado)
console.log('-----------------')

a = 0
for (let i = 0;i<5;i++) {
    a = a + 1 
    console.log('numero',numeros[i])
}

console.log('La cantidad de valores que hay en el array es:',numeros.length)
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}
console.log('-----------------')
console.log('Agregamos los numeros 6,7 y 8 al final de array')
numeros.push(6,7,8)
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}

console.log('-----------------')
console.log('Agregamos los numeros -2,-1 y 0 al comienzo de array')
numeros.unshift(-2,-1,0)
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}

console.log('-----------------')
console.log('Eliminamos el primer elemento del array')
numeros.shift()
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}

console.log('-----------------')
console.log('Eliminamos el ultimo elemento del array')
numeros.pop()
for(let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}

console.log('-----------------')
console.log('Generar un nuevo string separados por el valor que pasamos por parametro')
console.log(numeros.join(" [+] "))

console.log('-----------------')
console.log('Convinar strings letras y numeros')
const letras = ['a','b','c']
const caracteres = numeros.concat(letras)
console.log(caracteres)

console.log('-----------------')
console.log('Genera un nuevo string con los parametros ingresados')
const positivos = numeros.slice(2,9)
console.log(positivos)

console.log('-----------------')
console.log('Obtenemos el indice de el elemento ingresado (numero: 2)')
console.log('El numero 2 esta en la posicion: ',numeros.indexOf(2))

console.log('-----------------')
console.log('Mostrar el array en reversa')
console.log(numeros.reverse())