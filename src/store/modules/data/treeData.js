class smallNode {
    constructor(value) {
        this.value = value;
        this.isActive = false;
    }
}

class TreeCluster {
    constructor(title, notableValue, smallnodes, motmPossible) {
        this.title = title;
        this.notable = {
            value: notableValue,
            isActive: false
        };
        this.smallnodes = smallnodes;
        this.motMeek = {
            possible: motmPossible,
            isActive: false,
        }
    }
}

const treeList = {
    SOVEREIGNTY: new TreeCluster(
        'Sovereignty',
        10,
        [new smallNode(6)],
        false
    ),
    LEADERSHIP: new TreeCluster(
        'Leadership',
        6,
        [new smallNode(6)],
        true
    ),
    INFLUENCE: new TreeCluster(
        'Influence',
        14,
        [new smallNode(6)],
        true
    ),
    CHARISMA: new TreeCluster(
        'Charisma',
        6,
        [],
        true
    ),
    CHAMPION: new TreeCluster(
        'Champion of the Cause',
        6,
        [new smallNode(6)],
        true
    ),
    DEVOTION: new TreeCluster(
        'Devotion',
        3,
        [],
        false
    ),
    POTENCY: new TreeCluster(
        "Conqueror's Potency",
        3,
        [],
        false
    )
};

export default treeList;
