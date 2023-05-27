export const convertToFloat = (value: string): number => {
  // Extract the numbers using regex
  const regexPattern = /[\d,.]+/;
  const match = value.match(regexPattern);

  if (match) {
    // Remove commas and parse the matched number as a float
    const cleanedValue = match[0].replace(/,/g, '');
    const floatValue = parseFloat(cleanedValue);

    // Return the float value as a number
    return floatValue;
  }

  // Return NaN if no valid number is found
  return NaN;
}