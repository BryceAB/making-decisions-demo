/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [];

backpack.push("Lightsaber");
backpack.push("robe", "food");

//console.log(backpack);

let belt = backpack.shift();
//console.log(belt);

backpack.splice(1, 0, "coat");

//console.log(backpack.length);
//console.log(belt);
//console.log(backpack[2]);

let bag = [];

bag.unshift("flint", "blanket", "toothbrush");

//console.log(bag);
backpack.push(bag.slice(0, 3));

// console.log(backpack);
// console.log(bag);
// console.log(belt);

for (let i = 0; i < bag.length; i++) {
  console.log(bag[i]);
}

for (let i = 0; i < 3; i++) {
  console.log(backpack[i]);
}
