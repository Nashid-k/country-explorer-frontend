import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countryApi";

const ITEMS_PER_PAGE = 12;

const useCountries = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("All");
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        getAllCountries().then((res) => setCountries(res.data))
            .catch(() => setError("Failed to load countries"))
            .finally(() => setLoading(false))
    }, [])

    // Reset to page 1 when search or region changes
    useEffect(() => {
        setCurrentPage(1);
    }, [search, region]);

    const filteredCountries = countries.filter((country) => {
        const matchName = country.name.toLowerCase().includes(search.toLowerCase())
        const matchRegion = region === "All" || country.region === region;
        return matchName && matchRegion;
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedCountries = filteredCountries.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const nextPage = () => goToPage(currentPage + 1);
    const prevPage = () => goToPage(currentPage - 1);

    return {
        countries: paginatedCountries,
        totalCountries: filteredCountries.length,
        search,
        setSearch,
        region,
        setRegion,
        selectedCountry,
        setSelectedCountry,
        loading,
        error,
        // Pagination
        currentPage,
        totalPages,
        goToPage,
        nextPage,
        prevPage
    }
}

export default useCountries;