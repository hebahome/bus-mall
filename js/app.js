'use strict';

let imgArray = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.jpg',
    'tauntaun.jpg',
    'unicorn.jpg',
    'water-can.jpg',
    'wine-glass.jpg',

];

let all = [];
let counter = 0;
let numberOfRound = 25;



console.log(document.getElementById('webImg'))
const imgSection = document.getElementById('webImg');
let firstImg = document.getElementById('firstImg');
let secondImg = document.getElementById('secondImg');
let thirdImg = document.getElementById('thirdImg');


function Rest(name, imageSrc) {
    this.name = name;
    this.image = imageSrc;
    this.shown = 0;
    this.click = 0;
    Rest.all.push(this);
}

Rest.all = [];


for (let i = 0; i < imgArray.length; i++) {
    new Rest(imgArray[i].split('.')[0], imgArray[i]);
}

console.log(Rest.all);

let firstRandom
let secondRandom
let thirdRandom

function render() {
    firstRandom = getRandomNumber(0, imgArray.length - 1);
    secondRandom = getRandomNumber(0, imgArray.length - 1);
    thirdRandom = getRandomNumber(0, imgArray.length - 1);


    console.log(firstRandom)
    firstImg.src = './img/' + Rest.all[firstRandom].image;
    secondImg.src = './img/' + Rest.all[secondRandom].image;
    thirdImg.src = './img/' + Rest.all[thirdRandom].image;


    Rest.all[firstRandom].shown++;
    Rest.all[secondRandom].shown++;
    Rest.all[thirdRandom].shown++;

    console.log(Rest.all)
}

render();



imgSection.addEventListener('click', clickEvent)


function clickEvent(e) {
    if ((e.target.id === 'firstImg' || e.target.id === 'secondImg' || e.target.id === 'thirdImg') && counter < numberOfRound) {



        if (e.target.id === 'firstImg') { Rest.all[firstRandom].click++ }
        if (e.target.id === 'secondImg') { Rest.all[secondRandom].click++ }
        if (e.target.id === 'thirdImg') { Rest.all[thirdRandom].click++ }




        render();
        counter++;
    }

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let btn = document.createElement("button");
btn.innerHTML = "View Results";
btn.addEventListener("click", function () {
    //alert("Button is clicked");
    const ulElement = document.createElement("ul");
    resultSection.appendChild(ulElement);

    for (let i = 0; i < imgArray.length; i++) {

        let productLi = document.createElement("li");
        ulElement.appendChild(productLi);

        productLi.textContent = ` ${Rest.all[i].name} had ${Rest.all[i].click} votes, and was seen ${Rest.all[i].shown }times.`
    }
});
document.body.appendChild(btn);



