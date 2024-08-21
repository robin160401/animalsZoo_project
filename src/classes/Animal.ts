import EnclosureId from "../Enum/EnclosureId";
import IAnimal from "../Interfaces/IAnimal";

class Animal implements IAnimal {
    emoji: string;
    name: string;
    yearOfBirth: string;
    continents: string = "";
    specialNeeds: string;
    enclosureID: EnclosureId = 0;
    
    constructor(emoji: string, name: string, yearOfBirth: string, specialNeeds: string){
        this.emoji = emoji;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.specialNeeds = specialNeeds;
    }

    getContinent(value: string){
        switch (value){
            case "Dolphin" || "Turtle" || "Shark" || "Octopus":
                this.continents = "Ocean";
                break;
            case "Lion" || "Elephant" || "Snake":
                this.continents = "africa";
                break;
            case "Tiger" || "Panda":
                this.continents = "asia"
                break;
            case "Bear" || "Snail":
                this.continents = "north america";
                break;
            case "Parrot" || "Ant" || "Spider":
                this.continents = "south america";
                break;
            default:
                this.continents = "europe";
                break;
        }    
    }
}

export default Animal;
