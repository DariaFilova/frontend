//Задание 1. Создать квадратный div и при наведении курсора на него цвет div-а рандомно меняется.

const square = document.querySelector('.colored');

function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
  }

square.addEventListener('mouseover', function() {
    square.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
})

square.addEventListener('mouseout', function() {
    square.style.backgroundColor = 'black';
})




// Задание 2. Написать скрипт, который находит картинки в блоке с классом main и первым 5 картинкам меняет src на указанное значение.

const imgs = document.querySelectorAll('img');

imgs.forEach((img, index) => {
    if(index <= 4) {
        img.setAttribute('src', 'https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip')
    }
    
})


//Задание 3

const images = [
    'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
    'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
    'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x1.jpg'
]

const imagesSmall = document.querySelector('.imagesSmall');
const imagesBig = document.querySelector('.imagesBig');

images.forEach(item => {
    let image = document.createElement('img');
    image.setAttribute('src', item);
    imagesSmall.appendChild(image);

    image.addEventListener('click', function() {
        if(document.querySelectorAll('.exists').length == 0){
            let bigImage = document.createElement('img');
            bigImage.setAttribute('src', image.src);
            bigImage.classList.add('exists');
            imagesBig.appendChild(bigImage);
            bigImage.classList.toggle('active');
        }
        else(
            document.querySelectorAll('.exists').forEach(item => item.remove())
        )
        
    })
})


//Задание 4.

const items = [
    {title: 'Апельсин', unit_price: 10, count: 18},
    {title: 'Банан', unit_price: 8, count: 50},
    {title: 'Ананас', unit_price: 14, count: 9},
    {title: 'Яблоко', unit_price: 5, count: 7},
];

const div = document.querySelector('.fruits');
let result = document.createElement('div');
let sum = 0;
let count = 0;

items.forEach(item => {
    let fruit = document.createElement('div');

    fruit.classList.add('item');
    count += item.count;
    sum += (item.unit_price * item.count)

    fruit.innerHTML = `<h3>${item.title}</h3>
    <div class="price">Цена: ${item.unit_price}$</div>
    <div class="count">Количество: ${item.count} шт. </div>
    `
    div.appendChild(fruit);
})

result.innerHTML = `Всего товаров: ${count} шт.
Общая сумма: ${sum}$`;
div.appendChild(result);








