import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

export const Level = () => {
    const { level, changeLevel }: any = useContext(GlobalContext);

    return (
        <select value={level} onChange={(e) => changeLevel(+e?.target?.value)} placeholder="Select Level...">
            {Array.from({length: 20}, (_, i) => i + 1).map((val: number) => (
            <option key={val} value={val}>{val}</option>
            ))}
        </select>  
    )
}
