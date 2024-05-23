
class item {
    constructor (id, nombre , cantidad, peso ){
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.peso = peso;
}
}


const botones = document.getElementById("botones");
const container = document.getElementById("inventario");

let inventario;

if(localStorage.getItem("inventario")){
    inventario = JSON.parse(localStorage.getItem("inventario"));
}else{
    inventario = [];
};


function agregarItem(){
    const newItem = new item
}


const boton1 = document.createElement("button");

boton1.innerText = "Agregar item nuevo";

boton1.onclick = () => agregarItem();

botones.appendChild(boton1);