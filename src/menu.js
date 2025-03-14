import tacocoNutSalsa from './assets/menu-images/tacoco-nut-salsa.jpg';
import moltenQuesoBlancoFundido from './assets/menu-images/molten-queso-fundido.jpg';
import smokyEloteFritters from './assets/menu-images/smoky-elote-fritters.jpg'
import sierraSurfAndTurf from './assets/menu-images/sierra-surf-and-turf.jpg';
import coconutCauliflowerAlPastor from './assets/menu-images/coconut-cauliflower-al-pastor.jpg'
import coconutMoleChicken from './assets/menu-images/coconut-mole-chicken.jpg';
import nevadaChileRelleno from './assets/menu-images/nevada-chile-relleno.jpg';
import tacocoPaella from './assets/menu-images/tacoco-paella.jpg';
import smokyJackfruitTacos from './assets/menu-images/smoky-jackfruit-tacos.jpg';
import freshCoconut from './assets/menu-images/fresh-coconut.jpg';
import aguaFresca from './assets/menu-images/agua-fresca.jpg';
import fountainDrink from './assets/menu-images/fountain-drinks.jpg';
import coconutTresLechesCake from './assets/menu-images/coconut-tres-leches-cake.jpg';
import churroNachos from './assets/menu-images/churro-nachos.jpg';
import pineappleCoconutFlan from './assets/menu-images/pineapple-coconut-flan.jpg';
import mexicanChocolateLavaCake from './assets/menu-images/mexican-chocolate-lava-cake.jpg';

