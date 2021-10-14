function insert(numero) {
    let texto = document.getElementById('resultado').innerHTML
    texto = document.getElementById('resultado').innerHTML += numero
}


function limpar() {
    let valor = ''
    const texto = document.getElementById('resultado')
    texto.innerHTML = ''
}

function apagar() {
    const texto = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = texto.substring(0, texto.length - 1)
}

function igual() {

    const texto = document.getElementById('resultado').innerHTML

    if (texto) {
        document.getElementById('resultado').innerHTML = eval(texto)
    } else {
        document.getElementById('resultado').innerHTML = "A operação não pode ser realizada"
    }

}