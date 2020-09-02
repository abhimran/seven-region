import React from 'react';
import './CountryDatail.css'

const CountryDetail = (props) => {
    const {name, flag, capital, population, timezones} = props.country;
    return (
        <div className="country-detail">
            <img src={flag} alt=""/>
            <h3>CountryName: {name}</h3>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Timezone: {timezones}</p>
        </div>
    );
};

export default CountryDetail;