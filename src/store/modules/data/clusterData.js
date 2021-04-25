const CONST = {
    // Cluster Constantes
    SMALL_EFFECT: [3],
    SMALL_INC_EFFECT: [4],
    FIRST_AMONG_EFFECT: [6],
    REPLENISHING_EFFECT: [6, 1],
    VENGEFUL_EFFECT: [15],
    STALWART_EFFECT: [15],
    PURE_EFFECT: [10, 30],
    PRECISE_EFFECT: [false, 25, 10],
 }

class Cluster {
    constructor(title, affects, auraEffect, special, effect){
        this.title = title;
        this.amount = 0;
        this.affects = affects;
        this.auraEffect = auraEffect;
        this.special = special || false;
        this.effect = effect || function(){ return null };
    }
}

const clusterList = {

    SMALL: new Cluster (
        `Small: ${CONST.SMALL_EFFECT}%Aura Effect`, true, CONST.SMALL_EFFECT,
    ),
    SMALL_INC: new Cluster (
        `Small: ${CONST.SMALL_INC_EFFECT}% Aura Effect`, true, CONST.SMALL_INC_EFFECT,
    ),
    FIRST_AMONG: new Cluster (
        'First Among Equals', true, CONST.FIRST_AMONG_EFFECT,
    ),
    REPLENISHING: new Cluster (
        'Replenishing Presence', true, CONST.REPLENISHING_EFFECT,
        
        // isSpecial
        true, 
        function() {
            return [
                `Regenerate ${this.amount * CONST.REPLENISHING_EFFECT[1]}% of Life per second`
            ];
        },
    ),
    VENGEFUL: new Cluster (
        'Vengeful Commander', ['ANGER', 'HATRED', 'WRATH'], CONST.VENGEFUL_EFFECT,
    ),
    STALLWART: new Cluster (
        'Stalwart Commander', ['GRACE', 'DISCIPLINE', 'DETERMINATION'], CONST.STALWART_EFFECT,
    ),
    PURE_COMMANDER: new Cluster (
        'Pure Commander', [['PURITY_ICE', 'PURITY_FIRE', 'PURITY_LIGHTNING'], ['PURITY_ELEMENTS']], CONST.PURE_EFFECT,
    ),
    PRECISE_COMMANDER: new Cluster (
        'Precise Commander', false, CONST.PRECISE_EFFECT[0], 
        
        // isSpecial
        true,
        function() {
            return [
                `${CONST.PRECISE_EFFECT[1] * this.amount}% increased Critical Strike Chance`,
                `+${CONST.PRECISE_EFFECT[2] * this.amount}% to Critical Strike Multiplier`
            ];
        }
    ),
}

export default clusterList;