import React from "react";
import NamesItem from "./NamesItem";

function Favourites(props) {
    const { data, deleteFromFavourite } = props;
    return (
        <div className="favourites">
            <span className="favourites_title">Favourites:{!data.length ? " Click some names below to add to your favourites..." : ""}</span>
            <span className="favourites_list">
                {data.map((name) => <NamesItem key={name.id} item={name} handleClick={deleteFromFavourite}/>)}</span>
        </div>
    );
}

export default Favourites;