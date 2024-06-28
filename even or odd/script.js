function question () {
    let num = Number(window.prompt('Digite um número: '))

    let tipo
    if (num % 2 == 0){
        tipo = '<strong>Par</strong>'
    }
    else {
        tipo = '<strong>Ímpar<strong/>'
    }

    let res = document.querySelector('div.result')
    res.innerHTML = `<h2>O número ${num} que foi digitado é ${tipo}!</h2>`
}