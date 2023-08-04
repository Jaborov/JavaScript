const names = ["Бахтиёр", "Далер", "Сладусик", "Майрям", "Наргис", "Елена"];
const letters = [
  "egle",
  "google",
  "funny",
  "zoiper",
  "opera",
  "winter",
  "hight",
  "auto",
  "jack",
];
const numberArr = [7.1, 4.1, 1.3, 7.987, 2.5, 4.76];
const slova = ["winter", "cat", "bot", "snow", "father"];
const number = [3, 7, 2, 9, 4, 8, 1, 6, 21, 16, 12, 15];
const people = [
  { name: "Бахтиёр", lastName: "Джаборов", age: 29, budget: 2450, temp: "45°" },
  { name: "Далер", lastName: "Джаборов", age: 24, budget: 7000, temp: "44°" },
  { name: "Дарья", lastName: "Мамонова", age: 18, budget: 6000, temp: "35°" },
  {
    name: "Сладусик",
    lastName: "Джаборов",
    age: 1,
    budget: 14000,
    temp: "25°",
  },
  { name: "Дмитрий", lastName: "Наумов", age: 30, budget: 1567, temp: "41°" },
];
var wizards = [
  {
    name: "Harry Potter",
    house: "Gryfindor",
  },
  {
    name: "Cedric Diggory",
    house: "Hufflepuff",
  },
  {
    name: "Tonks",
    house: "Hufflepuff",
  },
  {
    name: "Ronald Weasley",
    house: "Gryfindor",
  },
  {
    name: "Hermione Granger",
    house: "Gryfindor",
  },
];

const points = {
  HarryPotter: 500,
  CedricDiggory: 750,
  RonaldWeasley: 100,
  HermioneGranger: 1270,
};

/* method Reversed
console.log(names);
const revs = [1, 2, 3, , 7, 3, 8].toReversed();
console.log(revs);
console.log(names);
const arrayLike = {
  length: 3,
  1: "bakhtiyor",
  0: 985939999,
};
console.log(Array.prototype.toReversed.call(arrayLike));
*/

/* method sorted
const newLetter = number.toSorted(function (a, b) {
  return a - b;
});
console.log(newLetter);
console.log(letters);

var stringArray = ["Голубая", "Горбатая", "Белуга"];
var numericStringArray = ["80", "9", "700"];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

// снова предполагаем, что функция печати определена
console.log("stringArray:", stringArray.join());
console.log("Сортировка:", stringArray.sort());

console.log("numberArray:", numberArray.join());
console.log("Сортировка без функции сравнения:", numberArray.sort());
console.log(
  "Сортировка с функцией compareNumbers:",
  numberArray.sort(compareNumbers)
);

console.log("numericStringArray:", numericStringArray.join());
console.log("Сортировка без функции сравнения:", numericStringArray.sort());
console.log(
  "Сортировка с функцией compareNumbers:",
  numericStringArray.sort(compareNumbers)
);

console.log("mixedNumericArray:", mixedNumericArray.join());
console.log("Сортировка без функции сравнения:", mixedNumericArray.sort());
console.log(
  "Сортировка с функцией compareNumbers:",
  mixedNumericArray.sort(compareNumbers)
);

console.log(letters.sort())
letters.sort(function (a, b) {
  return b.charCodeAt(0) - a.charCodeAt(0);
});
console.log(letters);
*/

/* method splice
console.log(names);
console.log(names.toSpliced(5, 1)); // возвращает новый массив , старый не трогает
console.log(names.splice(1, 1));
console.log(names.splice(0, 1, "Джбаоров", "Кукушкин"));
console.log(names); */

/* method to work with index
console.log(names);
const man = "Сладусик";

const index = names.indexOf(man);

console.log(index);
console.log(names[index]);
names[index] = "Сладусик Бубу";
const newNames = names.with(index, "Дусик Чусик");

console.log(names);
console.log(newNames);

console.log(names.includes("Сладусик"));
console.log(names.indexOf("Сладусик"));
console.log(names.indexOf("Сладусик") !== -1);

*/

/*  method map
const capitalNames = names.map(function (name) {
  const newNames = name + "!";
  return newNames;
//     если не написать retunn Js автоматический прописывает внизу сам 
// который нечего не возвращает  
});
console.log(names);
console.log(capitalNames);

// Пример 2
const workMap = names.map(function (name) {
  return name.toLocaleUpperCase();
});
console.log(workMap);

const arr = Array.prototype.map;
console.log(arr);

const charCodes = arr.call("hellow!", (x) => x.charCodeAt(0));
console.log(charCodes);

const string = "12345";
const spliced = Array.prototype.map.call(string, (x) => x).splice(1, 2);
const reversed = Array.prototype.map
  .call(string, (x) => x)
  .reverse()
  .join("");
console.log(spliced);
console.log(reversed);

const capNames = names.map(function (name, index) {
  if (index === 1) {
    return "Mamua";
  }
  return name;
});
*/

