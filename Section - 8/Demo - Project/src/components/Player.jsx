import { useState, useRef } from 'react';

export default function Player() {
  const inputName = useRef();
  const [name, setName] = useState('');

  function handleClick() {
    setName(inputName.current.value);
    inputName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : 'unknown entity'}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
