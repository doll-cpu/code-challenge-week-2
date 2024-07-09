
document. document.addEventListener('DOMContentLoaded', ()=>{})

const itemInput = document. getElementById('item');

const addBtn = document. getElementById('addBtn');

const clearBtn = document. getElementById('clearBtn');

const list = document. getElementById('list');

let shoppingList = [];

// If it does, load the list from local-storage (if available)

if (localStorage. getItem('shoppingList')) {

shoppingList = JSON. parse(localStorage. getItem('shoppingList'));

renderList();

}

/** Helper function to render the shopping list */

function renderList() {

list.innerHTML = '';

shoppingList. forEach((item, index) => {

const li = document. createElement('li');

li. textContent = item. name;

if (item.purchased) {

li. classList. add('purchased');

}

li. Click', () => {

togglePurchased(index);

});

list.appendChild(li);

});

}

// Add New Item To List

function addItem() {

const itemName = itemInput. value