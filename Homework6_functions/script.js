//Задание 1

function getArrayOfNumbers(num1, num2) {
    const start = Math.min(num1,num2); 
    const end = Math.max(num1, num2);
    const numbers = [];

    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers;
}

/* console.log(getNumbers(4, 7)); */


//Задание 2
function getMinMaxAvgValues(array) {
    let sum = 0;

    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);

    return {
        min: Math.min(...array),
        avg: Math.floor(sum / array.length),
        max: Math.max(...array),
    }

    
}

//console.log(turnToObject([3,5,6,28,7,4,2]));

//Задание 3

function isPalindrom(str) {
    const reversedStr = str.split('').reverse().join('').toLowerCase();
    return str.toLowerCase() == reversedStr ? true : false;
}

/* console.log(isPalindrom("КаЗак")); */




