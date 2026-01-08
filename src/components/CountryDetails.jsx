function CountryDetails({ country, onClose }) {
  return (
    <div className="country-details">
      <h2>{country.name}</h2>
      <img src={country.flag} alt={country.name} />
      <div className="country-details-info">
        <p><strong>Capital:</strong> {country.capital}</p>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Languages:</strong> {country.languages}</p>
      </div>
      <button className="close-btn" onClick={onClose}>Close</button>
    </div>
  )
}

export default CountryDetails
