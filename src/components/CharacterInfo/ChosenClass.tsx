import React, { useContext, useEffect, useState } from 'react'
import { getClass, getClasses } from '../../api/api';
import { GlobalContext } from '../../context/GlobalState';

export const ChosenClass = () => {
    const { chosenClass, changeClass }: any = useContext(GlobalContext);
    const [availableClasses, setAvailableClasses] = useState<any[]>([]);
    const [ classInfo, setClassInfo ] = useState({});

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
            console.log(classInfo);
        }
        fetchData();
    }, [chosenClass])

    return (
        <select value={chosenClass} onChange={(e) => changeClass(e?.target?.value)} placeholder="Select Class...">
            {availableClasses.map(({name}) => (
                <option key={name} value={name}>{name}</option>
            ))}
        </select>
    )
}
