import Animal from "./Animal";

class Animals {
    reptiles: Animal[] = [];
    bird: Animal[] = [];
    fish: Animal[] = [];
    mammal: Animal[] = [];
    amphibian: Animal[] = [];
    mollusk: Animal[] = [];
    insect: Animal[] = [];

    pushReptile(reptile: Animal){
        this.reptiles.push(reptile);
    }
    pushBird(bird: Animal){
        this.bird.push(bird);
    }
    pushFish(fish: Animal){
        this.fish.push(fish);
    }
    pushMammal(mammal: Animal){
        this.mammal.push(mammal);
    }
    pushAmphibian(amphibian: Animal){
        this.amphibian.push(amphibian);
    }
    pushMollusk(mollusk: Animal){
        this.mollusk.push(mollusk);
    }
    pushInsect(insect: Animal){
        this.insect.push(insect);
    }
}