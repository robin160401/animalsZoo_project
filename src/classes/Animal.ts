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

    organizeEnclusereId(value: string){
        if (value == "Dolphin" || value == "Shark" || value == "Octopus"){
            return 1;
        } else if (value == "Lion" || value == "Elephant"){
            return 2;
        } else if (value == "Tiger" || value == "Panda" || value == "Parrot" || value == "Ant" || value == "Snail"){
            return 3;
        } else if (value == "Snake" || value == "Frog" || value == "Turtle"){
            return 4;
        } else {
            return 5;
        }
    }
}

export default Animal;
