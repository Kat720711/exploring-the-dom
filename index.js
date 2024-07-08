const myMessage = document.querySelector('myMessage');
const theMessageButton = document.querySelector('.theMesageButton');
const clearMessageButton = document.querySelector('.clearMessageButton');
const inputBox = document.querySelector('.inputBox');
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
const fruitlist = document.querySelector('.fruits');

theMessageButton.addEventListener('click', function(){
    if (inputBox.ariaValueMax.trim().length > 0) {
        myMessage.innerText = inputBox.ariaValueMax;
    }
});

clearMessageButton.addEventListener('click', function(){
    myMessage.innerText = ''
})

myMessage.addEventListener('click', function(){
    myMessage.classList.toggle('darkmode')
})

for(let i=0; i<fruits.length; i++) {
    const fruit = fruits[i];

    const li = document.createElement('li');
    li.innerText = fruit;
    fruitlist.appendChild(li);
}