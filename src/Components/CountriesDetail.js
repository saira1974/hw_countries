import React from 'react';

const CountriesDetail = ({selectedCountries}) => {
    return (
        <div>
            <h3>{selectedCountries.name}</h3>
            <p>{selectedCountries.capital}</p>
            <p>{selectedCountries.population}</p>
            <p>{selectedCountries.lanuages}</p>
        </div>
    )

}

export default CountriesDetail;