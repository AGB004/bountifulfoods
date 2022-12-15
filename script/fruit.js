// const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
const url = "json/fruit.json";

let dropdown1 = document.querySelector(".options1");
let dropdown2 = document.querySelector(".options2");
let dropdown3 = document.querySelector(".options3");

let defaultOption1 = document.createElement("option");
defaultOption1.text = "Choose Fruit";
let defaultOption2 = document.createElement("option");
defaultOption2.text = "Choose Fruit";
let defaultOption3 = document.createElement("option");
defaultOption3.text = "Choose Fruit";

dropdown1.add(defaultOption1);
dropdown1.selectedIndex = 0;
dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;
dropdown3.add(defaultOption3);
dropdown3.selectedIndex = 0;

fetch(url).then(function (response) {
  response.json().then(function (data) {
    let option;

    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].name;
      option.value = data[i].name;
      dropdown1.add(option);
    }
    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].name;
      option.value = data[i].name;
      dropdown2.add(option);
    }
    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].name;
      option.value = data[i].name;
      dropdown3.add(option);
    }
  });
});

function test() {
  // get data
  let fruit1 = document.querySelector(".options1").value;
  let fruit2 = document.querySelector(".options2").value;
  let fruit3 = document.querySelector(".options3").value;

  // store data
  let store1 = localStorage.setItem("fruit1", fruit1);
  let store2 = localStorage.setItem("fruit2", fruit2);
  let store3 = localStorage.setItem("fruit3", fruit3);
}

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const fruits = jsonObject["fruits"];
    fruits.forEach(function (fruit) {
      let card = document.createElement("div");
      let h2 = document.createElement("h2");
      let nutri = document.createElement("ul");
      let carbs = document.createElement("li");
      let pro = document.createElement("li");
      let fat = document.createElement("li");
      let cal = document.createElement("li");
      let sug = document.createElement("li");

      h2.textContent = fruit.name;
      carbs.textContent = `Carbs: ${fruit.nutritions.carbohydrates}`;
      pro.textContent = `Protein: ${fruit.nutritions.protein}`;
      fat.textContent = `Fat: ${fruit.nutritions.fat}`;
      cal.textContent = `Cal: ${fruit.nutritions.calories}`;
      sug.textContent = `Sugar: ${fruit.nutritions.sugar}`;

      card.appendChild(h2);
      nutri.appendChild(cal);
      nutri.appendChild(carbs);
      nutri.appendChild(fat);
      nutri.appendChild(pro);
      nutri.appendChild(sug);
      card.appendChild(nutri);

      const display = document.querySelector("#fruits");
      display.appendChild(card);
    });
  });

// working on!!!!!

// function displayFruits(fruit) {
//   let card = document.createElement('div');
//   let h2 = document.createElement('h2');
//   let nutri = document.createElement('ul');
//   let carbs = document.createElement('li');
//   let pro = document.createElement('li');
//   let cal = document.createElement('li');
//   let sug = document.createElement('li');

//   h2.textContent = fruit.name;
//   carbs.textContent = fruit.carbohydrates;
//   pro.textContent = fruit.protein;
//   cal.textContent = fruit.calories;
//   sug.textContent = fruit.sugar;

//   card.appendChild(h2);
//   nutri.appendChild(carbs);
//   nutri.appendChild(pro);
//   nutri.appendChild(cal);
//   nutri.appendChild(sug);
//   card.appendChild(nutri);

//   const display = document.querySelector('#fruits');
//   display.appendChild(card);
// }
