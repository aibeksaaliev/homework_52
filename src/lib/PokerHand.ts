import Card from "./Card";

class PokerHand {
  constructor(public cards: Card[]) {
  }

  getOutCome() {
    let counter:number = 0;
    let counter2: number = 0;
    let pokerHand:string;

    this.cards.forEach(x => {
      this.cards.forEach(y => {
        if (x.rank === y.rank && x.suit !== y.suit) {
          counter++;
        }
      });
    });

    this.cards.forEach(x => {
      this.cards.forEach(y => {
        if (x.suit === y.suit) {
          counter2++;
        }
      });
    });

    switch (counter || counter2) {
      case 2:
        pokerHand = "One pair";
        break;
      case 4:
        pokerHand = "Two pairs";
        break;
      case 6:
        pokerHand = "Three of a kind";
        break;
      case 8:
        pokerHand = "Full house";
        break;
      case 12:
        pokerHand = "Four of a kind";
        break;
      case 25:
        pokerHand = "Flush";
        break;
      default:
        pokerHand = "0";
    }
    return pokerHand;
  }
}

export default PokerHand;