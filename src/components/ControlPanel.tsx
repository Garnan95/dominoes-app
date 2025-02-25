import React, { useState } from "react";

interface ControlPanelProps {
  onSortAsc: () => void;
  onSortDesc: () => void;
  onFlip: () => void;
  onRemoveDup: () => void;
  onRemoveSum: (value: number) => void;
  onReset: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  onSortAsc,
  onSortDesc,
  onFlip,
  onRemoveDup,
  onRemoveSum,
  onReset,
}) => {
  const [removeValue, setRemoveValue] = useState("");

  const handleRemove = () => {
    const val = parseInt(removeValue, 10);
    if (!isNaN(val)) {
      onRemoveSum(val);
      setRemoveValue("");
    }
  };

  // This css will make it look nice
  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={onSortAsc}>Sort (ASC)</button>
      <button onClick={onSortDesc}>Sort (DESC)</button>
      <button onClick={onFlip}>Flip</button>
      <button onClick={onRemoveDup}>Remove Dup</button>
      <button onClick={onReset}>Reset</button>

      <div style={{ marginTop: "10px" }}>
        <input
          type="number"
          placeholder="Remove total"
          value={removeValue}
          onChange={(e) => setRemoveValue(e.target.value)}
          style={{ marginRight: "8px" }}
        />
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default ControlPanel;
