//Part One

// line-through the text of the first <li> in the UL

function lineThrough() {
    firstItem = document.querySelector('ul li');

    firstItem.style.textDecoration = "line-through";
}

// call lineThrough function to effect firstItem

lineThrough();

// write a function that takes in a string representing a dom ELEMENT's id and a string presenting a url. the url should set the image with that id to have that url as its image source

function addImage (imageID, url) {
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