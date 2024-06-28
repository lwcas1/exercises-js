function calcularMedia () {
    let n = String(window.prompt('Qual o nome do aluno? '));

    let n1 = Number(window.prompt('Qual a primeira nota do aluno? '));
    let n2 = Number(window.prompt('Qual a segunda nota do aluno? '));
    let media = (n1 + n2) / 2;

    let result = document.querySelector('#resultado')
    result.innerHTML = `<h3>A média final de ${n} foi: ${media}</h3>` 
}