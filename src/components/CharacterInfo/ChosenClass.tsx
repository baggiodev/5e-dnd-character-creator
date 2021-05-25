import React, { useContext, useEffect, useState } from 'react'
import { getClass, getClasses } from '../../api/api';
import { GlobalContext } from '../../context/GlobalState';

export const ChosenClass = () => {
    const { chosenClass, setClass, setClassInfo }: any = useContext(GlobalContext);
    const [availableClasses, setAvailableClasses] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getClasses();
            setAvailableClasses(result);
        }
        fetchData();
    }, [])
    // Listens to whenever chosenClass gets changed and updates classInfo
    useEffect(() => {
        const fetchData = async () => {
            const result = await getClass(chosenClass);
            setClassInfo(result);
        }
        fetchData();
        // eslint-disable-next-line
    }, [chosenClass])

    return (
        <select value={chosenClass} onChange={(e) => setClass(e?.target?.value)} placeholder="Select Class...">
            <option value="" disabled>Select your option</option>
            {availableClasses.map(({name}) => (
                <option key={name} value={name}>{name}</option>
            ))}
        </select>
    )
}
