import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';

export const Level = () => {
    const { level, setLevel }: any = useContext(GlobalContext);

    return (
        <select value={level} onChange={(e) => setLevel(+e?.target?.value)} placeholder="Select Level...">
            <option value={0} disabled>Select your option</option>
            {Array.from({length: 20}, (_, i) => i + 1).map((val: number) => (
            <option key={val} value={val}>{val}</option>
            ))}
        </select>  
    )
}
