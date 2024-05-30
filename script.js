// Item Class
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Shopping Cart Class
class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
    }

    addItem(item) {
        this.items.push(item);
        this.total += item.price;
        this.render();
    }

    removeItem(index) {
        const removedItem = this.items.splice(index, 1)[0];
        this.total -= removedItem.price;
        this.render();
    }

    render() {
        const itemsDiv = document.getElementById('items');
        itemsDiv.innerHTML = '';
        this.items.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `<span>${item.name} - $${item.price.toFixed(2)}</span>
                                 <button onclick="removeItem(${index})">Remove</button>`;
            itemsDiv.appendChild(itemDiv);
        });
        const totalSpan = document.getElementById('total');
        totalSpan.textContent = `$${this.total.toFixed(2)}`;
    }
}

const shoppingCart = new ShoppingCart();

// Sample items
const items = [
    new Item('Product 1', 10.99),
    new Item('Product 2', 24.99),
    new Item('Product 3', 7.50)
];

// Add sample items to cart initially
items.forEach(item => shoppingCart.addItem(item));

function removeItem(index) {
    shoppingCart.removeItem(index);
}
