import React from "react";
import { FILTER } from "../App";

function Search(props) {
    const { handleInputChange, search, activeFilter, handleFilterChange } = props;
    const filterNames = Object.values(FILTER);

    return (
        <form action="" name="babyNamePickerForm">
            <div className="search">
                <input type="text" placeholder="Search for a name..." className="textField" value={search}
                       onChange={handleInputChange}/>
                {filterNames.map((filter) => (
                    <button type="button"
                            className={`searchBtn searchBtn--${filter} ${activeFilter === filter ? "active" : null}`}
                            onClick={() => handleFilterChange(filter)}>{filter}</button>
                ))
                }
            </div>
        </form>
    );
}

export default Search;