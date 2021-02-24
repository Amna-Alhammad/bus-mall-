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
let prv1;
let prv2;
let prv3;




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
    createChart();
    console.table(Products.all);

  }
}


function randomImage (){
  firstImageRandom = Products.all[randomNumber(0,nameOfProducts.length -1)];
  secondImageRandom = Products.all[randomNumber(0,nameOfProducts.length -1)];
  thirdImageRandom =Products.all[randomNumber(0,nameOfProducts.length -1)];

  firstImage.setAttribute('src', firstImageRandom.path);
  secondImage.setAttribute('src' ,secondImageRandom.path);
  thirdImage.setAttribute('src' , thirdImageRandom.path);

  if (count > 0){
    while (firstImageRandom === secondImageRandom || firstImageRandom===thirdImageRandom || secondImageRandom === thirdImageRandom || firstImageRandom === prv1 || firstImageRandom === prv2 || firstImageRandom === prv3 || secondImageRandom === prv1|| secondImageRandom === prv2 || secondImageRandom === prv3 || thirdImageRandom === prv1 || thirdImageRandom === prv2 || thirdImageRandom === prv3){
      firstImageRandom = Products.all[randomNumber(0,nameOfProducts.length -1)];
      secondImageRandom = Products.all[randomNumber(0,nameOfProducts.length -1)];
      thirdImageRandom =Products.all[randomNumber(0,nameOfProducts.length -1)];
      firstImage.setAttribute('src', firstImageRandom.path);
      secondImage.setAttribute('src' ,secondImageRandom.path);
      thirdImage.setAttribute('src' , thirdImageRandom.path);
    }

  }else{
    while(firstImageRandom === secondImageRandom || firstImageRandom===thirdImageRandom || secondImageRandom === thirdImageRandom){
      firstImageRandom = Products.all[randomNumber(0,nameOfProducts.length -1)];
      secondImageRandom = Products.all[randomNumber(0,nameOfProducts.length -1)];
      thirdImageRandom =Products.all[randomNumber(0,nameOfProducts.length -1)];
      firstImage.setAttribute('src', firstImageRandom.path);
      secondImage.setAttribute('src' ,secondImageRandom.path);
      thirdImage.setAttribute('src' , thirdImageRandom.path);}
  }
  prv1 = firstImageRandom;
  prv2= secondImageRandom;
  prv3 =thirdImageRandom;
}
randomImage();


function createChart (){
  let productNames =[];
  let productvotes =[];
  let productViews = [];
  for (let i = 0 ; i<nameOfProducts.length;i++){
    productNames.push(Products.all[i].name);
    productvotes.push(Products.all[i].votes);
    productViews.push(Products.all[i].view);
    console.log('name',productNames);
    console.log('vote',productvotes);
    console.log('view',productViews);
  }
  var ctx = document.getElementById('my-chart').getContext('2d');
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-undef
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels:
              productNames,
      datasets: [{
        label: '# of Votes',
        data: productvotes,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 1,

      },
      {

        label: '# of views',
        data: productViews,
        backgroundColor: 'darkread',
        borderColor:'white',
        borderWidth: 1,


      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
//createChart();
