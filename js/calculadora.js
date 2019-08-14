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

document.addEventListener('keydown', resultado)

let digitou
let operador
let valor_um
let valor_dois
let apaga_um
let contador = 0
let tc_ops

function digitado() {
    digitou = event.key
    console.log(digitou)

    if (digitou == 'Backspace') {
        tela.innerText = tela.innerText.slice(0, -1)
    } else if (digitou >= 0 || digitou <= 9) {
        tela.innerText += digitou
    }
    else if (digitou == '.') {
        if (contador > 1) {
            return
        }
        tela.innerText += digitou
        ponto()
        contador++
    }
}
function resultado() {
    tc_ops = event.key
    if (tc_ops == '+') {
        valor_um = Number(tela.innerHTML)
        tela.innerText = ''
        result = valor_um + valor_dois
    }
    else if (digitou == '=') {
        valor_dois = Number(tela.innerText)
        valor_um = result
        result = tela.innerText
        console.log(result)
    }
}

function operacao() {
    valor_um = Number(tela.innerHTML)
    tela.innerText = ''
    operador = event.target.innerText
    contador = 0
}

function igual() {
    valor_dois = Number(tela.innerText)
    tela.innerText = ''
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
}

function um_por_vez() {
    tela.innerText = tela.innerText.slice(0, -1)
}

function zerar() {
    contador = 0
    valor_um = 0
    valor_dois = 0
    tela.innerText = ''
}

function ponto() {
    // if (contador > 1) {

    // }
    contador++

    if (tela.innerText == '.') {
        tela.innerText = '0.'
    }
}

    // console.log(event.keyCode)
    // if (digitou == 49) {
    //     tela.innerText += 1
    // }
    // else if (digitou == 50) {
    //     tela.innerText += 2
    // }
    // else if (digitou == 51) {
    //     tela.innerText += 3
    // }
    // else if (digitou == 52) {
    //     tela.innerText += 4
    // }
    // else if (digitou == 53) {
    //     tela.innerText += 5
    // }
    // else if (digitou == 54) {
    //     tela.innerText += 6
    // }
    // else if (digitou == 55) {
    //     tela.innerText += 7
    // }
    // else if (digitou == 56) {
    //     tela.innerText += 8
    // }
    // else if (digitou == 57) {
    //     tela.innerText += 9
    // }
    // else if (digitou == 48) {
    //     tela.innerText += 0
    // }
    // else if (digitou == 48) {
    //     tela.innerText += 0
    // } else if (digitou == 8) {
    //     um_por_vez()
    // }
    // else if (digitou == 27) {
    //     zerar()
    // }
    // else if (digitou == 187){
    //     igual()
    // }

