//2 
function operator() {
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let operator = document.getElementById('operator').value;
    let res;

    switch (operator) {
        case '+':
            res = firstNumber + secondNumber;
            console.log(res);
            break;
        case '-':
            res = firstNumber - secondNumber;
            break;
        case '*':
            res = firstNumber * secondNumber;
            break;
        case '/':
            res = firstNumber / secondNumber;
            break;
        case '%':
            res = firstNumber % secondNumber;
            console.log(res);
            break;
        default:
            console.log("Error");

    }
    let p = document.createElement('p')
    p.innerHTML = ` ${firstNumber} ${operator} ${secondNumber} = ${res}`
    container.append(p)

}