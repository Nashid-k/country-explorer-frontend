function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search countries..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default SearchBar
