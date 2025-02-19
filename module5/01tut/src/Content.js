const Content = () => {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Destin'];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }

  const handleClick = () => {
    console.log('CLICKED');
  }
  const handleClickTwo = (name) => {
    console.log(`${name} was clicked`);
  }
  const handleClickThree = (e) => {
    console.log(e);
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {handleNameChange()}!
      </p>
      <button onClick={handleClick}>click it</button>
      <button onClick={() => handleClickTwo('Destin')}>click it</button>
      <button onClick={(e) => handleClickThree(e)}>click it</button>
    </main>
  )
}

export default Content