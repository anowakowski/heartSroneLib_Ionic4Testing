import { Component } from '@angular/core';
import { CardService} from '../shared/card.service';

import {CardDeck} from '../shared/card.model';

@Component({
    selector: 'app-card-deck',
    templateUrl: './card-deck.page.html',
    styleUrls: ['./card-deck.page.scss']
})
export class CardDeckPage {

    private readonly ALLOWED_DECKS = ['classes', 'factions', 'qualities', 'types', 'races'];

    public cardDecks: CardDeck[] = [];

    constructor(private cardService: CardService){}

    ionViewWillEnter(){
        this.getCardDecks();
    }

    private getCardDecks(){
        ////debugger;
        this.cardService.GetCardDecks().subscribe(
        (cardDecks: CardDeck[]) => {
            ////debugger;
            this.extractAllowedDecks(cardDecks)
            ////this.cardDecks = cardDecks
        })
    }

    extractAllowedDecks(cardDecks: CardDeck[]){
        this.ALLOWED_DECKS.forEach((deckName: string) => {
            ////debugger;
            this.cardDecks.push({name: deckName, types: cardDecks[deckName]});
        });
    }
}

 