//Part One

// line-through the text of the first <li> in the UL

function lineThrough() {
    firstItem = document.querySelector('ul li');

    firstItem.style.textDecoration = "line-through";
}

// call lineThrough function to effect firstItem

lineThrough();

// write a function that takes in a string representing a dom ELEMENT's id and a string presenting a url. the url should set the image with that id to have that url as its image source

function addImage(imageID, url) {
    let image = document.querySelector(imageID);

    image.src = url;
}

// call three times to add three images

addImage('#image-1', 'https://images.unsplash.com/photo-1603993097397-89c963e325c7?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')

addImage('#image-2', 'https://images.unsplash.com/photo-1521063512073-432ce10aed90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')

addImage('#image-3', 'https://images.unsplash.com/photo-1505153695651-9366147105f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80')

// write function that  removes the last <li> from the arguments UL

function removeLast(){
    let list = document.querySelector('#arguments');

    list.removeChild(list.lastElementChild);
}

//call function twice to remove last LI twice

removeLast();
removeLast();

//write a function that takes in two strings

function changeFontSize(fontSize, id) {
    let toChange = document.querySelector(id);

    toChange.style.fontSize = fontSize;
}

// change font size of something

changeFontSize('large', 'h1');

//Part II

//write a function that takes in a DOM element, adn appends it to the arguments <ul>

function appendItem(element) {
    const newItem = document.createElement(element);
    const list = document.querySelector('ul');
    
    list.appendChild(newItem);
}


appendItem('img');
addImage('ul img', 'https://cdn5.vectorstock.com/i/1000x1000/12/04/cartoon-baby-vector-6591204.jpg')


//function takes in an image element and makes its height 30 px

function make30(element) {
    let image = document.querySelector(element);

    image.style.height = '30px';
}

make30('#image-1');
make30('#image-2');
make30('#image-3');
make30('ul img');

//function that adds invisible class

function makeInvisible(element) {
    let item = document.querySelector(element);
    item.className = "invisible";
}

makeInvisible('#image-3')


// Part 3

//write function takes in text and returns a new <li> with that text as its inner text

function newLineItem(text) {
    let li = document.createElement('li');
    li.innerText = text;
    return li;
}

//test it by calling it with some text placing the return value in a variable, and passing it to your append function from step1 of part two

let lineToAdd = newLineItem('James added this using newLineItem function');

console.log(lineToAdd)
// just append 
const list = document.querySelector('ul');
list.appendChild(lineToAdd)


// write a function takes in two strings, one header size, one some text, and returns new header of that size

function newHeader(headerSize, text) {
    let title = document.createElement(headerSize);
    title.innerText = text;
    return title;
}

const body = document.querySelector('body');
let titleToAdd = newHeader('h2', 'This is the title James added')
body.appendChild(titleToAdd)
