import EnclosureId from "../Enum/EnclosureId";
import IAnimal from "../Interfaces/IAnimal";

class Animal implements IAnimal {
    emoji: string;
    name: string;
    yearOfBirth: string;
    continents: string = "";
    specialNeeds: string;
    enclosureID: EnclosureId;
    
    constructor(emoji: string, name: string, yearOfBirth: string, specialNeeds: string, enclosure: EnclosureId){
        this.emoji = emoji;
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.specialNeeds = specialNeeds;
        this.enclosureID = enclosure;
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
        switch (value){
            case "Dolphin"  || "Shark" || "Octopus":
                this.enclosureID = EnclosureId.Aquatic;
                break;
            case "Lion" || "Elephant":
                this.enclosureID = EnclosureId.Savannah;
                break;
            case "Tiger" || "Panda" || "Parrot" ||  "Ant" || "Snail":
                this.enclosureID = EnclosureId.Jungle;
                break;
            case "Snake" || "Frog" || "Turtle":
                this.enclosureID = EnclosureId.Reptile
                break;
            default:
                    this.enclosureID = EnclosureId.Forest
                    break;
        } 
      }
}

export default Animal;
