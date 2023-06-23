import React from "react";
import { ReactComponent as FemaleIcon } from "../icons/female.svg";
import { ReactComponent as MaleIcon } from "../icons/male.svg";
import { FILTER } from "../App";

function Search(props) {
    const { handleInputChange, search, activeFilter, handleFilterChange } = props;
    const filterNames = Object.values(FILTER);

    const FILTER_ICONS = {
        [FILTER.ALL]: "ALL",
        [FILTER.FEMALE]: <FemaleIcon/>,
        [FILTER.MALE]: <MaleIcon/>,
    };

    return (
        <form action="" name="babyNamePickerForm">
            <div className="search">
                <input type="text" placeholder="Search for a name..." className="textField" value={search}
                       onChange={handleInputChange}/>
                {filterNames.map((filter) => (
                    <button type="button"
                            className={`searchBtn searchBtn--${filter} ${activeFilter === filter ? "active" : null}`}
                            onClick={() => handleFilterChange(filter)}>{FILTER_ICONS[filter]}</button>
                ))
                }
            </div>
        </form>
    );
}

export default Search;