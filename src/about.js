import aboutImage from './assets/about-image.jpg';

export default function aboutLoad() {
    const content = document.querySelector('#content');

    const headline = document.createElement('h1');
    const image = document.createElement('img');
    const imageCredit = document.createElement('p');
    const imageAuthor = document.createElement('a');
    const introOne = document.createElement('p');
    const introTwo = document.createElement('p');
    const introThree = document.createElement('p');

    headline.classList.add('headline');

    image.src = aboutImage;
    image.width = '720';
    image.alt = 'A picturesque background of Nevada\'s mountains';

    imageAuthor.href = 'https://www.pexels.com/photo/photo-of-grassland-across-mountain-range-3026097/';

    headline.textContent = 'About Us';
    imageCredit.textContent = 'Photo by ';
    imageAuthor.textContent = 'Ricky Esquivel';
    introOne.textContent = 'At Nevada TaCoCo., we’re bringing a bold new twist to Mexican cuisine! Rooted in Nevada and inspired by fresh Caribbean flavors, we blend authentic and Americanized Mexican dishes with locally sourced ingredients. From our signature Nevada Burrito to our coconut-infused creations, every bite celebrates the unique flavors of the Southwest with a tropical kick. More than just great food, we’re dedicated to giving back—supporting our local communities and staying true to the states we serve.';
    introTwo.textContent = 'Our founder was a true family and community man, born and raised in Nevada with a passion for bringing people together over great food. A traveler at heart, he explored flavors from around the world but always came back to his favorite—bold, flavorful Mexican cuisine. Determined to share that love with everyone, he created Nevada TaCoCo., blending authentic Mexican flavors with a fresh, local twist. His vision lives on today, as the restaurant remains a beloved staple, serving up unforgettable flavors and keeping his spirit of community alive.';
    introThree.textContent = 'We’re not just about making incredible food, we’re about the people who enjoy it. Our commitment goes beyond bold flavors and fresh, locally sourced ingredients; it’s about creating a welcoming space where everyone feels at home. From supporting our communities to staying true to our roots, we take pride in serving more than just meals. We serve experiences.';

    content.appendChild(headline);
    content.appendChild(imageCredit);
    content.appendChild(introOne);
    content.appendChild(introTwo);
    content.appendChild(image);
    imageCredit.appendChild(imageAuthor);
    content.appendChild(introThree);
}