import React from 'react';
import { useContext } from 'react';
import { categoryContex } from '../../App';
import { useEffect } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';
import { useState } from 'react';

const Country = () => {
    const [category] = useContext(categoryContex);
    const [country, setCountry] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then (data => {
            const matchedCountrys = data.filter(pd => pd.region.toLowerCase() === category.toLowerCase());
            setCountry(matchedCountrys);
        })   
    }, [category])
    return (
        <div>
            <h1>Find Countries: {country.length}</h1>
            {
                country.map(country => <CountryDetail country={country} key={country.alpha3Code}></CountryDetail>)
            }
        </div>
    );
};

export default Country;