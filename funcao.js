function somar (num1,num2){
     alert(num1 + num2);
}

function subtracao (num1,num2){
    alert(num1 - num2);
}

function multiplicacao (num1,num2){
    alert(num1 * num2);
}

function divisao (num1,num2){
    alert(num1 / num2);
}

alert("Aplicativo  para somar dois números");

let primeiroNumero = Number (prompt ("Digite o primeiro númerom, por favor"));

let segundoNumero = Number (prompt ("Digite o segundo número, por favor"));

somar(primeiroNumero, segundoNumero);

subtracao(primeiroNumero, segundoNumero);

multiplicacao(primeiroNumero, segundoNumero);

divisao(primeiroNumero, segundoNumero);


