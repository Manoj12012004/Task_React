import React from "react";

const SearchBar = ({ search }) => {
    return (
        <div className="search">
            <input 
                type="text" 
                placeholder="Search..."  
                onChange={(e) => search(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;