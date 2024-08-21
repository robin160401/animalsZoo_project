import Animal from "./classes/Animal";

const form = document.getElementById("animalForm") as HTMLFormElement;
const selectedAnimal = document.getElementById("animalType") as HTMLSelectElement;
const name = document.getElementById("name") as HTMLInputElement;
const birthyear = document.getElementById("yearOfBirth") as HTMLInputElement;
const specialNeeds = document.getElementById("specialNeeds") as HTMLInputElement;
const savanna = document.getElementById("savannaHabitat") as HTMLDivElement;
const jungle = document.getElementById("jungleHabitat") as HTMLDivElement;
const aqua = document.getElementById("aquaticHabitat") as HTMLDivElement;
const reptile = document.getElementById("reptileHouse") as HTMLDivElement;
const forrest = document.getElementById("forrestHabitat") as HTMLDivElement;

const savannaHabitat: Animal[] = [];
const jungleHabitat: Animal[] = [];
const aquaticHabitat: Animal[] = [];
const reptileHouse: Animal[] = [];
const forrestHabitat: Animal[] = [];

function addAnimalToSavannaHabitat(animal: Animal){
  savannaHabitat.push(animal);
  savannaHabitat.forEach((animal: Animal) => {
    const showName = document.createElement("p");
    showName.textContent = `Ich bin ein ${animal.emoji} und heiße ${animal.name}. Ich wurde geboren im Jahr ${animal.yearOfBirth}. Am liebsten esse ich ${animal.specialNeeds}. Ich komme ursprünglich aus ${animal.continents}.`
  })
}

function addAnimalToJungleHabitat(animal: Animal){
  jungleHabitat.push(animal);
  jungleHabitat.forEach((animal: Animal) => {
    const showName = document.createElement("p");
    showName.textContent = `Ich bin ein ${animal.emoji} und heiße ${animal.name}. Ich wurde geboren im Jahr ${animal.yearOfBirth}. Am liebsten esse ich ${animal.specialNeeds}. Ich komme ursprünglich aus ${animal.continents}.`
  })
}

function addAnimalToAquaticHabitat(animal: Animal){
  aquaticHabitat.push(animal);
  aquaticHabitat.forEach((animal: Animal) => {
    const showName = document.createElement("p");
    showName.textContent = `Ich bin ein ${animal.emoji} und heiße ${animal.name}. Ich wurde geboren im Jahr ${animal.yearOfBirth}. Am liebsten esse ich ${animal.specialNeeds}. Ich komme ursprünglich aus ${animal.continents}.`;
    aqua.appendChild(showName);
  })
}

function addAnimalToReptileHouse(animal: Animal){
  reptileHouse.push(animal);
  reptileHouse.forEach((animal: Animal) => {
    const showName = document.createElement("p");
    showName.textContent = `Ich bin ein ${animal.emoji} und heiße ${animal.name}. Ich wurde geboren im Jahr ${animal.yearOfBirth}. Am liebsten esse ich ${animal.specialNeeds}. Ich komme ursprünglich aus ${animal.continents}.`
  })
}

function addAnimalToForrestHabitat(animal: Animal){
  forrestHabitat.push(animal);
  forrestHabitat.forEach((animal: Animal) => {
    const showName = document.createElement("p");
    showName.textContent = `Ich bin ein ${animal.emoji} und heiße ${animal.name}. Ich wurde geboren im Jahr ${animal.yearOfBirth}. Am liebsten esse ich ${animal.specialNeeds}. Ich komme ursprünglich aus ${animal.continents}.`
  })
}

function createAnimal(event: Event){
  event.preventDefault();
  const newAnimal = new Animal(selectedAnimal.value, name.value, birthyear.value, specialNeeds.value);
  newAnimal.getContinent(selectedAnimal.value);
  newAnimal.get
  console.log(newAnimal)
}

form.addEventListener("submit", createAnimal);