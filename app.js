var entrada = document.querySelector('#entrada');
var botonEncriptar = document.querySelector('#encriptar');
var botonDesencriptar = document.querySelector('#desencriptar');
var barra = document.querySelector('.barra-lateral');
var botonLimpiar = document.querySelector('#limpiar');
var salida
var conta = 0;

function toggleDarkLight() {
    var element = document.body;
    var element1 = document.querySelector('.foot');
    element.classList.toggle("dark-mode");
    conta++;
    if(conta === 2){
        conta = 0;
    } else{
        conta = 1;
    }
    conta === 1 ? element1.classList.add("dark-mode") : element1.classList.remove("dark-mode");   
}

function laSalida() {
    const elem = document.querySelector('#salida');
    const hijo = document.createTextNode('');

    elem.innerHTML = ''
    elem.appendChild(hijo);
    salida = hijo;
}

laSalida();

function codificador(item){
    switch(item) {
        case 'a': return 'ai'
        case 'e': return 'enter'
        case 'i': return 'imes'
        case 'o': return 'ober'
        case 'u': return 'ufat'
        default: return item
    }
}

function iteraCode(txt){
    txt = entrada.value;
    var t = '';
    for(var i = 0; i < txt.length; i++) {
        t += codificador(txt[i]);
    }
    return t;
}

botonEncriptar.addEventListener('click', function() {
    var txt = entrada.value;
    if(txt.length === 0) {
        salida.nodeValue = ''
        ocultarRes();
    } else {
        salida.nodeValue = iteraCode(txt);
        mostrarRes();
    }
});

function mostrarRes(){
    barra.classList.add('con-salida');
}

function ocultarRes(){
    barra.classList.remove('con-salida');
}
