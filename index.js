// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
 const array2 = array.slice(0, 2,);
 return array2;
 }
 const returnLastTwoDrivers = function (array) {
     const array2 = array.slice(2);
     return array2;
 }
 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 
 function createFareMultiplier(integer) {
    const expensive = function (fare) {return fare * integer};
    return expensive;
 }

 //const fareDoubler = createFareMultiplier() {}
 
const fareDoubler = createFareMultiplier(2); 
const fareTripler = createFareMultiplier(3);
/*function (doubler) {
     const doubler2 =  doubler * 2;
     return doubler2;
 }
 
 const fareTripler = function (tripler) {
     const Tripler2 = tripler * 3;
     return Tripler2;
 } */
function selectDifferentDrivers(arrayofDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayofDrivers);
}
 