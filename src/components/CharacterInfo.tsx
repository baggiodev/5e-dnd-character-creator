import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { ChosenClass } from './CharacterInfo/ChosenClass';
import { Level } from './CharacterInfo/Level';



export const CharacterInfo = () => {
    const { hitPoints, subClass }: any = useContext(GlobalContext);

    return (
        <div className="char-info-container">
            <div>
                <h4>Chosen Class</h4>
                <ChosenClass />
            </div>
            <div>
                <h4>Level</h4>
                <Level />
            </div>
            <div>
                <h4>Hit Points</h4>
                <p>{hitPoints}</p>
            </div>
            <div>
                <h4>Subclass</h4>
                <p>{subClass}</p>
            </div>
        </div>
    )
}
