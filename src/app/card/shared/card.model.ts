export interface CardDeck {
    name: string;
    types: string[];
}

export interface Card {
    cardId: string;
    attack: number;
    cardSet: string;
    cost: number;
    dbfId: string;
    faction: string;
    health: number;
    img: string;
    imgGold: string;
    locale: string;
    name: string;
    playerClass: string;
    rarity: string;
    type: string;
}
