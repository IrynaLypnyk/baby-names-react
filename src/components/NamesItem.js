import React from "react";

function NamesItem(props) {
    const { item, item: { id, name, sex }, handleClick } = props;

    return (
        <span key={id} className={`names_item names_item--${sex}`} onClick={() => handleClick(item)}>{name}</span>
    );
}

export default NamesItem;