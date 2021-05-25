import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Feature } from './Feature';

export const Features = () => {
    const { classInfo, level } = useContext(GlobalContext);
    const ofLeveledFeatures = classInfo?.classFeature?.filter((feature) => {
        return feature.level <= (level ?? 0);
    })
    const notLeveledFeatures = classInfo?.classFeature?.filter((feature) => {
        return feature.level > (level ?? 0);
    })
    return (
        <div style={{width: "100%", overflow: "auto" }}>
            {/* <pre>{JSON.stringify(classInfo, null, 4)}</pre> */}
            {/* Features of level */}
            <div>
                <h1>Available Features ({ofLeveledFeatures?.length}) </h1>
                {ofLeveledFeatures?.map((f, i) => {
                    return <Feature key={f.name + i} feature={f} />
                })}
            </div>
            <br/>
            <div>
                <h1> Available at Higher Levels ({notLeveledFeatures?.length}) </h1>
                {notLeveledFeatures?.map((f, i) => {
                    return <Feature key={f.name + i} feature={f} />
                })}
            </div>
        </div>
    )
}
