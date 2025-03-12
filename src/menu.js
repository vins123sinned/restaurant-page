import tacocoNutSalsa from './assets/menu-images/tacoco-nut-salsa.jpg';
import moltenQuesoBlancoFundido from './assets/menu-images/molten-queso-fundido.jpg'

export default function menuLoad() {
    const content = document.querySelector('#content');
    const menu = [
        {
            category: 'Appetizers',
            name: 'TacoCo Nut Salsa',
            description: 'A vibrant blend of fire-roasted tomatoes, coconut, charred pineapple, and habanero, bringing a bold fusion of smoky, sweet, and spicy flavors. Served with our signature toasted coconut-dusted tortilla chips.',
            image: tacocoNutSalsa,
            price: 6.99,
        },
        {
            category: 'Appetizers',
            name: 'Molten Queso Blanco Fundido',
            description: 'A rich, melty blend of Oaxaca, Asadero, and Queso Blanco with roasted poblano peppers, caramelized onions, and a hint of coconut milk for a silky-smooth texture. Served in a sizzling cast-iron skillet with our signature toasted coconut-dusted tortilla chips.',
            image: moltenQuesoBlancoFundido,
            price: 7.99,
        },
        {
            category: 'Appetizers',
            name: 'Smoky Elote Fritters',
            description: 'Crispy Corn & Cotija Cheese Fritters with Chipotle Honey Butter. Light, fluffy, and crispy corn fritters packed with grilled street corn, cotija cheese, and roasted poblano peppers. Served with a chipotle-honey butter drizzle and a side of zesty lime aioli',
            price: 11.99,
        },
        {
            category: 'Entrees',
            name: 'The Sierra Surf & Turf',
            description: 'Grilled steak and shrimp with coconut-lime aioli, pineapple pico, and queso fresco in tortilla or crispy taco shell.',
            price: 13.99,
        },
        {
            category: 'Entrees',
            name: 'Coconut Cauliflower Al Pastor',
            description: 'Roasted cauliflower marinated in an al pastor sauce, topped with grilled pineapple and coconut crema.',
            price: 13.99,
        },
        {
            category: 'Entrees',
            name: 'Coconut Mole Chicken',
            description: 'Slow-cooked chicken in a rich, chocolatey coconut mole sauce, served with cilantro rice and grilled plantains.',
            price: 15.99,
        },
        {
            category: 'Entrees',
            name: 'Nevada Chile Relleno',
            description: 'Roasted poblano stuffed with lobster, Oaxaca cheese, and a coconut-chipotle sauce, served with red rice.',
            price: 18.99,
        },
        {
            category: 'Entrees',
            name: 'TaCo Co. Paella',
            description: 'A fusion of Spanish paella with Mexican arroz con mariscos, featuring saffron rice, chorizo, shrimp, and mussels, finished with a coconut-cilantro drizzle.',
            price: 19.99,
        },
        {
            category: 'Entrees',
            name: 'Smoky Jackfruit Tacos',
            description: 'BBQ jackfruit with pickled jalapeños, pineapple salsa, and a coconut crema drizzle.',
            price: 14.99,
        },
        {
            category: 'Drinks',
            name: 'Fresh Coconut',
            description: 'Our signature drink, served with your choice of flavor and topped with fresh fruits. Choice of regular, chilled, or frozen',
            price: 6.99,
        },
        {
            category: 'Drinks',
            name: 'Agua Fresca (free refills)',
            description: 'Pineapple-coconut, hibiscus-lime, or mango-passionfruit.',
            price: 4.99,
        },
        {
            category: 'Drinks',
            name: 'Fountain Drinks (free refills)',
            description: 'Mexican coke, sprite, jarritos, root beer, diet coke, horchata, sparkling water',
            price: 3.99,
        },
        {
            category: 'Desserts',
            name: 'Coconut Tres Leches Cake',
            description: 'Super-moist tres leches cake soaked in coconut milk, sweet cream, and condensed milk, topped with whipped cream and toasted coconut flakes. Topped with a fresh mango.',
            price: 7.99,
        },
        {
            category: 'Desserts',
            name: 'Churro Nachos',
            description: 'Crispy churro chips dusted in cinnamon sugar, topped with dulce de leche whipped cream . Served with a side of Mexican chocolate sauce.',
            price: 8.99,
        },
        {
            category: 'Desserts',
            name: 'Pineapple-Coconut Flan',
            description: 'A silky smooth Caribbean-inspired flan with roasted pineapple caramel and a hint of coconut cream. Garnished with fresh berries and a touch of lime zest.',
            price: 6.99,
        },
        {
            category: 'Desserts',
            name: 'Spiced Mexican Chocolate Lava Cake',
            description: 'A warm chocolate cake with a gooey cinnamon-chili chocolate center, served with coconut ice cream and a drizzle of spicy honey.',
            price: 9.99,
        }
    ];
    const categories = [];

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';

    content.appendChild(heading);

    menu.forEach((item) => {
        const itemContainer = document.createElement('div');
        const itemContainerLeft = document.createElement('div');
        itemContainer.classList.add('item-container');
        itemContainerLeft.classList.add('item-container-left');

        itemContainer.appendChild(itemContainerLeft);

        for (let property in item) {
            if (property === 'category') {
                if (categories.find(item => item.category === item[property]) === undefined) {
                    const categoryHeading = document.createElement('h2');
                    categoryHeading.textContent = item[property];

                    content.appendChild(categoryHeading);
                    categories.push(item[property]);
                }
            } else if (property === 'name') {
                const itemName = document.createElement('h3');
                itemName.textContent = item[property];

                itemContainerLeft.appendChild(itemName);
            } else if (property === 'price') {
                const itemPrice = document.createElement('h3');
                itemPrice.textContent = item[property];

                itemContainerLeft.appendChild(itemPrice);
            } else if (property === 'image') {
                console.log(item[property])
                const itemImage = document.createElement('img');
                itemImage.src = item[property];

                itemContainer.appendChild(itemImage);
            } else if (property === 'description') {
                const itemText = document.createElement('p');
                itemText.textContent = item[property];

                itemContainerLeft.appendChild(itemText);
            }
        }

        content.appendChild(itemContainer);
    });
}