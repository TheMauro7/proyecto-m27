import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const searchTerm = search.trim();

        if (searchTerm) {
            onSearch(searchTerm);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Busca un artista..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit">
                Buscar
            </button>
        </form>
    );
};

export default SearchBar;