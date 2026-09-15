const toys = ["Teddy Bear", "Toy Car", "Doll", "Puzzle"];

const toyList = document.getElementById("toyList");
const toyInput = document.getElementById("toyInput");
const addToyBtn = document.getElementById("addToyBtn");

function renderToys() {
  toyList.innerHTML = "";

  toys.forEach((toy) => {
    const li = document.createElement("li");
    li.textContent = toy;
    toyList.appendChild(li);
  });
}

function addToy() {
  const toyName = toyInput.value.trim();

  if (toyName === "") return;

  toys.push(toyName);
  toyInput.value = "";
  renderToys();
}

addToyBtn.addEventListener("click", addToy);

toyInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addToy();
});

renderToys();
