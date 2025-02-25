import React from "react";
import { Domino } from "../data/dominoData";

interface DominoCardProps {
  card: Domino;
}

const DominoCard: React.FC<DominoCardProps> = ({ card }) => {
  const [top, bottom] = card;

  // Inline styles for a “domino tile”
  //this uses css to make it look nice :)
  const dominoStyle: React.CSSProperties = {
    width: "50px",
    height: "80px",
    border: "2px solid #333",
    borderRadius: "5px",
    margin: "5px",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    position: "relative",
  };

  const numberStyle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: 600,
  };

  const dividerStyle: React.CSSProperties = {
    width: "80%",
    height: "2px",
    backgroundColor: "#333",
  };

  return (
    //Html part
    <div style={dominoStyle}>
      <div style={numberStyle}>{top}</div>
      <div style={dividerStyle}></div>
      <div style={numberStyle}>{bottom}</div>
    </div>
  );
};

export default DominoCard;
