///* eslint-disable no-inner-declarations */

const PART_TIME = 1;
const FULL_TIME = 2;
const EMP_WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 100;

let day = 1;
let empHours = 0;
let totalWage = 0;
let totalHours = 0;
while (day <= MAX_WORKING_DAYS && day < MAX_WORKING_HOURS) {
    let emp = Math.floor(Math.random() * 10 % 3);
    function getEmpHours(emp) {
        switch (emp) {
            case PART_TIME:
                return empHours = 4;
            case FULL_TIME:
                return empHours = 8;
            default:
                return empHours = 0;
        }
    }
    let empWage = getEmpHours(emp) * EMP_WAGE_PER_HOUR;
    totalWage = totalWage + empWage;
    day++;
    totalHours = totalHours + empHours;
}
console.log("Total Employee wage for " + (day - 1) + "days and " + totalHours + ": hours is " + totalWage);