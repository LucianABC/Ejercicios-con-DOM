const toggleChecked = () => {
    if (document.querySelector("#Check").checked) {
        document.querySelector("#Check").checked = false;
    } else {
        document.querySelector("#Check").checked = true;
    }
};

const changeName= ()=> {
    let elemento = document.querySelector("#miInput");
    elemento.name="miExInput";
};

const crearLista = () => {
    let elemento =  document.querySelector("#miDiv");
    elemento.innerHTML = `<ul> 
                            <li></li> 
                            <li></li> 
                            <li></li> 
                            <li></li> 
                            <li></li> 
                         </ul>`;
};

const llenarLista = () => {
    let lista = document.getElementsByTagName("li");
    let valor = 0;
    for (let li of lista){
        valor++;
        li.innerHTML =  valor;
    }
};

const changeTitle = () => {
    let nuevoTitulo =  document.getElementById("nuevoTitulo").value;
    document.getElementById("titulo1").innerHTML=nuevoTitulo;
};
////////////////////////////////////////////////////////////

// 001s
/**
 * Escribir una funcion que nos permita pasarle un elemento 
 * y un color, y  le cambie el color de fondo al elemento.
 */


const changeBackgroundColor = (elemento, color) => {
    let coso = document.querySelector(elemento);
    coso.style.backgroundColor=color;
 };

 //002 
/**
  * Modificar la funcion previa para que, si no se recibe
  * un color por parametro, se busque un color de forma
  * azarosamente.
  */

const changeBackgroundColor2 = (elemento, color) => {
    let coso = document.querySelector(elemento);
    let newColor = color;
    if (color == undefined) {
        newColor = randomColor();
    }
    coso.style.backgroundColor=newColor;
 };
  
 const randomColor = () => {
    let r =Math.floor(Math.random()* (255 - 0)) + 0;
    let g =Math.floor(Math.random()* (255 - 0)) + 0;
    let b =Math.floor(Math.random()* (255 - 0)) + 0;
    
    return `rgb(${r},${g},${b})`

};

  // 003
/**
   * Crear una lista con varios elementos.
   * Crear una funcion que asigne la clase
   * "active" a uno de estos elementos seleccionados.
   * Ademas al mismo tiempo tiene que eliminar
   * la clase "active" del resto de los elementos.
   * Asignarle algun estilo para diferenciar la clase
   * "active" de cuando no se encuentra la misma.
   */



const addActive = () => {
    let elementos = document.getElementsByClassName("list-item");
    for (let elemento of elementos ){
        elemento.classList.remove("active");
    }
    let activar = elementos[4];
    activar.classList.add("active");
}   




// 004

/**
 * Crear una funcion para aumentar tamaño 
 * de un titulo y otra para reducirlo.
 */

 // 005
 /**
  * Crear una lista que contenga imagenes, de las 
  * cuales se va a mostrar solo una.
  * Crear una funcion que me permita ir cambiando
  * de imagen cada vez que la ejecuto, segun el orden
  * en que estan declaradas.
  */
