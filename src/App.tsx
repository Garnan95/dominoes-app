import React, { useState } from "react";
import { dominoData, Domino } from "./data/dominoData";
import DominoList from "./components/DominoList";
import ControlPanel from "./components/ControlPanel";

const App: React.FC = () => {
  const [cards, setCards] = useState<Domino[]>(dominoData);

  // This will Count doubles for example [3, 3]
  const doubleCount = cards.filter(([a, b]) => a === b).length;

  // This will Sort ascending by the total of stuff
  const sortAsc = () => {
    const sorted = [...cards].sort((a, b) => {
      const sumA = a[0] + a[1];
      const sumB = b[0] + b[1];
      if (sumA !== sumB) return sumA - sumB;
      // uses a tie-breaker if the sums
      //matches (like compare first number)
      return a[0] - b[0];
    });
    setCards(sorted);
  };

  // Sort descending by total
  const sortDesc = () => {
    const sorted = [...cards].sort((a, b) => {
      const sumA = a[0] + a[1];
      const sumB = b[0] + b[1];
      if (sumA !== sumB) return sumB - sumA;
      // There will  be a
      //Tie-break if the sums of these match
      //(we willl compare first number)
      return b[0] - a[0];
    });
    setCards(sorted);
  };

  // This part will remove duplicates
  // so with [1,2] and this [2,1] then it should count as the same
  const removeDuplicates = () => {
    const seen = new Set<string>();
    const unique: Domino[] = [];

    for (let [x, y] of cards) {
      const sortedKey = x <= y ? "${x}-${y}" : "${y}-${x}";
      if (!seen.has(sortedKey)) {
        seen.add(sortedKey);
        unique.push([x, y]);
      }
    }
    setCards(unique);
  };

  // This shall flip all of das dominoes
  // so from [1,2] to [2,1]
  const flipCards = () => {
    setCards(cards.map(([a, b]) => [b, a] as Domino));
  };

  // When sum matches a value, remove cards
  const removeBySum = (sumValue: number) => {
    const filtered = cards.filter(([a, b]) => a + b !== sumValue);
    setCards(filtered);
  };

  //This will reset to default
  const reset = () => {
    setCards(dominoData);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Dominoes</h1>
      <div>
        <p>
          <strong>Source</strong>: {JSON.stringify(dominoData)}
        </p>
        <p>
          <strong>Double Numbers</strong>: {doubleCount}
        </p>
      </div>

      <DominoList cards={cards} />

      <ControlPanel
        onSortAsc={sortAsc}
        onSortDesc={sortDesc}
        onFlip={flipCards}
        onRemoveDup={removeDuplicates}
        onRemoveSum={removeBySum}
        onReset={reset}
      />
    </div>
  );
};

export default App;
