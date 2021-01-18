class Aura {
    constructor(key, name){
        this.key = key;
        this.title = name;
        this.level = 5;
        this.altQuality = 1;
        this.quality = 5;
        this.generosityType = 2;
        this.generosityLevel = 10;
    }
}

const auraList = {

    ANGER: new Aura('ANGER', 'Anger'),
    HATRED: new Aura('HATRED', 'Hatred'),
    WRATH: new Aura('WRATH', 'Wrath'),
}

export default auraList;