/* method find index or object
let findedPerson;

for (person of people) {
  if (person.age === 30) {
    findedPerson = person;
  }
}
console.log(findedPerson);

const finded = people.find(function (person) {
  return person.age === 29;
  //   if (person.age === 29) {
  //     return true;
  //   }
});
console.log(finded);

const findedChel = people.find((p) => p.age === 18);
console.log(findedChel);

const fidedinx = people.findIndex(function (person) {
  return person.age === 30;
});
console.log(fidedinx);
const newPeople = {
  name: "john",
  lastName: "morgan",
  age: 38,
  budget: 50000,
  temp: "-17°",
};
const newArr =  people.with(fidedinx, newPeople);

console.log(newArr)
console.log(people)
*/

/* method reduce
//  Возращает массив который буджет выше 5000
const filter = people.filter(function (p) {
  return p.budget > 5000;
});

const ageLast = people.filter((p) => p.age > 18);
console.log(ageLast);

// Сумирование из массива все буджеты
let sumb = 0;
filter.forEach(function (p) {
  sumb = sumb + p.budget;
});

console.log(sumb);

// Сумирование из массива все буджеты
const sumBudget = people
  .filter((p) => p.budget > 5000)
  .map((p) => p.budget)
  .reduce((a, b) => a + b, 0);

console.log(sumBudget);

// Сокрощеный виде верний пример 
const byBudget = (p) => p.budget > 5000
const pickBudget = (p) => p.budget
const sumBudget = people
  .filter(byBudget)
  .map(pickBudget)
  .reduce((a, b) => a + b, 0);


// ХЗ не понял тоже самое
const duble = people.reduce((a, b) => a + b.budget, 0);

console.log(duble);
console.log(people);

console.log(wizards);

// тоже самое и нижний пример
const huff = wizards.filter((p) => p.house === "Hufflepuff").map((a) => a.name); // Мы сначала фильтровали Массив, после

console.log(huff);

// Вытаскиваем из массива имена из команды Gryfindor
const Gryfindor = wizards
  .filter((a) => a.house === "Gryfindor")
  .map((a) => a.name);

console.log(Gryfindor);

//  Сумирование массива
const sum = number.reduce((a, b) => a + b);

console.log(sum);

//  Вытаскиваем из массива имена с команды Hufflepuff
const Hufflepuff = wizards.reduce((newArr, wizard) => {
  if (wizard.house === "Hufflepuff") {
    newArr.push(wizard.name);
  }
  return newArr;
}, []);

console.log(Hufflepuff);

//  Вытаскваем из массива имена с команды Hufflepuff виде Html
const hufflepuffList = wizards.reduce((html, wizard) => {
  if (wizard.house === "Hufflepuff") {
    html += "<li>" + wizard.name + "</li>";
  }
  return html;
}, "");

console.log(hufflepuffList);

//  Вытаскиваем из массива имя и храним объекте
const summaryDoc = (people) => {
  return people.reduce(
    (generaldoc, pop) => {
      generaldoc.name = generaldoc.name + " " + pop.name;
      generaldoc.lastNames.push(pop.lastName);
      return generaldoc;
    },
    {
      name: "",
      lastNames: [],
    }
  );
};

console.log(summaryDoc(people));

// Групировка
const groupBy = function (numberArr, criteria) {
  return numberArr.reduce(function (obj, item) {
    const key =
      typeof criteria === "function" ? criteria(item) : item[criteria];
    if (!obj.hasOwnProperty(key)) {
      obj[key] = [];
    }
    obj[key].push(item);
    return obj;
  }, {});
};

console.log(groupBy(numberArr, Math.floor));
console.log(groupBy(slova, "length"));

// Объединение данных из двух источников в массив
const wizardsWithPoints = wizards.reduce((arr, wizard) => {
  let key = wizard.name.replace(" ", " ");
  if (points[key]) {
    wizard.points = points[key];
  } else {
    wizard.points = 0;
  }

  arr.push(wizard);

  return arr;
}, []);

console.log(wizardsWithPoints);


// Объединение данных из двух источников в массив удаление name
var wizardsAsAnObject = wizards.reduce(function (obj, wizard) {

  // Получаем значение ключа для объекта points, удалив пробелы из имени
 //волшебника
  var key = wizard.name.replace('  ', ' ');

  // Если у волшебника есть очки, устанавливаем значение,
  // иначе устанавливаем 0.
  if (points[key]) {
    wizard.points = points[key];
  } else {
    wizard.points = 0;
  }

  // Удаляем свойство name
  delete wizard.name;

  // Добавляем значение wizard в новый объект
  obj[key] = wizard;

  // Возвращаем массив
  return obj;
}, {});

console.log(wizardsAsAnObject)
*/

/* method split
const string = 'Привет, как дела?' 
//  split  строку оборачивает в массив
const reversed = string.split(' ')

//  split - строку оборачивает массив , toReversed - переварачиваем буквы , Join - снова собираем обратно в строку 
const reversede = string.split('').toReversed().join("");

// с помощю filter убераем ! знак
const reversedes = string.split('').toReversed().join("!").split("").filter((c) => c !== "!").join('');

console.log(reversed)
console.log(reversede)
console.log(reversedes)
*/