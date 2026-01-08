import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countryApi";

const useCountries = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("All");
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        getAllCountries().then((res) => setCountries(res.data))
            .catch(() => setError("Failed to load coutries"))
            .finally(() => setLoading(false))
    }, [])

    const filteredCountries = countries.filter((country) => {
        const matchName = country.name.toLowerCase().includes(search.toLowerCase())

        const matchRegion = region === "All" || country.region === region;

        return matchName && matchRegion;

    })

    return {
        filteredCountries,
        search,
        setSearch,
        region,
        setRegion,
        selectedCountry,
        setSelectedCountry,
        loading,
        error
    }
}


export default useCountries;