export default function menuLoad() {
    const content = document.querySelector('#content');
    const menu = [
        {
            category: 'Appetizers',
            name: 'TacoCo Nut Salsa',
            description: 'A vibrant blend of fire-roasted tomatoes, coconut, charred pineapple, and habanero, bringing a bold fusion of smoky, sweet, and spicy flavors. Served with our signature toasted coconut-dusted tortilla chips.',
            price: 6.99,
            image: tacocoNutSalsa,
        },
        {
            category: 'Appetizers',
            name: 'Molten Queso Blanco Fundido',
            description: 'A rich, melty blend of Oaxaca, Asadero, and Queso Blanco with roasted poblano peppers, caramelized onions, and a hint of coconut milk for a silky-smooth texture. Served in a sizzling cast-iron skillet with our signature toasted coconut-dusted tortilla chips.',
            price: 7.99,
            image: moltenQuesoBlancoFundido,
        },
        {
            category: 'Appetizers',
            name: 'Smoky Elote Fritters',
            description: 'Crispy Corn & Cotija Cheese Fritters with Chipotle Honey Butter. Light, fluffy, and crispy corn fritters packed with grilled street corn, cotija cheese, and roasted poblano peppers. Served with a chipotle-honey butter drizzle and a side of zesty lime aioli',
            price: 11.99,
            image: smokyEloteFritters,
        },
        {
            category: 'Entrees',
            name: 'The Sierra Surf & Turf',
            description: 'Grilled steak and shrimp with coconut-lime aioli, pineapple pico, and queso fresco in tortilla or crispy taco shell.',
            price: 13.99,
            image: sierraSurfAndTurf,
        },
        {
            category: 'Entrees',
            name: 'Coconut Cauliflower Al Pastor',
            description: 'Roasted cauliflower marinated in an al pastor sauce, topped with grilled pineapple and coconut crema.',
            price: 13.99,
            image: coconutCauliflowerAlPastor,
        },
        {
            category: 'Entrees',
            name: 'Coconut Mole Chicken',
            description: 'Slow-cooked chicken in a rich, chocolatey coconut mole sauce, served with cilantro rice and grilled plantains.',
            price: 15.99,
            image: coconutMoleChicken,
        },
        {
            category: 'Entrees',
            name: 'Nevada Chile Relleno',
            description: 'Roasted poblano stuffed with lobster, Oaxaca cheese, and a coconut-chipotle sauce, served with red rice.',
            price: 18.99,
            image: nevadaChileRelleno,
        },
        {
            category: 'Entrees',
            name: 'TaCoCo. Paella',
            description: 'A fusion of Spanish paella with Mexican arroz con mariscos, featuring saffron rice, chorizo, shrimp, and mussels, finished with a coconut-cilantro drizzle.',
            price: 19.99,
            image: tacocoPaella,
        },
        {
            category: 'Entrees',
            name: 'Smoky Jackfruit Tacos',
            description: 'BBQ jackfruit with pickled jalapeños, pineapple salsa, and a coconut crema drizzle.',
            price: 14.99,
            image: smokyJackfruitTacos,
        },
        {
            category: 'Drinks',
            name: 'Fresh Coconut',
            description: 'Our signature drink, served with your choice of flavor and topped with fresh fruits. Choice of regular, chilled, or frozen',
            price: 6.99,
            image: freshCoconut,
        },
        {
            category: 'Drinks',
            name: 'Agua Fresca (free refills)',
            description: 'Pineapple-coconut, hibiscus-lime, or mango-passionfruit.',
            price: 4.99,
            image: aguaFresca,
        },
        {
            category: 'Drinks',
            name: 'Fountain Drink (free refills)',
            description: 'Specially made mexican coke, sprite, jarritos, root beer, diet coke, horchata, or sparkling water TaCoCo style',
            price: 3.99,
            image: fountainDrink,
        },
        {
            category: 'Desserts',
            name: 'Coconut Tres Leches Cake',
            description: 'Super-moist tres leches cake soaked in coconut milk, sweet cream, and condensed milk, topped with whipped cream and toasted coconut flakes. Topped with a fresh mango.',
            price: 7.99,
            image: coconutTresLechesCake,
        },
        {
            category: 'Desserts',
            name: 'Churro Nachos',
            description: 'Crispy churro chips dusted in cinnamon sugar, topped with dulce de leche whipped cream. Served with a side of Mexican chocolate sauce.',
            price: 8.99,
            image: churroNachos,
        },
        {
            category: 'Desserts',
            name: 'Pineapple-Coconut Flan',
            description: 'A silky smooth Caribbean-inspired flan with roasted pineapple caramel and a hint of coconut cream. Garnished with fresh berries and a touch of lime zest.',
            price: 6.99,
            image: pineappleCoconutFlan,
        },
        {
            category: 'Desserts',
            name: 'Spiced Mexican Chocolate Lava Cake',
            description: 'A warm chocolate cake with a gooey cinnamon-chili chocolate center, served with coconut ice cream and a drizzle of spicy honey.',
            price: 9.99,
            image: mexicanChocolateLavaCake,
        }
    ];
    const categories = [];

    const headline = document.createElement('h1');
    const imageCredit = document.createElement('p');
    const imageAuthor = document.createElement('a');

    imageCredit.classList.add('image-credit');
    headline.classList.add('headline', 'menu-heading');

    imageCredit.textContent = 'Photos created using ';
    headline.textContent = 'Menu';
    imageAuthor.href = 'https://stability.ai/stable-image';
    imageAuthor.textContent = 'Stable Diffusion 3.5 Turbo Large';

    imageCredit.appendChild(imageAuthor);
    content.appendChild(headline);

    menu.forEach((item) => {
        const itemContainer = document.createElement('div');
        const itemContainerLeft = document.createElement('div');
        itemContainer.classList.add('item-container');
        itemContainerLeft.classList.add('item-container-left');

        itemContainer.appendChild(itemContainerLeft);

        for (let property in item) {
            if (property === 'category') {
                if (categories.includes(item[property]) === false) {
                    const categoryHeading = document.createElement('h2');
                    categoryHeading.classList.add('category-heading');
                    categoryHeading.textContent = item[property];

                    content.appendChild(categoryHeading);
                    categories.push(item[property]);
                }
            } else if (property === 'name') {
                const itemName = document.createElement('h3');
                itemName.classList.add('item-name');
                itemName.textContent = item[property];

                itemContainerLeft.appendChild(itemName);
            } else if (property === 'description') {
                const itemDescription = document.createElement('p');
                itemDescription.classList.add('item-description');
                itemDescription.textContent = item[property];

                itemContainerLeft.appendChild(itemDescription);
            } else if (property === 'price') {
                const itemPrice = document.createElement('h3');
                itemPrice.classList.add('item-price');
                itemPrice.textContent = item[property];

                itemContainerLeft.appendChild(itemPrice);
            } else if (property === 'image') {
                console.log(item[property])
                const itemImage = document.createElement('img');
                itemImage.classList.add('item-image');
                itemImage.setAttribute('height', '30');
                itemImage.src = item[property];

                itemContainer.appendChild(itemImage);
            } 
        }

        content.appendChild(itemContainer);
    });

    content.appendChild(imageCredit);
}