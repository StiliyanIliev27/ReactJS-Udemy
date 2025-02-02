import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  function handleName(event) {
    setName(event.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerName = (
      <input type="text" required defaultValue={name} onChange={handleName} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{btnCaption}</button>
    </li>
  );
}
