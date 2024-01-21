let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

let parrafo = document.querySelector("p");
parrafo.innerHTML = "Ingresa un Número del 1 al "+numeroMaximo;

function asignarTextoElemento(etiqueta, texto){
let elementoHtml = document.querySelector(etiqueta);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento("p",`Felicidades, Acertaste en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else if(numeroUsuario > numeroSecreto){
        asignarTextoElemento("p","El Número Secreto es Menor.");
    }else{
        asignarTextoElemento("p","El Número Secreto es Mayor")
    }
    intentos++;
    limpiarCaja();
    return;
}
function limpiarCaja(){
   document.getElementById("valorUsuario").value = "";
}
function generarNumeroSecreto(){
    let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroSecreto);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Ya se Sortearon Todos los Números Posibles");
    }
    if(listaNumerosSorteados.includes(numeroSecreto)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroSecreto);
        return numeroSecreto;
    }
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego Del Número Secreto");
    asignarTextoElemento("p","Ingresa un Número del 1 al "+numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el boton "nuevo juego"
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();