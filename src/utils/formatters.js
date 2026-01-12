//to convert microns to inr
export function convertMicronsToINR (micronsValue,micronsPerUsd) {
    //first converting microns to usd
    const valueInUsd = micronsValue / micronsPerUsd
    //then assuming 1 USD = 90 rupees
    const USD_TO_INR = 90   
    //converting from usd to inr
    const valueInINR = USD_TO_INR * valueInUsd
    return (valueInINR).toFixed(2)  //returns upto 2 decimal places
}

//to convert milli seconds to seconds
export function convertToSeconds (milliSecondsValue) {
    const valueInSeconds = milliSecondsValue / 1000
    return valueInSeconds
}




