import React, { useState } from "react";
import {
    SearchForm,
    SearchInput,
    SearchButton,
} from "./styles";

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
        <SearchForm onSubmit={handleSubmit}>
            <SearchInput
                type="text"
                placeholder="Buscar artista..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <SearchButton type="submit">
                Buscar
            </SearchButton>
        </SearchForm>
    );
};

export default SearchBar;