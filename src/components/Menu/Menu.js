import React from 'react';

const Menu = () => {
  return (
    <div>
      <form>
        <h2>Filter By Color:</h2>
        <input type='checkbox' name='white-checkbox' id='color-W' />
        <label htmlFor='white-checkbox'>White</label>
        <input type='checkbox' name='blue-checkbox' id='color-U' />
        <label htmlFor='blue-checkbox'>Blue</label>
        <input type='checkbox' name='black-checkbox' id='color-B' />
        <label htmlFor='black-checkbox'>Black</label>
        <input type='checkbox' name='red-checkbox' id='color-R' />
        <label htmlFor='red-checkbox'>Red</label>
        <input type='checkbox' name='green-checkbox' id='color-G' />
        <label htmlFor='green-checkbox'>Green</label>
        <h2>Filter By Rarity:</h2>
        <input type='checkbox' name='common-checkbox' id='common' />
        <label htmlFor='common-checkbox'>Common</label>
        <input type='checkbox' name='uncommon-checkbox' id='uncommon' />
        <label htmlFor='uncommon-checkbox'>Uncommon</label>
        <input type='checkbox' name='rare-checkbox' id='rare' />
        <label htmlFor='rare-checkbox'>Rare</label>
        <input type='checkbox' name='mythic-checkbox' id='mythic' />
        <label htmlFor='mythic-checkbox'>Mythic</label>
        <h2>Filter By Set:</h2>
      </form>
    </div>
  );
};

export default Menu;
