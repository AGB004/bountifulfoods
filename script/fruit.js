const cards = document.querySelector('.cards');

fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const fruits = jsonObject['fruits'];
    fruits.forEach(displayFruits);
  });

        // working on!!!!!

function displayFruits(fruit) {
  let card = document.createElement('section');
  let image = document.createElement('img');
  let h2 = document.createElement('h2');
  let address = document.createElement('p');
  let phoneNumber = document.createElement('p');
  let website = document.createElement('a');

  h2.textContent = business.name;
  address.textContent = `Address: ${business.address}`;
  phoneNumber.textContent = `Contact: ${business.phoneNumber}`;
  website.textContent = business.webURL;
  website.href = business.webURL;

  image.setAttribute('src', business.image);
  image.setAttribute('alt', `Image of ${business.name}`);
  image.setAttribute('class', "directoryImg");
  image.setAttribute('loading', 'lazy');

  card.appendChild(h2);
  card.appendChild(image);
  card.appendChild(address);
  card.appendChild(phoneNumber);
  card.appendChild(website);

  const grid = document.querySelector('.directoryGrid');
  grid.appendChild(card);

  
}

// Grid & List Layout Buttons
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const arrange = document.querySelector('#businesses');

if (gridButton) {
  gridButton.addEventListener('click', () => {
    arrange.classList.add('directoryGrid');
    arrange.classList.remove('directoryList');
  });
}

if (listButton) {
  listButton.addEventListener('click', () => {
    arrange.classList.add('directoryList');
    arrange.classList.remove('directoryGrid');
  });
}