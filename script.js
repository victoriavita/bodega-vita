//*ingresar edad mayor o igual a 18

let edad = (parseInt (prompt ("Ingrese su edad")));
edad=Number(edad);

if (edad>=18){
    alert("Bienvenido a Bodega Vita. Puedes ingresar al sitio wed");
} else {
    alert("No puedes ingresar al sitio wed");
}

//* simulador de comprar producto

let deseaComprar = prompt("Hola ¿desea comprar un producto? ingrese si o no")
while (deseaComprar != "si" && deseaComprar != "no") {
    alert("Por favor ingrese si o no")
    deseaComprar = prompt("hola ¿desea comprar un producto? ingrese si o no")
}
if ( deseaComprar == "si") {
    alert("Seleccione sus productos: vino blanco $ 1900 , vino tinto $ 2400 , vino rosado $ 1800")
    function agregarProducto( productoUno ){
    console.log ("Su carrito de compras tiene " + productoUno)
    }
    let productoUno = prompt ("Ingrese su producto ");
    agregarProducto (productoUno);

    alert ("Su carrito de compras tiene " + (productoUno));

    let deseaComprar = prompt("¿Desea agregar otro producto? Ingrese si o no")
    while (deseaComprar != "si" && deseaComprar != "no"){
        alert("Por favor ingrese si o no")
        deseaComprar =("¿Desea agregar otro producto?")
    } if(deseaComprar == "si"){
        alert("Seleccione sus productos: vino blanco $ 1900 , vino tinto $ 2400 , vino rosado $ 1800")
        function agregarProducto( productoDos){
        console.log("Su carrito de compras tiene " + productoDos)
        }
        let productoDos = prompt ("Ingrese su producto");
        agregarProducto ( productoDos);

        alert ("Su carrito de compras tiene " + ( productoUno ) + ( productoDos));
    } else if (deseaComprar == "no"){
        alert ("Su compra final es de " + (productoUno));
    }
} 
else if (deseaComprar == "no") {
    alert("Gracias por visitarnos")
}


