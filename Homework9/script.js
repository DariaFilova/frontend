/* Задание 1. Перепишите if..else с использованием нескольких операторов '?'.
Для читаемости рекомендуется разбить код на несколько строк. */


let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}

login == 'Сотрудник' ? message = 'Привет' :
login == 'Директор' ? message = 'Здравствуйте' :
login == '' ? message = 'Нет логина' :
message = '';





/* Задание 2. Попросите у пользователя написать номер месяца - число от 1 до 12 и в зависимости от ответа, выведите какое время года. */

const month = +prompt('Enter a number of a month');

if (month < 3 || month == 12) {
    alert('It is winter!')
}
else if (month < 6) {
    alert('It is spring!')
}
else if (month < 9) {
    alert('It is summer!')
}
else if (month < 12) {3
    alert('It is autumn12!')
}
else {
    alert('Such month does not exist')
}



//Задание 3.

function isPrime(n) {
    if (n === 2) {
        return true;
    }
    else {
        for(let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

const showPrimeNumbers = function(n) {
    let primeNumbers = [];
    for (let i = 2; i < n; i++) {
        if(isPrime(i) === true) {
            primeNumbers.push(i);
        }
    }
    console.log(primeNumbers);
    return primeNumbers;

}
console.log(showPrimeNumbers(10));





//Задание 4

function reverseNumber (number) {
    let num = number.toString();
    let reversedNumber = num.split('').reverse().join('');

    return +reversedNumber;
}

console.log(reverseNumber(258961));