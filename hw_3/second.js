const func = (num1, num2) => {
    if (num1 > num2){
        console.log('Второt число меньше');
    }else if(num2 > num1){
        console.log('Втрое число больше')
    }else{
        console.log('Числа равны')
    }
}

let number1 = prompt('Введите первое число:')
let num1 = Number (number1);

let number2 = prompt("Введите второе число: ")
let num2 = Number (number2)

func(num1, num2);