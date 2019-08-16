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
let operador
let valor_um
let valor_dois
let apaga_um
let contador = 0
let result = 0
let tc_ops
let tc_igual

function digitado() {
    digitou = event.key
    if (digitou == 'Backspace') {
        tela.innerText = tela.innerText.slice(0, -1)
    }

    else if (digitou == 'Escape') {
        zerar()
    }
    else if (digitou >= 0 || digitou <= 9) {
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
    tc_operador(event)
}

function tc_operador(event) {
    tc_ops = event.key
    if (tc_ops == '-' || tc_ops == '*' || tc_ops == '+' || tc_ops == '/') {
        event.key = tc_ops
        num_temp = Number(tela.innerText)
        tela.innerText = ''
        if (result == 0) {
            result = num_temp
        }
        prev_tc_ops = tc_ops;
    }

    if (tc_ops == '=' || tc_ops == 'Enter') {
        valor_dois = Number(tela.innerText)
        if (prev_tc_ops == '+') {
            result = result + valor_dois
        }

        if (prev_tc_ops == '-') {
            result = result - valor_dois
        }

        if (prev_tc_ops == '*') {
            result = result * valor_dois
        }

        if (prev_tc_ops == '/') {
            result = result / valor_dois
        }

        tela.innerText = result
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
    result = 0
    num_temp = 0
}

function ponto() {
    // if (contador > 1) {
        
    // }
    if (tela.innerText == '.') {
        tela.innerText = '0.'
    }
    contador++

}


