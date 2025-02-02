import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function toggleEdit() {
    setIsEditing((editing) => !editing);
  }

  function toggleName(event) {
    setName(event.target.value);
  }

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    playerName = (
      <input type="text" required defaultValue={name} onChange={toggleName} />
    );
    btnCaption = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEdit}>{btnCaption}</button>
    </li>
  );
}
