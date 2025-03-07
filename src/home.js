import homeImage from './assets/home-image.png';

export default function homeLoad() {
    const header = document.createElement('h1');
    const image = document.createElement('img');
    const imageCredit = document.createElement('p');
    const headline = document.createElement('h2');
    const paragraphOne = document.createElement('p');
    const paragraphTwo = document.createElement('p');
    const orderButton = document.createElement('button');

    image.src = homeImage;
    image.setAttribute('alt', "Our famous Nevada burrito and fresh coconut");
    image.setAttribute('width', '500');

    orderButton.setAttribute('type', 'button');

    // For imageCredit
    const imageAuthor = document.createElement('a');
    const imageSiteOne = document.createElement('a');
    const imageSiteTwo = document.createElement('a');
    const imageCreditTextOne = document.createTextNode("Image by ");
    const imageCreditTextTwo = document.createTextNode(" from ");
    const imageCreditTextThree = document.createTextNode(" with coconut from ");

    imageAuthor.textContent = 'ALFONSO CHARLES';
    imageSiteOne.textContent = 'Pixabay'
    imageSiteTwo.textContent = 'pngimg.com';

    imageAuthor.href = 'https://pixabay.com/users/adoproducciones-121887/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7217204';
    imageSiteOne.href = 'https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7217204';
    imageSiteTwo.href = 'https://pngimg.com/image/108885';

    imageCredit.appendChild(imageCreditTextOne);
    imageCredit.appendChild(imageAuthor);
    imageCredit.appendChild(imageCreditTextTwo);
    imageCredit.appendChild(imageSiteOne);
    imageCredit.appendChild(imageCreditTextThree);
    imageCredit.appendChild(imageSiteTwo);

    header.textContent = 'Nevada TaCoCo.';
    headline.textContent = 'An oasis in the desert';
    paragraphOne.textContent = 'Welcome to Nevada TaCoCo., where bold flavors meet local roots. Our menu blends authentic and Americanized Mexican cuisine with a fresh Caribbean twist, featuring locally sourced ingredients and Nevada-inspired favorites like the Nevada Burrito. Committed to our community, we proudly support local farmers and give back through charity efforts focused on Nevada and the states we serve.';
    paragraphTwo.textContent = 'Whether you\'re craving a classic favorite or something new with a tropical twist, our fresh, locally sourced dishes are made to satisfy. And don\'t forget to to pair your meal with our signature fresh coconut drink for the ultimate flavor experience—cool, refreshing, and uniquely Nevada TaCoCo. There really is nothing quite like it, just like an oasis in the desert! Order now and let us bring bold, unforgettable flavors straight to your table!';
    orderButton.textContent = 'Order Now';
    
    document.body.appendChild(header);
    document.body.appendChild(image);
    document.body.appendChild(imageCredit);
    document.body.appendChild(headline);
    document.body.appendChild(paragraphOne);
    document.body.appendChild(paragraphTwo);
    document.body.appendChild(orderButton);
}