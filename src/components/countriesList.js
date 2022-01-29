import React from 'react'

const CountriesList = ( {countries} ) => {
    return(
        <div className="countriesList">
            {countries.map(country => (
                <a href={`/${country.alpha3Code}`}>
                {country.name.official}
                </a>
            ))}
        </div>
    )
}
export default CountriesList