document.addEventListener('DOMContentLoaded', function() {
    const itemInput = document.getElementById('item');
    const addBtn = document.getElementById('addBtn');
    const clearBtn = document.getElementById('clearBtn');
    const list = document.getElementById('list');

    let shoppingList = [];

    // Load items from local storage if available
    if (localStorage.getItem('shoppingList')) {
        shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
        renderList();
    }

    // Function to render the shopping list
    function renderList() {
        list.innerHTML = '';
        shoppingList.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.name;
            if (item.purchased) {
                li.classList.add('purchased');
            }
            li.addEventListener('click', () => {
                togglePurchased(index);
            });
            list.appendChild(li);
        });
    }

    // Function to add a new item to the list
    function addItem() {
        const itemName = itemInput.value
