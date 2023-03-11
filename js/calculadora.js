function calc(num1, num2, sinal){
    let result;
    
    switch(sinal){
        case '/':
            result = num1/num2;
            break;
        case '*':
            result = num1*num2;
            break;
        case '+':
            result = Number(num1) + Number(num2);
            break;
    }
    return result;
}

function send(sin){
    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;

    let result = calc(num1, num2, sin);

    if (typeof result !== 'undefined'){
        document.getElementById("label").innerHTML = num1 + " " + sin + " " + num2 + " = " + result;
        document.getElementById("resultado").value = result;
    }
}

function populate(valor, sinal){
    if(sinal != '*' && sinal != '+' && sinal != '/'){
        valor1 = document.getElementById("valor1").value;

        valor1Final = document.getElementById("valor1").value = valor1 + valor;

        document.getElementById("label").innerHTML = valor1Final;
    }else{
        valor2 = document.getElementById("valor2").value;
        
        valor2Final = document.getElementById("valor2").value = valor2 + valor;
        valor1Final = document.getElementById("valor1").value;

        document.getElementById("label").innerHTML = valor1Final + " " + sinal + " " + valor2Final;
    }
}

function populateOperands(sinal){
    valor1 = document.getElementById("valor1").value;

    document.getElementById("label").innerHTML = valor1 + " " + sinal;
}

function clearAll(){
    document.getElementById("valor1").value = '';
    document.getElementById("valor2").value = '';
    document.getElementById("resultado").value = '';
    document.getElementById("label").innerHTML = '';
}

function clearLast(){
    value1 = document.getElementById("valor1").value;
    value2 = document.getElementById("valor2").value;

    if(value2 == ''){
        document.getElementById("valor1").value = '';
        document.getElementById("label").innerHTML = '';
    }else{
        document.getElementById("valor2").value = '';
        document.getElementById("label").innerHTML = value1;
    }
    document.getElementById("resultado").value = '';
}