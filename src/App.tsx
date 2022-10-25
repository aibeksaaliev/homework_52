import React, {useRef, useState} from 'react';
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import './App.css';
import PokerHand from "./lib/PokerHand";

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const dealCards = () => {
    const deck = new CardDeck();
    const userHand = deck.getCards(5);
    const pokerHand = new PokerHand(userHand);
    pokerHand.getOutCome();
    setCards(userHand);
  }

  const getCardsBtn = <button onClick={dealCards}>Deal the cards</button>;

  if (!cards.length) {
    return (
      <div className="App">
        {getCardsBtn}
      </div>
    );
  } else {
    return (
      <div className="App">
        {getCardsBtn}
        <div className="cards">
          <CardView rank={cards[0].rank} suit={cards[0].suit}/>
          <CardView rank={cards[1].rank} suit={cards[1].suit}/>
          <CardView rank={cards[2].rank} suit={cards[2].suit}/>
          <CardView rank={cards[3].rank} suit={cards[3].suit}/>
          <CardView rank={cards[4].rank} suit={cards[4].suit}/>
        </div>
      </div>
    );
  }
}

export default App;
