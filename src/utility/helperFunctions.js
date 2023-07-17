function calculateGamma(data) {
  return data.map(item => {
    const gamma = (parseFloat(item.Ash) * parseFloat(item.Hue)) / parseFloat(item.Magnesium);
    return {
      ...item,
      Gamma: isNaN(gamma) ? 0 : gamma,
    };
  });
}

function calculateClassMean({className, propertyData, propertyName}) {
  const classData = propertyData.filter(item => item.Alcohol === className);
  const propertySum = classData.reduce((sum, item) => sum + parseFloat(item[propertyName]), 0);
  const classMean = classData.length ? (propertySum / classData.length) : 0;
  return isNaN(classMean) ? "N/A" : classMean.toFixed(3);
}

function calculateClassMedian({className, propertyData, propertyName}) {
  const classData = propertyData.filter(item => item.Alcohol === className);
  const propertyValues = classData.map(item => parseFloat(item[propertyName]));
  const sortedProperty = propertyValues.sort();
  const middleIndex = Math.floor(sortedProperty.length / 2);
  if (sortedProperty.length % 2 === 0) {
    const median = (sortedProperty[middleIndex - 1] + sortedProperty[middleIndex]) / 2;
    return isNaN(median) ? "N/A" : median.toFixed(3);
  } else {
    const median = sortedProperty[middleIndex];
    return isNaN(median) ? "N/A" : median.toFixed(3);
  }
}

function calculateClassMode({className, propertyData, propertyName}) {
  const classData = propertyData.filter(item => item.Alcohol === className);
  const propertyValues = classData.map(item => item[propertyName]);
  const countMap = {};
  let maxCount = 0;
  let modes = [];

  for (let value of propertyValues) {
    countMap[value] = (countMap[value] || 0) + 1;
    if (countMap[value] > maxCount) {
      maxCount = countMap[value];
      modes = [(value).toFixed(3)];
    } else if (countMap[value] === maxCount && !modes.includes(value)) {
      modes.push((value).toFixed(3));
    }
  }

  return modes.length > 0 ? modes.join(", ") : "N/A";
}

export {calculateGamma, calculateClassMean, calculateClassMedian, calculateClassMode} 