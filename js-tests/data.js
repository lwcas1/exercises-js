function calculaData(diasTotais) {
    // Definir números exatos para o ano e mês
    const diasAno = 365;
    const diasMeses = 30;

    // Calcular os anos
    let calculaAno = diasTotais / diasAno;
    let ano = ~~calculaAno;

    // Calcular os meses
    let diasRestantes = diasTotais % diasAno;
    let calculaMeses = diasRestantes / diasMeses;
    let meses = ~~calculaMeses;

    // Calcular os dias
    let dias = diasRestantes % diasMeses;

    console.log(`${ano} Ano(s), ${meses} Meses e ${dias} Dia(s)`);
}

calculaData(400);