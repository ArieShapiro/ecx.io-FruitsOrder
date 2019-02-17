"use strict";

var orderList = [
    {
        id: 1,
        name: "Conchita Bananas",
        quantity: 0
      },
      {
        id: 2,
        name: "Red star apple",
        quantity: 0
      },
      {
        id: 3,
        name: "Green diamond",
        quantity: 0
      },
      {
        id: 4,
        name: "Havanna sugar melone",
        quantity: 0
      }
];

(() => {
  var elFruitsStore = document.querySelector(".available-fruits");
  var strHTML = ``;
  orderList.forEach(fruit => {
    strHTML += `
          <li>
            <button onclick="addFruit(${fruit.id})">+</button>
            <button onclick="removeFruit(${fruit.id})">-</button>  
            ${fruit.name}
          </li>        
        `;
  });
  strHTML += `<button onclick="consoleOrderList()">Show My Order</button>`;
  elFruitsStore.innerHTML = strHTML;
})();

function addFruit(id) {
    orderList.forEach(fruit => {
        if (fruit.id === id) {
            fruit.quantity++;
        }
    });
    consoleOrderList();
}

function removeFruit(id) {
    orderList.forEach(fruit => {
        if (fruit.id === id && fruit.quantity > 0) {
            fruit.quantity--;
        }
    });
    consoleOrderList();
}

function consoleOrderList() {
    console.log('The current Order List:')
    orderList.forEach(fruit => {
        if (fruit.quantity > 0) {
            console.log(fruit.name, ' Quantity: ', fruit.quantity)
        }
    });
}
