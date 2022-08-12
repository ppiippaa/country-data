const WeatherDisplay = ({country, weatherObj}) => {

    const formatDescription = (description) => {
        const formattedDescription = description.replace(/-/gi, ' ');
        return formattedDescription[0].toUpperCase() + formattedDescription.substring(1);
    }

    const formatSuntime = (suntime) => {
        return suntime.substring(11,19)
    }

    const handleNullStat = (stat) => {
       return stat === null ? 'Not available' : stat
    }

    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            <ul>
                <li>Description: {handleNullStat(formatDescription(weatherObj.icon))}</li>
                <li>Temperature: {weatherObj.temp} degrees</li>
                <li>Cloud cover: {handleNullStat(weatherObj.cloudcover)}</li>
                <li>Precipitation: {handleNullStat(weatherObj.precip)}</li>
                <li>Humidity: {handleNullStat(weatherObj.humidity)}</li>
                <li>Sunrise: {handleNullStat(formatSuntime(weatherObj.sunrise))}</li>
                <li>Sunset: {handleNullStat(formatSuntime(weatherObj.sunset))}</li>
                <li>Moon phase: {handleNullStat(weatherObj.moonphase)}</li>
                <li>(Moon phases: 0 = new moon, 0.5 = full moon, 1 = waning crescent)</li>
            </ul>
        </div>
    )
}

export default WeatherDisplay;