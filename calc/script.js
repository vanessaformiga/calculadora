function insert(numero) {
    let resultado = document.getElementById('resultado').innerHTML
    texto = document.getElementById('resultado').innerHTML += numero

}

function limpar() {
    let resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

}

function apagar() {
    const resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)

}

function igual() {

    const resultado = document.getElementById('resultado').innerHTML

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        document.getElementById('resultado').innerHTML = "A operação não pode ser realizada"
    }


}