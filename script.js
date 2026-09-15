const toys = ["Teddy Bear", "Toy Car", "Doll", "Puzzle"];

const toyList = document.getElementById("toyList");

function renderToys() {
  toyList.innerHTML = "";

  toys.forEach((toy) => {
    const li = document.createElement("li");
    li.textContent = toy;
    toyList.appendChild(li);
  });
}

renderToys();
