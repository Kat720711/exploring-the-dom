const myMessage = document.querySelector('.myMessage');
const theMessageButton = document.querySelector('.theMessageButton');
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector('.fruits');
const addFruitButton = document.querySelector('.addFruitButton');

setTimeout(function() {
    myMessage.innerText = 'This is a message in the DOM!';
}, 3000);

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
    } else {
        myMessage.innerText = 'Please enter a message';
    }
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode');
});

const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    const li = document.createElement('li');
    li.innerText = fruit;
    fruitList.appendChild(li);
}

addFruitButton.addEventListener('click', function() {
    const newFruit = prompt('Enter a new fruit:');
    if (newFruit) {
        const li = document.createElement('li');
        li.innerText = newFruit;
        fruitList.appendChild(li);
    }
});

