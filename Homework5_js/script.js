
//Задание про треугльник не поняла, наверное, оно неправильно отображается в Skilldesk

//Задание 2

for (let i = 1; i <= 100; i++) {
   
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizzbuzz")
    }
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

//Задание 3

const nums = [1, 2, 3 , 5 ,6 , 7 , 10 , 14 , 20, 28];
const reverseNums = [];

for (let i = nums.length - 1; i > -1; i--) {
    reverseNums.push(nums[i]);
}

console.log(reverseNums);

