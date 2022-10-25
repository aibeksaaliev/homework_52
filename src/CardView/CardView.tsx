import React from "react";


interface CardViewProps {
  rank: string;
  suit: string;
}

const CardView: React.FC<CardViewProps> = (props) => {
  const cardClass:string = `card rank-${props.rank.toLowerCase()} ${props.suit}`;
  let suit:string = "";

  switch (props.suit) {
    case "diams":
      suit = "♦";
      break;
    case "hearts":
      suit = "♥";
      break;
    case "clubs":
      suit = "♣";
      break;
    case "spades":
      suit = "♠";
      break;
    default:
      console.log("Something went wrong");
  }

  return (
    <div className="playingCards faceImages">
        <span className={cardClass}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{suit}</span>
        </span>
    </div>
  );
};

export default CardView;