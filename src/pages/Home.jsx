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

  const start = totalCountries === 0 ? 0 : (currentPage - 1) * 12 + 1;
  const end = Math.min(currentPage * 12, totalCountries);

  return (
    <div>
      <div className="controls">
        <SearchBar value={search} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p className="loading">Loading countries...</p>
      ) : (
        <>
          <p className="results-count">
            Showing {start}-{end} of {totalCountries} countries
          </p>

          {countries.length > 0 ? (
            <>
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
            </>
          ) : (
            <div className="no-results">
              <p>No countries found matching your criteria.</p>
            </div>
          )}
        </>
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
