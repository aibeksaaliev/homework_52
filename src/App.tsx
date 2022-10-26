import React, {useRef, useState} from 'react';
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import './App.css';
import PokerHand from "./lib/PokerHand";

let user:string = "";

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const restDeck = useRef(cards);

  const dealCards = () => {
    const deck = new CardDeck();
    const userHand = deck.getCards(5);
    const pokerHand = new PokerHand(userHand);
    user = pokerHand.getOutCome();
    setCards(userHand);

    restDeck.current = deck.deck;
  }

  const changeCards = (id:number) => {
    const randomCard:number = Math.floor(Math.random() * restDeck.current.length);
    const newHand:Card[] = [...cards];
    const card:Card[] = restDeck.current.splice(randomCard, 1);
    newHand.splice(id, 1, card[0]);
    const pokerHand = new PokerHand(newHand);
    user = pokerHand.getOutCome();
    setCards(newHand);
  }

  const getCardsBtn = <button onClick={dealCards}>Deal the cards</button>;

  if (!cards.length) {
    return (
      <div className="App">
        {getCardsBtn}
      </div>
    );
  } else if (restDeck.current.length === 42) {
    return (
      <div className="App">
        <div>
          <span>Lost of attempts to change cards.</span>
        </div>
        <div>
          <span>Start again.</span>
        </div>
        {getCardsBtn}
      </div>
    );
  } else {
    return (
      <div className="App">
        {getCardsBtn}
        <div className="cards">
          <div>
            <CardView rank={cards[0].rank} suit={cards[0].suit}/>
            <button onClick={() => changeCards(0)}>Change card</button>
          </div>
          <div>
            <CardView rank={cards[1].rank} suit={cards[1].suit}/>
            <button onClick={() => changeCards(1)}>Change card</button>
          </div>
          <div>
            <CardView rank={cards[2].rank} suit={cards[2].suit}/>
            <button onClick={() => changeCards(2)}>Change card</button>
          </div>
          <div>
            <CardView rank={cards[3].rank} suit={cards[3].suit}/>
            <button onClick={() => changeCards(3)}>Change card</button>
          </div>
          <div>
            <CardView rank={cards[4].rank} suit={cards[4].suit}/>
            <button onClick={() => changeCards(4)}>Change card</button>
          </div>
        </div>
        <span>{user}</span>
      </div>
    )
  }
}

export default App;
