let lista = Array.from(document.querySelectorAll('.numbers'))
lista.map(numero => numero.addEventListener('click', mostrar))
let tela = document.querySelector('.memory')
function mostrar() {
    tela.innerText += event.target.innerText
}

let ops = Array.from(document.querySelectorAll('.operators'))
ops.map(operador => operador.addEventListener('click', operacao))

let reset = document.querySelector('.clear').addEventListener('click', zerar)
let equal = document.querySelector('.equal').addEventListener('click', igual)
let clear = document.querySelector('.one-one').addEventListener('click', um_por_vez)
let dot = document.querySelector('.dot').addEventListener('click', ponto)

let operador
let valor_um
let apaga_um
let contador = 0 


function operacao() {
    valor_um = Number(tela.innerHTML)
    console.log(`Tenho valor1 ${valor_um}`)
    tela.innerText = ''
    operador = event.target.innerText
    contador = 0
}

function igual() {
    let valor_dois = Number(tela.innerText)
    console.log(`Tem valor dois = ${valor_dois}`)
    tela.innerText = ''

    if (operador == '/') {
        result = valor_um / valor_dois
        if(valor_dois == 0){
            result = 'Error'
        }
    }
    else if (operador == '*') {
        result = valor_um * valor_dois
    }
    else if (operador == '-') {
        result = valor_um - valor_dois
    }
    else if (operador == '+') {
        result = valor_um + valor_dois    
    }

    valor_um = result
    tela.innerText = result
    console.log(`Tem valor1 = ${valor_um}`)
}

function um_por_vez(){
    tela.innerText = tela.innerText.slice(0, -1)
    // preciso zerar o contador quando o ponto for apagado
}

function zerar(){
    contador = 0
    valor_um = 0
    valor_dois = 0
    tela.innerText = ''
}

function ponto(){
    contador++
    if (contador > 1){
        tela.innerText = 'Error'
    }
    if(tela.innerText == '.'){
        tela.innerText = '0.'
    }
}



