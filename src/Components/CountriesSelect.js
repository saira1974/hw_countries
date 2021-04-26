import React from 'react';

const CountriesSelector = ({countries, onCountriesSelected}) => {

    const handleChange = function(event){
        const chosenCountries = countries[event.target.value];
        onCountriesSelected(chosenCountries);
    }

    const countriesOptions = countries.map((countries, index) => {
        return <option value={index} key={index}>{countries.name}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Country</option>
            {countriesOptions}
        </select>
    )

}

export default CountriesSelector;