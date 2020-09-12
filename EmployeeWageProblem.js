//Constants
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAXIMUM_WORKING_HOURS = 100;
//Variables
var days = 1,
    totalWorkingHours = 0;
var employeeDailyWage = new Map();

function checkEmployeeAttendance() {
    return attendanceStatus = Math.floor(Math.random() * 10) % 3;
}

function getEmployeeWorkingHours(employeeAttendance) {
    switch (employeeAttendance()) {
        case IS_PART_TIME:
            employeeWorkingHours = 4;
            break;
        case IS_FULL_TIME:
            employeeWorkingHours = 8;
            break;
        default:
            employeeWorkingHours = 0;
            break;
    }
    return employeeWorkingHours;
}

function calculateEmployeeWage(workHours) {
    return WAGE_PER_HOUR * workHours;
}

while (days <= NUM_OF_WORKING_DAYS && totalWorkingHours <= MAXIMUM_WORKING_HOURS) {
    workingHours = getEmployeeWorkingHours(checkEmployeeAttendance);
    totalWorkingHours += workingHours;
    employeeDailyWage.set(days, calculateEmployeeWage(workingHours));
    days += 1;
}
totalWage = totalWorkingHours * WAGE_PER_HOUR;

employeeDailyWage.forEach((v, k) => console.log("Day " + k + ":" + v));
console.log(`Total working hours : ${totalWorkingHours}`);
console.log(`Total Wage : ${totalWage}`);