import useCountries from "../hooks/useCountries";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import CountryList from "../components/CountryList";
import CountryDetails from "../components/CountryDetails";

const Home = () => {
  const {
    filteredCountries,
    search,
    setSearch,
    region,
    setRegion,
    selectedCountry,
    setSelectedCountry,
    loading,
    error,
  } = useCountries();

  if (loading) return <p className="loading">Loading countries...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <div className="controls">
        <SearchBar value={search} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>

      <CountryList
        countries={filteredCountries}
        onSelect={setSelectedCountry}
      />

      {selectedCountry && (
        <>
          <div className="overlay" onClick={() => setSelectedCountry(null)} />
          <CountryDetails
            country={selectedCountry}
            onClose={() => setSelectedCountry(null)}
          />
        </>
      )}
    </div>
  );
};

export default Home;
