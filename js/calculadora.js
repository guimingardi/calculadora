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

let operador
let valor_um
let apaga_um

function operacao() {
    valor_um = Number(tela.innerHTML)
    console.log(`Tenho valor1 ${valor_um}`)
    tela.innerText = ''
    operador = event.target.innerText
}

function igual() {
    let valor_dois = Number(tela.innerText)
    console.log(`Tem valor dois = ${valor_dois}`)
    tela.innerText = ''

    if (operador == '/') {
        result = valor_um / valor_dois
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
    // debugger
    tela.innerText = tela.innerText.slice(0, -1)
    console.log(`Esse é o botão que limpa um de cada vez ${apaga_um}`)

}

function zerar(){
    valor_um = 0
    valor_dois = 0
    tela.innerText = ''
}



