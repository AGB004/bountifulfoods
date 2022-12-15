
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
  let card = document.createElement('div');
  let h2 = document.createElement('h2');
  let nutri = document.createElement('ul');
  let carbs = document.createElement('li');
  let pro = document.createElement('li');
  let cal = document.createElement('li');
  let sug = document.createElement('li');

  h2.textContent = fruit.name;
  carbs.textContent = fruit.carbohydrates;
  pro.textContent = fruit.protein;
  cal.textContent = fruit.calories;
  sug.textContent = fruit.sugar;

  card.appendChild(h2);
  nutri.appendChild(carbs);
  nutri.appendChild(pro);
  nutri.appendChild(cal);
  nutri.appendChild(sug);
  card.appendChild(nutri);

  const display = document.querySelector('#fruits');
  display.appendChild(card);
}