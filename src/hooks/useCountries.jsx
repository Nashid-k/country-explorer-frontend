import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countryApi";

const useCountries = () => {
    const [countries, setCountries] = useState([]);
    const [totalCountries, setTotalCountries] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("All");
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    
    const [debouncedSearch, setDebouncedSearch] = useState(search);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);
        return () => clearTimeout(timer);
    }, [search]);

    
    useEffect(() => {
        setCurrentPage(1);
    }, [debouncedSearch, region]);

    
    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true);
            try {
                const response = await getAllCountries({
                    page: currentPage,
                    limit: 12,
                    search: debouncedSearch,
                    region: region === "All" ? "" : region
                });

                setCountries(response.data.countries);
                setTotalCountries(response.data.total);
                setTotalPages(response.data.totalPages);
                setError(null);
            } catch (err) {
                setError("Failed to load countries");
                setCountries([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCountries();
    }, [currentPage, debouncedSearch, region]);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const nextPage = () => goToPage(currentPage + 1);
    const prevPage = () => goToPage(currentPage - 1);

    return {
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
    }
}

export default useCountries;