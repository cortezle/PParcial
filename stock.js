var arrayProductos = [];
var ventasTotales=0;
var nVentas=0;
var PromedioV=ventasTotales/nVentas;

do {
    var opcion = prompt("Ingrese una opcion:\n 1. Añadir producto\n 2. Modificar Stock \n 3.Registrar venta y modificar Stock \n 4. Mostrar promedio de ventas realizadas \n 5. Mostrar productos con stock 0 \n 6 Salir");
    switch (opcion) {
        case "1":
            let codigo = prompt("ingrese codigo del producto");
            let descrip = prompt("ingrese descripcion del producto");
            let tipo = prompt("ingrese tipo del producto");
            let precio_compra = prompt("ingrese precio de compra del producto");
            let precio_venta = prompt("ingrese precio de venta del producto");
            let stock = prompt("ingrese stock del producto");
            addproducto(codigo, descrip, tipo, precio_compra, precio_venta, stock);
            break;
        case "2":
            let id = prompt("Ingrese el id de producto a modificar");
            modifyStock(id);
            break;
        case "3":
            let codigoVenta = prompt("ingrese codigo del producto");
            let cantidad = parseInt(prompt("ingrese la cantidad"),10);
            venta(codigoVenta,cantidad);
            break;
        case "4":
            console.log(PromedioV);
            break;
        case "5":
            Stock0();
            break;
        default:
            alert("Dato no valido");
            break;
    }
}
while (opcion != 6);
alert("Ha salido del programa");


function addproducto(codigo, descrip, tipo, precio_compra, precio_venta, stock = 0) {
    var find=false;
    arrayProductos.forEach(e => {
        if(e.codigo == codigo)
           find=true;
    });
    if(!find)
        arrayProductos.push({ codigo, descrip, tipo, precio_compra, precio_venta, stock })
    else
        return console.log('Ese producto ya esta registrado');
    
}

function modifyStock(id){
    var newStock = parseInt(prompt('Inserte el nuevo Stock'),10);
    var find=false;
    arrayProductos.forEach(e => {
        if(e.codigo == id){
           e.stock = newStock;
           find=true;
        }
    });
    if(find)
        console.log('Se modifico el stock del producto seleccionado');
    else
        console.log('No se encontro el producto');
    
}
function Stock0(){
    arrayProductos.forEach(e => {
        if(e.stock == 0){
           console.log(e.codigo);
           console.log(e.descrip);
           console.log(e.tipo);
           console.log(e.precio_compra);
           console.log(e.precio_venta);
           console.log(e.stock);
        }
    });
}
function venta(codigo,cantidad){
    var find=false;
    arrayProductos.forEach(e => {
        if(e.codigo == codigo){
            if(cantidad<=e.stock){
                e.stock -= cantidad;
                ventasTotales+= e.precio_venta*cantidad;
                nVentas++;
                find=true;
            }
        }
        else
            console.log('insufeciente stock');
    });
    if(find)
        console.log('Se ha realizado la venta');
    else
        console.log('No se encontro el producto');
    
}