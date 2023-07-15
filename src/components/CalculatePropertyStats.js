import React from 'react';
import { calculateClassMean, calculateClassMedian, calculateClassMode, calculateGamma } from '../utility/helperFunctions';
import './style.css';

function CalculatePropertyStats({data=[], propertyName}) {
    const classes = [...new Set(data && data.map(item => item.Alcohol))];
    const propertyData = propertyName === "Flavanoids" ? data : calculateGamma(data);
    return (
        <table>
        <thead>
            <tr>
            <th>Measure</th>
            {classes.map(className => (
                <th key={className}>Class {className}</th>
            ))}
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>{propertyName} Mean</td>
            {classes.map(className => (
                <td key={className}>{calculateClassMean({className, propertyData, propertyName})}</td>
            ))}
            </tr>
            <tr>
            <td>{propertyName} Median</td>
            {classes.map(className => (
                <td key={className}>{calculateClassMedian({className, propertyData, propertyName})}</td>
            ))}
            </tr>
            <tr>
            <td>{propertyName} Mode</td>
            {classes.map(className => (
                <td key={className}>{calculateClassMode({className, propertyData, propertyName})}</td>
            ))}
            </tr>
        </tbody>
        </table>
    );
}

export default CalculatePropertyStats;