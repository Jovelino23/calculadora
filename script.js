const resultado=document.querySelector( '.result' )
const confirmar= document.querySelector('#igual')

function clean(){
    resultado.innerHTML=' '
}

function insert(valor){
    resultado.innerHTML +=valor
}
function apagar(){
    if( resultado.textContent ){
        let result= document.getElementById('resultado').innerHTML
        resultado.innerHTML=result.substring(0, result.length-1)
    }
}
function conclui(){
    if(resultado.textContent != 'erro'){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    }
}

