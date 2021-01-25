class Aura {
    constructor(key, name){
        this.key = key;
        this.title = name;
        this.level = 0;
        this.altQuality = 0;
        this.quality = 0;
        this.generosityType = 0;
        this.generosityLevel = 0;
    }
}

const auraList = {

    ANGER: new Aura('ANGER', 'Anger'),
    HATRED: new Aura('HATRED', 'Hatred'),
    WRATH: new Aura('WRATH', 'Wrath'),
    HASTE: new Aura('HASTE', 'Haste'),
    MALEVOLENCE: new Aura('MALEVOLENCE', 'Malevolence'),
    ZEALOTRY: new Aura('ZEALOTRY', 'Zealotry'),
    PURITY_FIRE: new Aura('PURITY_FIRE', 'Purity of Fire'),
    PURITY_ICE: new Aura('PURITY_ICE', 'Purity of Ice'),
    PURITY_LIGHTNING: new Aura('PURITY_LIGHTNING', 'Purity of Lightning'),
    PURITY_ELEMENTS: new Aura('PURITY_ELEMENTS', 'Purity of Elements'),
    WAR_BANNER: new Aura('WAR_BANNER', 'War Banner'),
    DREAD_BANNER: new Aura('DREAD_BANNER', 'Dread Banner'),
    DISCIPLINE: new Aura('DISCIPLINE', 'Discipline'),
    GRACE: new Aura('GRACE', 'Grace'),
    DETERMINATION: new Aura('DETERMINATION', 'Determination'),
    CLARITY: new Aura('CLARITY', 'Clarity'),
    PRECISION: new Aura('PRECISION', 'Precision'),
    VITALITY: new Aura('VITALITY', 'Vitality'),
    ENVY: new Aura('ENVY', 'Envy'),

}

export default auraList;