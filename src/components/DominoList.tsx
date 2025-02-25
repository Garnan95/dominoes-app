import React from "react";
import { Domino } from "../data/dominoData";
import DominoCard from "./DominoCard";

interface DominoListProps {
  cards: Domino[];
}

const DominoList: React.FC<DominoListProps> = ({ cards }) => {
  return (
    // retun this div with the card information
    <div style={{ marginTop: "20px" }}>
      {cards.map((domino, idx) => (
        <DominoCard key={idx} card={domino} />
      ))}
    </div>
  );
};

export default DominoList;
