import { useState } from "react";

export default function Input({ labelFor, labelName }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <label for={labelFor}>{labelName}</label>
      <input type="number" name={labelFor} onChange={handleChange} required />
    </div>
  );
}
