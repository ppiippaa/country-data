const SearchBar = ({ placeholder, handleFilter, filter}) => {
    return  (
        <div>
            <h1>Search a country:</h1>
            <input
                type="text"
                onChange={handleFilter}
                placeholder={placeholder}
                // value={filter}
            />
        </div>
    )
}

export default SearchBar;