import React from "react";
import NamesItem from "./NamesItem";

function Favourites(props) {
    const { data, deleteFromFavourite } = props;
    return (
        <div className="favourites">
            <span className="favourites_title">Favourites:</span>
            <span className="favourites_list">{data.map((name) => <NamesItem item={name} handleClick={deleteFromFavourite}/>)
            }</span>
        </div>
    );
}

export default Favourites;