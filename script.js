// 1
const fieldValue = document.querySelector('#textOne');
const buttonOne = document.querySelector('#changeButton');

buttonOne.onclick = () => {
    buttonOne.textContent = fieldValue.value;
};

// 2
const imgOne = document.querySelector('#imgOne');

// imgOne.src = './img/imgTwo.jpg';
imgOne.style.width = '400px';

// 3
const taskThreeImg = document.querySelector('#TaskThreeImg');
const taskThreeLink = document.querySelector('#taskThreeLink');

taskThreeImg.alt = 'funny owl';
taskThreeLink.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

// 4
const taskFourList = document.querySelector('#list');
const firstItem = taskFourList.firstElementChild;

firstItem.style.fontSize = '20px';
firstItem.style.color = 'red';
firstItem.style.backgroundColor = 'green';
firstItem.style.padding = '5px 10px';
firstItem.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit optio doloribus praesentium quibusdam dolorem placeat maiores commodi, iure est alias, laborum culpa ad magnam, quas ut? Aspernatur quidem porro ipsum nemo sapiente reiciendis quasi vitae ipsa suscipit in, necessitatibus sunt?';