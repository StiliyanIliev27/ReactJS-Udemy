export default function Input({ labelFor, labelName, value, onInputChange }) {
  function handleChange(event) {
    const newValue = event.target.value;

    onInputChange(labelFor, newValue === "" ? "" : +newValue);
  }

  return (
    <div>
      <label for={labelFor}>{labelName}</label>
      <input
        type="number"
        name={labelFor}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
}
