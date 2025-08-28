 function SearchBar({ value, onChange }) {
    
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={value}
      onChange={onChange}
      style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
    />
  );
}

export default SearchBar;