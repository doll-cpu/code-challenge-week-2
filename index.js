
//DOM Elements
const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const listContainer = document.getElementById('list-container');

// Array to store list
let shoppingList = [];

//Function to render items to list
function renderList() {
    listContainer.innerHTML = '';

    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.name;
        if (item.completed) {
            listItem.classList.add('completed');
        }

        
        listItem.addEventListener('click', () => {
            item.completed = !item.completed;
            renderList();
        });

        listContainer.appendChild(listItem);
    });
}

// Event listener for adding items
addBtn.addEventListener('click', () => {
    const newItem = {
        name: itemInput.value,
        completed: false
    };

    shoppingList.push(newItem);
    renderList();
    itemInput.value = ''; // Clear input field after adding
});

// Event listener for clearing the list
clearBtn.addEventListener('click', () => {
    shoppingList = [];
    renderList();
});

// Initial rendering of the list
renderList();