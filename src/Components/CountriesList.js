import React from 'react';
import ListItem from './ListItem';

const CountriesList = ({countries, onCountriesClick}) => {

    const countriesItems = countries.map((countries, index) => {
      return <ListItem countries={countries} key={index} onCountriesClick={onCountriesClick}/>
    })

  return (
    <div>
    <ul>
      {countriesItems}
    </ul>
  </div>
  )
}

export default CountriesList;