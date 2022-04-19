/*var n1 = prompt('Informe o primeiro numero:');
var n2 = prompt('Informe o segundo numero:');
var soma = Number(n1)+Number(n2);

if ((n1 === n2) && (soma < 10)){
    alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
}else if ((n1 === n2) && (10 <= soma < 20)){
    alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior ou igual que 10 e menor que 20`);
}if ((n1 === n2) && (soma >= 20)){
    alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior ou igual a 20`);
}else if ((n1 != n2) && (soma < 10)){
    alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
}else if ((n1 != n2) && (10 <= soma < 20)){
    alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é maior ou igual a 10 e menor que 20`);
}else{
    alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é maior ou igual a 20`);
}*/


// MODELO DO CURSO

function comparaNumeros(n1, n2){
    if (!n1 || !n2) return 'Defina dois numeros!';
    const primeiraFrase = criaPrimeiraFrase(n1,n2);
    const segundaFrase = criaSegundafrase(n1,n2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(n1,n2){
    let saoIguais = '';

    if (n1 !== n2) {
        saoIguais = 'não';
    }

    return `Os números ${n1} e ${n2} ${saoIguais} são iguais.`;
}

function criaSegundafrase(n1, n2){
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10){
        resultado10 = 'maior';
    }

    if (compara20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20`;
}

console.log(comparaNumeros(20,20));