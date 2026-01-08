function CountryCard({ country, onSelect }) {
  return (
    <div className="country-card" onClick={() => onSelect(country)}>
      <img src={country.flag} alt={country.name} />
      <div className="country-card-info">
        <h3>{country.name}</h3>
        <p>{country.region}</p>
      </div>
    </div>
  )
}

export default CountryCard
