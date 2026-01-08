import CountryCard from "./CountryCard"

function CountryList({ countries, onSelect }) {
  return (
    <div className="country-grid">
      {countries.map((country) => (
        <CountryCard
          key={country.name}
          country={country}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

export default CountryList
