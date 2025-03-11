export default function menuLoad() {
    const content = document.querySelector('#content');
    const menu = [
        {
            category: 'Appetizer',
            name: 'TacoCo Nut Salsa',
            description: 'A vibrant blend of fire-roasted tomatoes, coconut, charred pineapple, and habanero, bringing a bold fusion of smoky, sweet, and spicy flavors. Served with our signature toasted coconut-dusted tortilla chips.',
            price: 6.99,
        },
        {
            category: 'Appetizer',
            name: 'Molten Queso Blanco Fundido',
            description: 'A rich, melty blend of Oaxaca, Asadero, and Queso Blanco with roasted poblano peppers, caramelized onions, and a hint of coconut milk for a silky-smooth texture. Served in a sizzling cast-iron skillet with our signature toasted coconut-dusted tortilla chips.',
            addOns: 'Add chicken, shrimp, or chorizo for 5.99',
            price: 7.99,
        },
        {
            category: 'Appetizer',
            name: 'Smoky Elote Fritters',
            description: 'Crispy Corn & Cotija Cheese Fritters with Chipotle Honey Butter. Light, fluffy, and crispy corn fritters packed with grilled street corn, cotija cheese, and roasted poblano peppers. Served with a chipotle-honey butter drizzle and a side of zesty lime aioli',
            price: 11.99,
        }
    ];
    const categories = [];

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    content.appendChild(heading);

    menu.forEach((item) => {
        for (let property in item) {
            if (property === 'category') {
                if (categories.find(item => item.category === item[property]) === undefined) {
                    const categoryHeading = document.createElement('h2');
                    categoryHeading.textContent = item[property];

                    content.appendChild(categoryHeading);
                    categories.push(item[property]);
                }
            }
            if (property === 'name') {
                const itemName = document.createElement('h3');
                itemName.textContent = item[property];

                content.appendChild(itemName);
            } else if (property === 'price') {
                const itemPrice = document.createElement('h3');
                itemPrice.textContent = item[property];

                content.appendChild(itemPrice);
            } else {
                if (property === 'category') continue;

                const itemText = document.createElement('p');
                itemText.textContent = item[property];

                content.appendChild(itemText);
            }
        }
    });
}