import React from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = ( {countries} ) => {
    const { id } = useParams()
    const targetCountry = countries.find((country) => 
        country.alpha3Code === id);
    let alpha2CodeLC = targetCountry.alpha2Code.toLowerCase()
    let tinyFlag = `https://flagpedia.net/data/flags/icon/72x54/${alpha2CodeLC}.png`
    
        return(
            <div className='details'>
                <h2>{targetCountry.name.common}</h2>
                <p>Capital: {targetCountry.capital}</p>
                <p>Currency: {targetCountry.currency}</p>
                <img src= {tinyFlag} alt="country flag" />
            </div>
        )

    }

export default CountryDetails