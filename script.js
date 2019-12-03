toggleChecked = () => {
    if (document.querySelector("#Check").checked) {
        document.querySelector("#Check").checked = false;
    } else {
        document.querySelector("#Check").checked = true;
    }
};

cambiarNombre= ()=> {
    let elemento = document.querySelector("#miInput");
    elemento.name="miExInput";
};


crearLista = () => {
    let elemento =  document.querySelector("#miDiv");
    elemento.innerHTML = "<ul> <li></li> <li></li> <li></li> <li></li> <li></li> </ul>";
};

llenarLista = () => {
    let lista = document.getElementsByTagName("li");
    let valor = 0;
    for (let li of lista){
        valor++;
        li.innerHTML =  valor;
    }
};

changeTitle = () => {
    let nuevoTitulo =  document.getElementById("nuevoTitulo").value;
    document.getElementById("titulo1").innerHTML=nuevoTitulo;
};