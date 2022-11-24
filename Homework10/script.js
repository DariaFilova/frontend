const arr = [3, 3, 3, -1, 1, 5, -7, 19, -8, 1, 2, 5, 8];



// Задание 1 Дан массив с числами. Найдите сумму этих чисел, используя forEach.

let sum = 0;

arr.forEach(el => sum += el);

console.log(sum);



// Задание 2 Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.

const greaterThanZero = arr.every((item) => {return item > 0});

console.log(greaterThanZero);




//Задание 3. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. 

const fruits = ['apple', 'tangerine', 'kiwi', 'strawberry', 'pear', 'raspberry'];

let longerThanFive = fruits.filter(item => item.length > 5 );

console.log(longerThanFive);




//Задание 4. Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.

let negativeNumbers = arr.filter(item => item < 0).length;

console.log(negativeNumbers);




//Задание 5. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

function calculateHowManyDigitsFromStartSumMoreThan10 (arr) {

    let sum = 0;
    let newArr = [];
    for(let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
        newArr.push(arr[i]);

        if(sum > 10) {
            
            break;
        }
    }
    return newArr.length;
}

console.log(calculateHowManyDigitsFromStartSumMoreThan10(arr));




// Задание 6. Дан массив с числами. Узнайте сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти.\

function calculateHowManyDigitsFromEndSumMoreThan10 (arr) {
    let sum = 0;
    let newArr = [];
    arr = arr.reverse()
    for(let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
        newArr.push(arr[i]);

        if(sum > 10) {
            
            break;
        }
    }

    return newArr.length;
}

console.log(calculateHowManyDigitsFromEndSumMoreThan10(arr));




// Задание 7. Дан массив с числами. Оставьте в нем только положительные числа. Затем извлеките квадратный корень и этих чисел

const result = arr.filter(item => item > 0).map(item => Math.sqrt(item).toFixed(2));

console.log(result);




