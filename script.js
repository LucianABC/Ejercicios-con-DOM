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



const addActive = (indice) => {
    let elementos = document.getElementsByClassName("list-item");
    for (let elemento of elementos ){
        elemento.classList.remove("active");
    }
    let activar = elementos[indice];
    activar.classList.add("active");
}   

// 004

/**
 * Crear una funcion para aumentar tamaño 
 * de un titulo y otra para reducirlo.
 */

    const increaseTitle = (titulo) => { 
        let title = document.querySelector(titulo);
        let fontSize = getComputedStyle(title).getPropertyValue("font-size");
        fontSize= parseInt(fontSize);
        title.style.fontSize = fontSize + 10 + "px";
    }

    const decreaseTitle = (titulo) => { 
        let title = document.querySelector(titulo);
        let fontSize = getComputedStyle(title).getPropertyValue("font-size");
        fontSize= parseInt(fontSize);
        title.style.fontSize = fontSize - 10 + "px";
    }

 // 005
 /**
  * Crear una lista que contenga imagenes, de las 
  * cuales se va a mostrar solo una.
  * Crear una funcion que me permita ir cambiando
  * de imagen cada vez que la ejecuto, segun el orden
  * en que estan declaradas.
  */
const hideImg =() => {
    let imagenes = document.getElementsByClassName("list2-item");
    let indice;
    for (let i = 0; i<imagenes.length; i++){
        if (imagenes[i].classList.contains("display")) {
            indice = i;
        }
    }
    imagenes[indice].classList.remove("display");
     
    if (indice == (imagenes.length-1)) { 
        indice = -1;
    }  
    
        imagenes[indice+1].classList.add("display");
    
} 
//////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////
// 001 
/**
 * Crear un TODO list, que tenga
 * 1. un input para agregar nuevos TODO
 * 2. Este input debe tener un button para poder
 *    agregar el TODO desde el input
 * 3. un button por cada TODO de la lista
 *  para borrar el mismo.
 * 4. Un checkbox, antes del texto de cada TODO,
 *  que me permita tachar el elemento de la lista
 *  como resuelto. 
 */

//1.
    let toDoList = document.querySelector("#toDo-list");
    const addButton = document.querySelector("#addButton");
    
    const addTask = event => {
        let li = document.createElement("li");
        li.className="toDo-el";
        
        let checkbox = document.createElement("input");
        checkbox.type="checkbox";
        checkbox.id="done";
        checkbox.addEventListener("change", ()=>{
            if (checkbox.checked){
                p.style.textDecoration="line-through";
            } else {
                p.style.textDecoration="none";
            }
        });
        li.appendChild(checkbox)
        
        let p = document.createElement("p");
        let texto = document.querySelector("#newToDo");
        p.innerHTML=texto.value;
        li.appendChild(p);

        let deleteButton = document.createElement("button");
        deleteButton.type="submit";
        deleteButton.id="deleteItem";
        deleteButton.innerHTML="Eliminar";
        deleteButton.addEventListener("click", ()=>{
            let li = deleteButton.parentElement;
            li.parentNode.removeChild(li);        
        });
        li.appendChild(deleteButton);

        toDoList.appendChild(li);
    }

    addButton.onclick=addTask; //si hago click funciona, ver como hacer para que cuando pongo enter tambien
 
 
 
//4.
 const checkbox = document.querySelector("#done");
 const taskDone= event => {
     const toDoItem= checkbox.parentElement;
     "toDoItem > li"


 }


 // 002
/**
 * Tomar el input del ejercicio anterior y hacer que 
 * cambie sus bordes de color y de ancho cuando 
 * hacemos foco(focus, hacemos click en el recuadro) en el, 
 * y que esos mismos bordes y color vuelvan al 
 * estado anterior cuando sacamos el foco (blur).
 */

