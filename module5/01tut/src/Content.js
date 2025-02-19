import { useState } from "react";

const Content = () => {
  const [name, setName] = useState('Job');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Destin', 'Job'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
  }

  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
    console.log(count);
  }
  const handleClickTwo = (name) => {
    console.log(count)
  }
  const handleClickThree = (e) => {
    console.log(e);
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {name}!
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>click it</button>
      <button onClick={handleClickTwo}>click it</button>
    </main>
  )
}

export default Content