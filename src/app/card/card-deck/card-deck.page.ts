import { Component } from '@angular/core';
import { CardService} from '../shared/card.service';

@Component({
    selector: 'app-card-deck',
    templateUrl: './card-deck.page.html',
    styleUrls: ['./card-deck.page.scss']
})
export class CardDeckPage {
    constructor(private cardService: CardService){}

    public cardDecks: string[];

    ionViewWillEnter(){
        this.getCardDecks();
    }

    private getCardDecks(){
        //debugger;
        this.cardService.GetCardDecks().subscribe(
        (cardDecks: string[]) => this.cardDecks = cardDecks);
    }
}

 