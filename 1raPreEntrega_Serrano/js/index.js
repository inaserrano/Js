function credito(codigo){
    switch (codigo){
        case "1":
            console.log('💸Selecciono el credito de: $30000💸')
            break;
        case "2":
            console.log('💸Selecciono el credito de: $50000💸')
            break;
        case "3":
            console.log('💸Selecciono el credito de: $70000💸')
            break;
        case "4":
            console.log('💸Selecciono el credito de: $100000💸')
            break;
        default:
            console.warn('Seleccion incorrecta.')
            break;
    }
}


function mostrar_cuotas(){
    console.log('Todas nuestros creditos tienen cuotas sin interes!')
    for(let i=1;i<=6;i++){
        console.log(i+'cuota(s) sin interes')
    }
}
function consultar_credito(){
    let rta = confirm('¿Desea concretar un credito?')
    if (rta === true){
        let codigo = prompt("Ingrese el codigo numerico para el credito seleccionado")
        credito(codigo)
        mostrar_cuotas()
    } else {
        console.warn('Muchas gracias por visitar nuestra pagina!. Te esperamos!')
    }
}

consultar_credito()