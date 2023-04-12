const PART_TIME = 1;
const FULL_TIME = 2;
const EMP_WAGE_PER_HOUR = 20;

    let emp = Math.floor(Math.random() * 10 % 3);
    function getEmpHours(emp) {
        switch (emp) {
            case PART_TIME:
                console.log("Part time employee is present");
                return 4;
            case FULL_TIME:
                console.log("Full time employee is present");
                return 8;
            default:
                console.log("Employee is Absent");
                return 0;
        }
    }
let empWage = getEmpHours(emp) * EMP_WAGE_PER_HOUR;
console.log("Employee Wage " + empWage);