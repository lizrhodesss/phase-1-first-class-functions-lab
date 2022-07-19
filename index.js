// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
return drivers.slice(0,2)
}
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2)
    }

    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    function createFareMultiplier(fare) {
        return function(multiplyer) {
           return fare * multiplyer
            }
    }
    // const fareDoubler = (fare) => {
    //     return function(multiplier) {
    //         return fare * multiplier

    const fareDoubler = createFareMultiplier(2)
    const fareTripler = createFareMultiplier(3)

    // function selectDifferentDrivers(Drivers, returnFirstTwoDrivers()) {
    //     return selectDifferentDrivers
    
    function selectDifferentDrivers(arrayOfDrivers, driversFunction) {
       return driversFunction(arrayOfDrivers)
    }