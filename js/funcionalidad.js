

//Funcion para inicializar variables y limpiar articulos y mostrar cajas
function temaseleccionado(){
    //Limpiar textbox
    //document.getElementById("titulos").value=null;
    //document.getElementById("subtitulos").value=null;
    //document.getElementById("resultado").innerHTML="¡Resultados!";

    //getElementsByTagName convierte en arreglo porque guarda mas de un elemento
    capas = document.getElementsByTagName("article");
    //Oocultar varios elementos
    for(i=0; i < capas.length; i++){
        capas[i].style.display="none";
    }
    //Almacenar el dato de la opcion del usuario
    var articulo=document.getElementById("temas").value;
    document.getElementById(articulo).style.display="block";
}
var fotografiasI=function(nombreFoto){
    document.getElementById("independenceday").src="imagenes/"+nombreFoto+".JPG";
    document.getElementById("resultado").src="imagenes/"+nombreFoto+".JPG";
}
var fotografiasP=function(nombreFoto){
    document.getElementById("programerday").src="imagenes/"+nombreFoto+".JPG";
    document.getElementById("resultado").src="imagenes/"+nombreFoto+".JPG";
}
var fotografiasN=function(nombreFoto){
    document.getElementById("christmasday").src="imagenes/"+nombreFoto+".JPG";
    document.getElementById("resultado").src="imagenes/"+nombreFoto+".JPG";
}

let mostrarI=function(){
    let titleI = document.getElementById('titulosI').value;
    let subI = document.getElementById('subtitulosI').value;
    let nomI = document.getElementById('nombreI').value;
    let dedicarI = document.getElementById('dedicaI').value;
    document.getElementById('titulotar').innerHTML=titleI;
    document.getElementById('subtar').innerHTML=subI;
    document.getElementById('nomrem').innerHTML=nomI;
    document.getElementById('mensaje').innerHTML=dedicarI;
    document.getElementById('result').style.fontFamily="fantasy";
}
let mostrarP=function(){
    let titleP = document.getElementById('titulosP').value;
    let subP = document.getElementById('subtitulosP').value;
    let nomP = document.getElementById('nombreP').value;
    let dedicarP = document.getElementById('dedicaP').value;
    document.getElementById('titulotar').innerHTML=titleP;
    document.getElementById('subtar').innerHTML=subP;
    document.getElementById('nomrem').innerHTML=nomP;
    document.getElementById('mensaje').innerHTML=dedicarP;
    document.getElementById('result').style.fontFamily="brush-script-MT";
}
let mostrarN=function(){
    let titleN = document.getElementById('titulosN').value;
    let subN = document.getElementById('subtitulosN').value;
    let nomN = document.getElementById('nombreN').value;
    let dedicarN = document.getElementById('dedicaN').value;
    document.getElementById('titulotar').innerHTML=titleN;
    document.getElementById('subtar').innerHTML=subN;
    document.getElementById('nomrem').innerHTML=nomN;
    document.getElementById('mensaje').innerHTML=dedicarN;
    document.getElementById('result').style.fontFamily="cursive";
}


//Linea para detectar el evento del select
document.getElementById('temas').addEventListener("change",temaseleccionado);
//document.getElementById('calcular').addEventListener("click",function(){promedio()});