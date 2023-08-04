// const array = [1, 2, 3, 4, 5, 6, 30, 17, 46];
// console.log(array);
// console.log(array[8]);
// console.log(array.length);
// console.log(array[array.length]);
// array[3] = null;
// array[array.length] = "bakha";
// console.log(array);

const inputText = document.getElementById("title");
const buttonAdd = document.getElementById("create");
const listElement = document.getElementById("list");

// function render() {
//   for (let note of notes) {
//     listElement.insertAdjacentHTML("beforeend", getNoteTemplace(note));
//   }
// }
// render();

// buttonAdd.onclick = function () {
//   if (inputText.value === "") {
//     return;
//   }
//   listElement.insertAdjacentHTML("beforeend", getNoteTemplace(inputText.value));
//   inputText.value = "";
// };

// function getNoteTemplace(title) {
//   return `
//     <li
//     class="list-group-item d-flex justify-content-between align-items-center"
//    >
//     <span>${title}</span>
//     <span>
//       <span class="btn btn-small btn-success">&check;</span>
//       <span class="btn btn-small btn-danger">&times;</span>
//     </span>
//    </li>
//   `;
// }

const notes = [
  {
    title: "Тестоввый массив для проверки",
    complite: false,
  },
  {
    title: "Проверили всё отлично работает",
    complite: false,
  },
];

function render() {
  listElement.innerHTML = "";
  if(notes.length === 0) {
    listElement.innerHTML = "Пожалуйста добавьте Заметку!"
  }
  for (let i = 0; i < notes.length; i++) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplace(notes[i], i));
  }
}
render();

buttonAdd.onclick = function () {
  if (inputText.value === "") {
    return;
  }
  const newNote = {
    title: inputText.value,
    complite: false,
  };
  notes.push(newNote);
  render();
  inputText.value = "";
};
listElement.onclick = function (event) {
  console.log(event.target.dataset);
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;
    if (type === "toggle") {
      notes[index].complite = !notes[index].complite;
    } else if (type === "remove") {
      notes.splice(index, 1);
    }
  }
  render();
};
function getNoteTemplace(note, index) {
  return `
      <li
      class="list-group-item d-flex justify-content-between align-items-center"
     >
      <span class="${note.complite ? "text-decoration-line-through" : ""}" >${
    note.title
  }</span>
      <span>
        <span class="btn btn-small btn-${
          note.complite ? "warning" : "success"
        }" data-index="${index}" data-type="toggle">&check;</span>
        <span class="btn btn-small btn-danger"  data-type="remove" data-index="${index}">&times;</span>
      </span>
     </li>
    `;
}
