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
document.addEventListener('keydown', digitado)

let digitou


function digitado() {
    digitou = event.keyCode
    if (digitou == 49) {
        tela.innerText += 1
    }
    else if (digitou == 50) {
        tela.innerText += 2
    }
    else if (digitou == 51) {
        tela.innerText += 3
    }
    else if (digitou == 52) {
        tela.innerText += 4
    }
    else if (digitou == 53) {
        tela.innerText += 5
    }
    else if (digitou == 54) {
        tela.innerText += 6
    }
    else if (digitou == 55) {
        tela.innerText += 7
    }
    else if (digitou == 56) {
        tela.innerText += 8
    }
    else if (digitou == 57) {
        tela.innerText += 9
    }
    else if (digitou == 48) {
        tela.innerText += 0
    }
    else if (digitou == 48) {
        tela.innerText += 0
    } else if (digitou == 8) {
        um_por_vez()
    }
    else if (digitou == 27) {
        zerar()
    }
    else if (digitou == 187){
        igual()
    }
}

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
    digitou = event.keyCode
    let valor_dois = Number(tela.innerText)
    // console.log(`Tem valor dois = ${valor_dois}`)
    tela.innerText = ''
    console.log(digitou)
    if (operador == '/') {
        result = valor_um / valor_dois
        console.log(digitou)
        if (valor_dois == 0) {
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
    // console.log(`Tem valor1 = ${valor_um}`)
}

function um_por_vez() {
    tela.innerText = tela.innerText.slice(0, -1)
    // preciso zerar o contador quando o ponto for apagado
}

function zerar() {
    contador = 0
    valor_um = 0
    valor_dois = 0
    tela.innerText = ''
}

function ponto() {
    contador++
    if (contador > 1) {
        tela.innerText = 'Error'
    }
    if (tela.innerText == '.') {
        tela.innerText = '0.'
    }
}



