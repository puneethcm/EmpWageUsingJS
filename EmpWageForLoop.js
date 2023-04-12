/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
const PART_TIME = 1;
const FULL_TIME = 2;
const EMP_WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

let totalHours = 0;
let empHours = 0;
//let day =1;
for (let day = 1; day < NUM_OF_WORKING_DAYS; day++) {
    let emp = Math.floor(Math.random() * 10 % 3);
    function getEmpHours(emp) {
        switch (emp) {
            case PART_TIME:
                //console.log("Part time employee is present");
                return empHours = 4;
            case FULL_TIME:
                //console.log("Full time employee is present");
                return empHours = 8;
            default:
                //console.log("Employee is Absent");
                return empHours = 0
        }
    }
    totalHours += getEmpHours(emp);
}
let totalEmpWage = totalHours * EMP_WAGE_PER_HOUR;
console.log("Total hrs: " + totalHours + " Total Emp wage: " + totalEmpWage);