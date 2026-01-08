function RegionFilter({ value, onChange }) {
  const regions = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania"
  ];

  return (
    <select
      className="region-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  )
}

export default RegionFilter
