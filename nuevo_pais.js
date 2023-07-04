const paises = ['Argentina','Uruguay','Ecuador']

function agregarPais(){
    let nuevoPais = prompt("Ingrese el nuevo pais para agregar")
    if (nuevoPais.trim() !== ''){
        paises.push(nuevoPais)
    }
}

agregarPais()
console.log('Los paises agregados son:')
for(let i=0;i<paises.length;i++){
    console.log(paises[i])
}


