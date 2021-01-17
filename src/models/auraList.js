class Aura {
    constructor(name){
        this.title = name;
        this.level = 5;
        this.altQuality = 1;
        this.quality = 5;
        this.generosityType = 2;
        this.generosityLevel = 10;
    }
}

const auraList = {

    ANGER: new Aura("Anger"),
    HATRED: new Aura("Hatred"),
    WRATH: new Aura("Wrath"),


}

export default auraList;