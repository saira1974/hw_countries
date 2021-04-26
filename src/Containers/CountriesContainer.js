import React, { useState, useEffect } from 'react';
import CountriesList from '../components/CountriesList';
import CountriesDetail from '../components/CountriesDetail';
import CountriesSelector from '../components/CountriesSelect';
import './CountriesContainer.css';


const CountriesContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState(null);

    useEffect(() => {
      getCountries();
    }, [])

    const getCountries = function(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    const onCountriesClick = function(countries){
        setSelectedCountries(countries);

    }

    return (
        <div className="main-container">
            <CountriesSelector countries={countries} onCountriesSelected={onCountriesClick}/>
            {selectedCountries ? <CountriesDetail selectedCountries={selectedCountries} /> : null}
            
        </div>
    )
}

export default CountriesContainer;

