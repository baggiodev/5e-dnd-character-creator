import React, { useContext, useEffect, useState } from 'react'
import { getClasses } from '../../api/GetClasses';
import { GlobalContext } from '../../context/GlobalState';

export const ChosenClass = () => {
    const { chosenClass, changeClass }: any = useContext(GlobalContext);
    const [availableClasses, setAvailableClasses] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getClasses();
            setAvailableClasses(result);
        }
        fetchData();
    }, [])
    return (
        <select value={chosenClass} onChange={(e) => changeClass(e?.target?.value)} placeholder="Select Class...">
            {availableClasses.map(({name}) => (
                <option key={name} value={name}>{name}</option>
            ))}
        </select>
    )
}
