'use strict';
const nameOfProducts = [
  'bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg', 'pen.jpg', 'pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg','wine-glass.jpg','chair.jpg'];


//helper function
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let count =0 ;
let rounds = 25;
const firstImage = document.getElementById('first-image');
const secondImage = document.getElementById('second-image');
const thirdImage = document.getElementById('third-image');
const imageSection = document.getElementById('imags-section');
let firstImageRandom;
let secondImageRandom;
let thirdImageRandom ;




Products.all = [];
function Products(name){
  this.name = name.split('.')[0] ;
  this.path = `image/${name}`;
  this.votes = 0;
  this.view = 0;
  Products.all.push(this);


}


for(let i = 0; i< nameOfProducts.length ; i++){
  new Products(nameOfProducts[i]);
}
console.table(Products.all);




function render() {
  const ulE1 = document.getElementById('list');
  for (let i =0; i<Products.all.length ; i++) {
    const liE1 = document.createElement('li');
    liE1.textContent = `${Products.all[i].name} had ${Products.all[i].votes} votes, and was seen ${Products.all[i].view} times.`;
    ulE1.appendChild(liE1);
  }
}






imageSection.addEventListener('click',choseProdact);


function choseProdact(event){
  if (count < rounds){
    if (event.target.id === 'first-image'){ firstImageRandom.votes++;}
    if(event.target.id === 'second-image'){secondImageRandom.votes++;}
    if(event.target.id === 'third-image'){thirdImageRandom.votes++;}
    count += 1;
    firstImageRandom.view += 1;
    secondImageRandom.view +=1;
    thirdImageRandom.view +=1;
    randomImage();
  }else if (count === rounds){
    imageSection.removeEventListener('click',choseProdact);
    render();


  }
}


function randomImage (){
  firstImageRandom = Products.all[randomNumber(0,nameOfProducts.length -1)];
  secondImageRandom = Products.all[randomNumber(0,nameOfProducts.length -1)];
  thirdImageRandom =Products.all[randomNumber(0,nameOfProducts.length -1)];


  firstImage.setAttribute('src', firstImageRandom.path);
  secondImage.setAttribute('src' ,secondImageRandom.path);
  thirdImage.setAttribute('src' , thirdImageRandom.path);




  while(firstImageRandom === secondImageRandom || firstImageRandom===thirdImageRandom || secondImageRandom === thirdImageRandom){
    firstImageRandom = Products.all[randomNumber(0,nameOfProducts.length -1)];
    secondImageRandom = Products.all[randomNumber(0,nameOfProducts.length -1)];
    thirdImageRandom =Products.all[randomNumber(0,nameOfProducts.length -1)];


    firstImage.setAttribute('src', firstImageRandom.path);
    secondImage.setAttribute('src' ,secondImageRandom.path);
    thirdImage.setAttribute('src' , thirdImageRandom.path);
  }


}


randomImage();
