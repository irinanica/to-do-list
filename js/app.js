const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemsButton = document.querySelector('button.removeItemsButton');
const listUl = listDiv.querySelector('ul');
const listItem = listUl.children;
const editTitle = document.querySelector('button.editTitleButton');
const inputEdit = document.querySelector('.inputEdit');
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;


// up, down and remove list buttons
listUl.addEventListener('click', (event) => {
    if (event.target.tagName == "BUTTON") {
        console.log(event.target.className);
        if (event.target.className == 'removeButton') {
            console.log('fsafasgg');
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if (event.target.className == 'upButton') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }
        }
        if (event.target.className == 'downButton') {
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if (nextLi) {
                ul.insertBefore(nextLi, li);
            }
        }
    }
});

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


// hide & show the list
toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = "Hide list";
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = "Show list";
        listDiv.style.display = 'none';
    }
});


// change the description of the list
descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
});


// add elements in the list
addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    let liHTML = '<span>' + addItemInput.value + '</span>' +
        '<button class="removeButton">×</button><button class="downButton">&#129051;</button><button class="upButton">&#129029;</button>';
    li.innerHTML = liHTML;
    ul.appendChild(li);
    addItemInput.value = '';
})


// remove all items in the list
removeItemsButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    console.log(ul);
    ul.innerHTML = '';
})



