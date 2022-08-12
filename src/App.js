import axios from 'axios';
import CountryInfo from "./components/CountryInfo";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import {useState, useEffect} from 'react';


const App = () => {
    const [filter, setFilter] = useState('');
    const [countries, setCountries] = useState([]);
    const [weather, setWeather] = useState({})


    // get country data when filter is set
    useEffect(() => {
        if (filter) {
            axios
                .get(`https://restcountries.com/v2/name/${filter}`)
                .then(response => {
                    console.log('data fetched')
                    setCountries(response.data)
                    console.log('countries =', countries)
                })
        }
    }, [filter])


    useEffect(() => {
        let city;

        if (filter) {
            city = countries[0]['capital'].toString();

            axios
                .get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${city}&aggregateHours=1&forecastDays=1&unitGroup=metric&contentType=json&iconSet=icons1&key=${process.env.REACT_APP_API_KEY}`)
                .then(response => {
                        setWeather(response.data.locations[`${city}`]['currentConditions']);
                        console.log(weather)
                    }
                )
        }
    }, [countries])


    // set filter from user search term
    const handleFilter = (event) => {
        setFilter(event.target.value);
    }

    // show country on button click
    const showCountryInfo = (country) => {
        setFilter(country);
    }

    return (
        <>
            <SearchBar
                placeholder='Search a country'
                filter={filter}
                handleFilter={handleFilter}
            />
            {countries.length > 10 && <h3>Too many countries, please refine search</h3>}
            {countries.length > 1 && countries.length <= 10 && (
                <div>
                    {countries.map(country =>
                        <div key={country.name}>
                            <p>{country.name}
                                <button onClick={() => showCountryInfo(country.name)}>show info</button>
                            </p>
                        </div>
                    )}
                </div>
            )}
            {countries.length === 1 && (
                <div>
                    {countries.map(country =>
                        <div key={country.name}>
                            <CountryInfo  country={country}/>
                            <WeatherDisplay country={country} weatherObj={weather} />
                        </div>)}
                </div>
            )}


        </>
    )
}

export default App;

