//Part One

// line-through the text of the first <li> in the UL

function lineThrough() {
    firstItem = document.querySelector('ul li');

    firstItem.style.textDecoration = "line-through";
}

// call lineThrough function to effect firstItem

lineThrough();