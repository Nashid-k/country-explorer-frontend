import useCountries from "../hooks/useCountries";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import CountryList from "../components/CountryList";
import CountryDetails from "../components/CountryDetails";
import Pagination from "../components/Pagination";

const Home = () => {
  const {
    countries,
    totalCountries,
    search,
    setSearch,
    region,
    setRegion,
    selectedCountry,
    setSelectedCountry,
    loading,
    error,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage
  } = useCountries();

  if (loading) return <p className="loading">Loading countries...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <div className="controls">
        <SearchBar value={search} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>

      <p className="results-count">
        Showing {countries.length} of {totalCountries} countries
      </p>

      <CountryList
        countries={countries}
        onSelect={setSelectedCountry}
      />

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          onNext={nextPage}
          onPrev={prevPage}
        />
      )}

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
