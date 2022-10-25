import Card from "./Card";

class CardDeck {
  public deck: Card[] = [];

  constructor(
    public ranks:string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    public suit:string[] = ["diams", "hearts", "clubs", "spades"]
  )

  {
    suit.forEach(x => {
      ranks.forEach(y => {
        const card = new Card(x, y);
        this.deck.push(card);
      });
    });
  }

  getCard() {
    const randomNumber = Math.floor(Math.random() * this.deck.length);
    return this.deck.splice(randomNumber, 1)[0];
  }

  getCards(howMany: number) {
    const userCards:Card[] = [];
    for (let i = 0; i < howMany; i++) {
      userCards.push(this.getCard());
    }
    return userCards;
  }
}

export default CardDeck;