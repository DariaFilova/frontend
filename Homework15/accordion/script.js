const accordion = document.querySelectorAll('.trigger');
const icons = document.querySelectorAll('span');
const answers = document.querySelectorAll('.answer');



for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', () => {
        accordion[i].classList.toggle('trigger_active')
        icons[i].innerText = icons[i].innerText == 'add' ? 'remove' : 'add';
        answers[i].classList.toggle('answer_active');
       
    });
    
}


