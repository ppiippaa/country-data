const CountryInfo = ({country: {languages, currencies, name, capital, flags: {png}, population, region, demonym}}) => {
    const displayLanguages = () => Object.values(languages).map(language => <li key={language.name}>{language.name}</li>);
    const displayCurrencies = () => Object.values(currencies).map(currency => <li key={currency.name}>{currency.name}</li>)

    return (
        <div>
            <h2>{name}</h2>
            <p>Region: {region}</p>
            <p>Capital City: {capital}</p>
            <p>Population: {population} inhabitants</p>
            <p>Languages:</p>
            <ul>{displayLanguages()}</ul>
            <p>Currencies:</p>
            <ul>{displayCurrencies()}</ul>
            <img
                src={png}
                alt={`${demonym} flag`}
            />
        </div>
    )
}

export default CountryInfo;