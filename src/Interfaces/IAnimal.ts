import EnclosureId from "../Enum/EnclosureId";

interface IAnimal {
    emoji: string;
    name: string;
    yearOfBirth: string;
    continents: string;
    specialNeeds: string;
    enclosureID: EnclosureId;
}

export default IAnimal;