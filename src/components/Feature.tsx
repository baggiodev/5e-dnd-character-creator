import React, { useState } from 'react'
import { PokedexClassFeature } from '../interfaces'

export const Feature = ({feature}: {feature: PokedexClassFeature}) => {
    const [displayFeature, setDisplayFeature] = useState(false);
    const handleOnClick = () => {
        setDisplayFeature(!displayFeature);
    };

    const handleDisplayFeature = () => {
        return displayFeature ? feature.entries.map((entry, i) => {
            if(typeof entry === "string") {
                return <p key={i}>{entry}</p>
            }
            return <p key={i}> {entry.type} </p>
        }) : null
    }

    return (
        <div style={{cursor: "pointer", background: "#eee", padding: "10px", display: "flex", justifyContent: "space-between", margin:"10px"}} onClick={() => handleOnClick()}>
            <h3 style={{ marginRight: "5px" }}>
                {feature.name} - {feature.level}
            </h3>
            <div>
                {handleDisplayFeature()}
            </div>
        </div>
    )
}
