import React from 'react';
import CalculatePropertyStats from './CalculatePropertyStats';

const FlavanoidsStats = ({data=[]}) => {
    console.log("data>>@FlavanoidsStats>", data)
    return (
        <CalculatePropertyStats 
            data={data}
            propertyName={"Flavanoids"}
        />
    )
}

export default FlavanoidsStats;