import Animal from "./classes/Animal";

const form = document.getElementById("animalForm") as HTMLFormElement;
const selectedAnimal = document.getElementById("animalType") as HTMLSelectElement;
const name = document.getElementById("name") as HTMLInputElement;
const birthyear = document.getElementById("yearOfBirth") as HTMLInputElement;
const specialNeeds = document.getElementById("specialNeeds") as HTMLInputElement;
const savanna = document.getElementById("savannahHabitat") as HTMLDivElement;
const jungle = document.getElementById("jungleHabitat") as HTMLDivElement;
const aqua = document.getElementById("aquaticHabitat") as HTMLDivElement;
const reptile = document.getElementById("reptileHouse") as HTMLDivElement;
const forrest = document.getElementById("forrestHabitat") as HTMLDivElement;

const savannaHabitat: Animal[] = [];
const jungleHabitat: Animal[] = [];
const aquaticHabitat: Animal[] = [];
const reptileHouse: Animal[] = [];
const forrestHabitat: Animal[] = [];
const allAnimalNames: string[] = [];

function createAnimal(event: Event){
  event.preventDefault();
  const newAnimal = new Animal(selectedAnimal.value, name.value, birthyear.value, specialNeeds.value);
  newAnimal.getContinent(selectedAnimal.value);
  allAnimalNames.push(Animal.name);
  const num = newAnimal.organizeEnclusereId(selectedAnimal.value);
  switch(num) {
    case 1:
      aquaticHabitat.push(newAnimal);
      break;
    case 2:
      savannaHabitat.push(newAnimal);
      break;
    case 3:
      jungleHabitat.push(newAnimal);
      break;
    case 4:
      reptileHouse.push(newAnimal);
      break;
    case 5:
      forrestHabitat.push(newAnimal);
      break;
    default: 
    console.log("Error");
  }
  printAnimalsInHabitat();
}

function printAnimalsInHabitat(){
  clearPTags();
  savannaHabitat.forEach((animal: Animal) => {
    let showName = document.createElement("p");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "remove Animal";
    deleteButton.setAttribute("id", "delete");
    showName.textContent = `Ich bin ein ${animal.emoji} und heiße ${animal.name}. Ich wurde geboren im Jahr ${animal.yearOfBirth}. Am liebsten esse ich ${animal.specialNeeds}. Ich komme ursprünglich aus ${animal.continents}.`;
    savanna.appendChild(showName);
    savanna.appendChild(deleteButton);
    function callFunction(){
      deleteAnimalIndex(savannaHabitat, animal.name);
      printAnimalsInHabitat();
    }
    deleteButton.addEventListener("click", callFunction);
  })
  jungleHabitat.forEach((animal: Animal) => {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "remove Animal";
    deleteButton.setAttribute("id", "delete");
    let showName = document.createElement("p");
    showName.textContent = `Ich bin ein ${animal.emoji} und heiße ${animal.name}. Ich wurde geboren im Jahr ${animal.yearOfBirth}. Am liebsten esse ich ${animal.specialNeeds}. Ich komme ursprünglich aus ${animal.continents}.`;
    jungle.appendChild(showName);
    jungle.appendChild(deleteButton);
    function callFunction(){
      deleteAnimalIndex(jungleHabitat, animal.name);
      printAnimalsInHabitat();
    }
    deleteButton.addEventListener("click", callFunction);
  })
  aquaticHabitat.forEach((animal: Animal) => {
    let showName = document.createElement("p");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "remove Animal";
    deleteButton.setAttribute("id", "delete");
    showName.textContent = `Ich bin ein ${animal.emoji} und heiße ${animal.name}. Ich wurde geboren im Jahr ${animal.yearOfBirth}. Am liebsten esse ich ${animal.specialNeeds}. Ich komme ursprünglich aus ${animal.continents}.`;
    aqua.appendChild(showName);
    aqua.appendChild(deleteButton);
    function callFunction(){
      deleteAnimalIndex(aquaticHabitat, animal.name);
      printAnimalsInHabitat();
    }
    deleteButton.addEventListener("click", callFunction);
  })
  reptileHouse.forEach((animal: Animal) => {
    let showName = document.createElement("p");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "remove Animal";
    deleteButton.setAttribute("id", "delete");
    showName.textContent = `Ich bin ein ${animal.emoji} und heiße ${animal.name}. Ich wurde geboren im Jahr ${animal.yearOfBirth}. Am liebsten esse ich ${animal.specialNeeds}. Ich komme ursprünglich aus ${animal.continents}.`;
    reptile.appendChild(showName);
    reptile.appendChild(deleteButton);
    function callFunction(){
      deleteAnimalIndex(reptileHouse, animal.name);
      printAnimalsInHabitat();
    }
    deleteButton.addEventListener("click", callFunction);
  })
  forrestHabitat.forEach((animal: Animal) => {
    let showName = document.createElement("p");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "remove Animal";
    deleteButton.setAttribute("id", "delete");
    showName.textContent = `Ich bin ein ${animal.emoji} und heiße ${animal.name}. Ich wurde geboren im Jahr ${animal.yearOfBirth}. Am liebsten esse ich ${animal.specialNeeds}. Ich komme ursprünglich aus ${animal.continents}.`;
    forrest.appendChild(showName);
    forrest.appendChild(deleteButton);
    function callFunction(){
      deleteAnimalIndex(forrestHabitat, animal.name);
      printAnimalsInHabitat();
    }
    deleteButton.addEventListener("click", callFunction);
  })
  name.value = "";
  birthyear.value = "";
  specialNeeds.value = "";
  selectedAnimal.selectedIndex = 0;
}


function clearPTags() {
  const pTags = document.querySelectorAll("p");
  pTags.forEach(pTag => pTag.remove());
  const deleteButtons = document.querySelectorAll("#delete");
  deleteButtons.forEach(deleteButton => deleteButton.remove())
}
form.addEventListener("submit", createAnimal);


function deleteAnimalIndex(array: Animal[], name: string){
  for (let i = 0; i < array.length; i++){
    if (name === array[i].name){
      array.splice(i, 1);
    }
  }
}