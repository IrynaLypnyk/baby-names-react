import { useState } from "react";
import "./App.css";
import Favourites from "./components/Favourites";
import NamesItem from "./components/NamesItem";
import Search from "./components/Search";
import data from "./names.json";

const sortNames = (names, key) => {
    return names.sort((a, b) => a[key].localeCompare(b[key]));
};

export const FILTER = {
    ALL: "all",
    FEMALE: "f",
    MALE: "m",
};

function App() {
    const initialData = sortNames(data, "name");
    const [search, setSearch] = useState("");
    const [favourites, setFavourites] = useState([]);
    const [namesShown, setNamesShown] = useState(initialData);
    const [activeFilter, setActiveFilter] = useState(FILTER.ALL);
    const [filteredFavourites, setFilteredFavourites] = useState([]);

    const handleInputChange = (ev) => {
        const searchValue = ev.target.value;
        setSearch(searchValue);
        if (!searchValue) {
            setSearch("");
            setNamesShown(initialData);
        } else {
            const namesWithoutFavourites = initialData.filter(((item) => (
                    favourites.every((favItem) => favItem.id !== item.id)
                )));
            const filteredNames = namesWithoutFavourites.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));
            setNamesShown(filteredNames);
        }
    };

    const addToFavourites = (item) => {
        setFavourites([...favourites, item]);
        setFilteredFavourites([...favourites, item]);
        setNamesShown(namesShown.filter((name) => name.id !== item.id));
    };

    const deleteFromFavourites = (item) => {
        setFavourites(favourites.filter((name) => name.id !== item.id));
        setFilteredFavourites(favourites.filter((name) => name.id !== item.id));
        const sortedNames = sortNames([...namesShown, item], "name");
        setNamesShown(sortedNames);
    };

    const handleFilterChange = (filterName) => {
        setActiveFilter(filterName);
        if (filterName === FILTER.ALL) {
            setNamesShown(initialData);
            //setFilteredFavourites(favourites);
        } else {
            setNamesShown(initialData.filter((name) => name.sex === filterName));
            //setFilteredFavourites(favourites.filter((name) => name.sex === filterName));
        }
    };

    return (
        <div className="App">
            <div className="content">
                <Search handleInputChange={handleInputChange} search={search} activeFilter={activeFilter}
                        handleFilterChange={handleFilterChange}/>
                <Favourites data={filteredFavourites} deleteFromFavourite={deleteFromFavourites}/>
                <div className="names_list">
                    {namesShown.map((name) => <NamesItem item={name} handleClick={addToFavourites}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;