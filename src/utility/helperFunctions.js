function calculateGamma(data) {
    return data.map(item => ({
      ...item,
      Gamma: (item.Ash * item.Hue) / item.Magnesium,
    }));
}

function calculateClassMean({className, propertyData, propertyName}) {
    const classData = propertyData.filter(item => item.Alcohol === className);
    const propertySum = classData.reduce((sum, item) => sum + item[propertyName], 0);
    const classMean = propertySum / classData.length;
    return classMean.toFixed(3);
}

function calculateClassMedian({className, propertyData, propertyName}) {
    const classData = propertyData.filter(item => item.Alcohol === className);
    const sortedProperty = classData.map(item => item[propertyName]).sort();
    const middleIndex = Math.floor(sortedProperty.length / 2);
    if (sortedProperty.length % 2 === 0) {
      const median = (sortedProperty[middleIndex - 1] + sortedProperty[middleIndex]) / 2;
      return median.toFixed(3);
    } else {
      return sortedProperty[middleIndex].toFixed(3);
    }
}

function calculateClassMode({className, propertyData, propertyName}) {
    const classData = propertyData.filter(item => item.Alcohol === className);
    const propertyMap = {};
    let maxCount = 0;
    let mode = null;
    classData.forEach(item => {
      if (propertyMap[item[propertyName]]) {
        propertyMap[item[propertyName]]++;
      } else {
        propertyMap[item[propertyName]] = 1;
      }
      if (propertyMap[item[propertyName]] > maxCount) {
        maxCount = propertyMap[item[propertyName]];
        mode = item[propertyName];
      }
    });
    return mode !== null ? mode.toFixed(3) : "No mode found";
}

export {calculateGamma, calculateClassMean, calculateClassMedian, calculateClassMode} 