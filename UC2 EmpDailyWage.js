const PART_TIME = 1;
const FULL_TIME = 2;
const EMP_WAGE_PER_HOUR = 20;

let empHours=0;
let emp = Math.floor(Math.random()*10%3);
switch(emp)
{
    case PART_TIME:
            empHours = 4;
            console.log("Part time employee is present");
        break;
    case FULL_TIME:
            empHours = 8;
            console.log("Full time employee is present");
        break;
    default:
            empHours = 0;
            console.log("Employee is Absent");
        break;
}
let empWage = empHours * EMP_WAGE_PER_HOUR;
console.log("Employee Wage "+ empWage);