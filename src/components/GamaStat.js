import React from 'react';
import CalculatePropertyStats from './CalculatePropertyStats';

const GammaStats = ({data=[]}) => {
    return (
        <CalculatePropertyStats 
            data={data}
            propertyName={"Gamma"}
        />
    )
}

export default GammaStats;