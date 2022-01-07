import axios from 'axios';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  setColorFilters,
  selectColorFilters,
  selectRarityFilters,
  setRarityFilters,
  selectSetFilters,
  setSetFilters,
} from '../FilterContainer/FilterContainerSlice';
import {
  setSearchValue,
  selectSearchValue,
} from '../SearchInput/searchInputSlice';
import { setCardData } from '../CardContainer/CardContainerSlice';
const StyledMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledForm = styled.form``;
const StyledInput = styled.input`
  display: inline-block;
`;
const StyledLabel = styled.label`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #111;
`;

const Menu = () => {
  const name = useSelector(selectSearchValue);
  const rarity = useSelector(selectRarityFilters);
  const set = useSelector(selectSetFilters);
  const colors = useSelector(selectColorFilters);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const filters = { name, colors, rarity, set };
    let urlData = new URLSearchParams({});
    for (const [key, value] of Object.entries(filters)) {
      if (value && value.length > 0) {
        urlData.append(key, value);
      }
    }
    const results = await axios.get(
      `http://localhost:3002/api/cards/test?${urlData}`
    );
    dispatch(setCardData(results.data.docs));
  };

  const handleColorFilterChange = (e) => {
    const color = e.target.dataset.color;
    handleColorFilter(color);
  };

  const handleColorFilter = (color) => {
    if (colors.includes(color)) {
      const newArray = colors.filter((c) => c !== color);
      dispatch(setColorFilters(newArray));
    } else {
      dispatch(setColorFilters([...colors, color]));
    }
  };

  const handleRarityChange = (e) => {
    const rarityFilter = e.target.id;
    if (rarity.includes(rarityFilter)) {
      const newArray = rarity.filter((r) => r !== rarityFilter);
      dispatch(setRarityFilters(newArray));
    } else {
      dispatch(setRarityFilters([...rarity, rarityFilter]));
    }
  };
  return (
    <StyledMenu>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor='name'>Name: </StyledLabel>
        <StyledInput
          type='text'
          name='name'
          id='name'
          value={name}
          onChange={(e) => dispatch(setSearchValue(e.target.value))}
        />
        <h2>Filter By Color:</h2>
        <input
          type='checkbox'
          name='white-checkbox'
          id='color-W'
          data-color='W'
          onChange={(e) => handleColorFilterChange(e)}
        />

        <StyledLabel htmlFor='white-checkbox'>White</StyledLabel>
        <input
          type='checkbox'
          name='blue-checkbox'
          id='color-U'
          data-color='U'
          onChange={(e) => handleColorFilterChange(e)}
        />
        <StyledLabel htmlFor='blue-checkbox'>Blue</StyledLabel>
        <input
          type='checkbox'
          name='black-checkbox'
          id='color-B'
          data-color='B'
          onChange={(e) => handleColorFilterChange(e)}
        />
        <StyledLabel htmlFor='black-checkbox'>Black</StyledLabel>
        <input
          type='checkbox'
          name='red-checkbox'
          id='color-R'
          data-color='R'
          onChange={(e) => handleColorFilterChange(e)}
        />
        <StyledLabel htmlFor='red-checkbox'>Red</StyledLabel>
        <input
          type='checkbox'
          name='green-checkbox'
          id='color-G'
          data-color='G'
          onChange={(e) => handleColorFilterChange(e)}
        />
        <StyledLabel htmlFor='green-checkbox'>Green</StyledLabel>
        <h2>Filter By Rarity:</h2>
        <input
          type='checkbox'
          name='common-checkbox'
          id='common'
          onChange={(e) => handleRarityChange(e)}
        />
        <StyledLabel htmlFor='common-checkbox'>Common</StyledLabel>
        <input
          type='checkbox'
          name='uncommon-checkbox'
          id='uncommon'
          onChange={(e) => handleRarityChange(e)}
        />
        <StyledLabel htmlFor='uncommon-checkbox'>Uncommon</StyledLabel>
        <input
          type='checkbox'
          name='rare-checkbox'
          id='rare'
          onChange={(e) => handleRarityChange(e)}
        />
        <StyledLabel htmlFor='rare-checkbox'>Rare</StyledLabel>
        <input
          type='checkbox'
          name='mythic-checkbox'
          id='mythic'
          onChange={(e) => handleRarityChange(e)}
        />
        <StyledLabel htmlFor='mythic-checkbox'>Mythic</StyledLabel>
        <h2>Filter By Set:</h2>
        <StyledLabel htmlFor='set'>Set: </StyledLabel>
        <select
          name='set'
          onChange={(e) => dispatch(setSetFilters(e.target.value))}
        >
          <option value=''>None</option>
          <option value='LEA'>Limited Edition Alpha</option>
          <option value='LEB'>Limited Edition Beta</option>
          <option value='2ED'>Unlimited Edition</option>
          <option value='3ED'>Revised Edition</option>
          <option value='4ED'>Fourth Edition</option>
          <option value='5ED'>Fifth Edition</option>
          <option value='6ED'>Sixth Edition</option>
          <option value='7ED'>Seventh Edition</option>
          <option value='8ED'>Eigth Edition</option>
          <option value='9ED'>Ninth Edition</option>
          <option value='10E'>Tenth Edition</option>
          <option value='M10'>Magic 2010</option>
          <option value='M11'>Magic 2011</option>
          <option value='M12'>Magic 2012</option>
          <option value='M13'>Magic 2013</option>
          <option value='M14'>Magic 2014</option>
          <option value='M15'>Magic 2015</option>
          <option value='ORI'>Magic Origins</option>
          <option value='M19'>Core Set 2019</option>
          <option value='M20'>Core Set 2020</option>
          <option value='M21'>Core Set 2021</option>
          <option value='ARN'>Arabian Nights</option>
          <option value='ATQ'>Antiquities</option>
          <option value='LEG'>Legends</option>
          <option value='DRK'>The Dark</option>
          <option value='FEM'>Fallen Empires</option>
          <option value='ICE'>Ice Age</option>
          <option value='HML'>Homelands</option>
          <option value='ALL'>Alliances</option>
          <option value='MIR'>Mirage</option>
          <option value='VIS'>Visions</option>
          <option value='WTH'>Weatherlight</option>
          <option value='TMP'>Tempest</option>
          <option value='STH'>Stronghold</option>
          <option value='EXO'>Exodus</option>
          <option value='USG'>Urza's Saga</option>
          <option value='ULG'>Urza's Legacy</option>
          <option value='UDS'>Urza's Destiny</option>
          <option value='MMQ'>Mercadian Masques</option>
          <option value='NEM'>Nemesis</option>
          <option value='PCY'>Prophecy</option>
          <option value='INV'>Invasion</option>
          <option value='PLS'>Planeshift</option>
          <option value='APC'>Apocalypse</option>
          <option value='ODY'>Odyssey</option>
          <option value='TOR'>Torment</option>
          <option value='JUD'>Judgement</option>
          <option value='ONS'>Onslaught</option>
          <option value='LGN'>Legions</option>
          <option value='SCG'>Scourge</option>
          <option value='MRD'>Mirrodin</option>
          <option value='DST'>Darksteel</option>
          <option value='5DN'>Fifth Dawn</option>
          <option value='CHK'>Champions of Kamigawa</option>
          <option value='BOK'>Betrayers of Kamigawa</option>
          <option value='SOK'>Saviors of Kamigawa</option>
          <option value='RAV'>Ravnica: City Of Guilds</option>
          <option value='GPT'>Guildpact</option>
          <option value='DIS'>Dissension</option>
          <option value='CSP'>Coldsnap</option>
          <option value='TSP'>Time Spiral</option>
          <option value='PLC'>Planar Chaos</option>
          <option value='FUT'>Future Sight</option>
          <option value='LRW'>Lorwyn</option>
          <option value='MOR'>Morningtide</option>
          <option value='SHM'>Shadowmoor</option>
          <option value='EVE'>Eventide</option>
          <option value='ALA'>Shards of Alara</option>
          <option value='CON'>Conflux</option>
          <option value='ARB'>Alara Reborn</option>
          <option value='ZEN'>Zendikar</option>
          <option value='WWK'>Worldwake</option>
          <option value='ROE'>Rise of the Eldrazi</option>
          <option value='SOM'>Scars of Mirrodin</option>
          <option value='MBS'>Mirrodin Besieged</option>
          <option value='NPH'>New Phyrexia</option>
          <option value='ISD'>Innistrad</option>
          <option value='DKA'>Dark Ascension</option>
          <option value='AVR'>Avacyn Restored</option>
          <option value='RTR'>Return to Ravnica</option>
          <option value='GTC'>Gatecrash</option>
          <option value='DGM'>Dragon's Maze</option>
          <option value='THS'>Theros</option>
          <option value='BNG'>Born of the Gods</option>
          <option value='JOU'>Journey into Nyx</option>
          <option value='KTK'>Khans of Tarkir</option>
          <option value='FRF'>Fate Reforged</option>
          <option value='DTK'>Dragons of Tarkir</option>
          <option value='BFZ'>Battle for Zendikar</option>
          <option value='OGW'>Oath of the Gatewatch</option>
          <option value='SOI'>Shadows over Innistrad</option>
          <option value='EMN'>Eldritch Moon</option>
          <option value='KLD'>Kaladesh</option>
          <option value='AER'>Aether Revolt</option>
          <option value='AKH'>Amonkhet</option>
          <option value='HOU'>Hour of Devastation</option>
          <option value='XLN'>Ixalan</option>
          <option value='RIX'>Rivals of Ixalan</option>
          <option value='DOM'>Dominaria</option>
          <option value='GRN'>Guilds of Ravnica</option>
          <option value='RNA'>Ravnica Allegiance</option>
          <option value='WAR'>War of the Spark</option>
          <option value='ELD'>Throne of Eldraine</option>
          <option value='THB'>Theros Beyond Death</option>
          <option value='IKO'>Ikoria: Lair of Behemoths</option>
          <option value='ZNR'>Zendikar Rising</option>
          <option value='KHM'>Kaldheim</option>
          <option value='STX'>Strixhaven: School of Mages</option>
          <option value='AFR'>Adventures in the Forgotten Realms</option>
          <option value='MID'>Innistrad: Midnight Hunt</option>
          <option value='VOW'>Innistrad: Crimson Vow</option>
        </select>
        <button>Filter</button>
      </StyledForm>
    </StyledMenu>
  );
};

export default Menu;
