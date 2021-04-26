import React from 'react';
import './ListItem.css';

const ListItem = ({countries, onCountriesClick}) => {
  
  const handleClick = function(){
    onCountriesClick(countries);
  }
  
  return <li onClick={handleClick}>{countries.name}</li>
}

export default ListItem;