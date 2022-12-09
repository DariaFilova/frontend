// Задание 1. Напишите функцию, с помощью которой можно будет выполнять различные действия с задержкой.

const sleep = ms => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => resolve(), ms);
    });
}

sleep(5000)
.then(() => {
    console.log('Done in 5 sec');
})


/* Задание 2 Сделайте запрос на ссылку https://jsonplaceholder.typicode.com/photos
Отрисуйте на странице первые 10 изображений, ролученные из запроса.
 */

fetch('https://jsonplaceholder.typicode.com/photos/')
.then(data => data.json())
.then(result => {
    for(let i = 0; i < 10; i++) {
        const image = document.createElement('img');
        image.setAttribute('src', result[i].url)
        document.body.appendChild(image);
    }
})

/* Задание 3 Сделайте запрос на ссылки - https://jsonplaceholder.typicode.com/users и https://jsonplaceholder.typicode.com/todos 
Возмите данные из той ссылки, ответ от которого придет первым и отрисуйте их на странице. */

Promise.race([fetch('https://jsonplaceholder.typicode.com/users'), fetch('https://jsonplaceholder.typicode.com/todos')])
.then(data => data.json())
.then(result => {
    console.log(result)
    const container = document.querySelector('.container');
    if(result.length < 11) {
        
        result.forEach(el => {
       
            const div = document.createElement('div');
            div.classList.add('item')
    
            const name = document.createElement('h2');
            name.innerText = `${el.name}`;
            div.appendChild(name);
    
            const phone = document.createElement('p');
            phone.innerText = `Phone: ${el.phone}`
            div.appendChild(phone)
    
            const email = document.createElement('p');
            email.innerText = `Email: ${el.email}`;
            div.appendChild(email);
    
            const website = document.createElement('p');
            website.innerText = `Website: ${el.website}`;
            div.appendChild(website);
    
            const city = document.createElement('p');
            city.innerText = `City: ${el.address.city}`;
            div.appendChild(city);
            
            const street = document.createElement('p');
            street.innerHTML = `Street: ${el.address.street}, ${el.address.suite}`
            div.appendChild(street);
    
            container.appendChild(div);
    
        })
    }
    else {
        const list = document.createElement('ul');

        result.forEach(el => {
            const listItem = document.createElement('li');
            listItem.innerText = `${el.id}. ${el.title}`;
            list.appendChild(listItem);
        })
        
        container.appendChild(list);
        


        
    }
    
})
.catch(error => alert(error.message));

