const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAXIMUM_WORKING_HOURS = 100;

var days = 0, totalWage = 0, totalWorkingHours = 0;
var employeeDailyWage = new Array();

function checkEmployeeAttendance(){
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

while (days < NUM_OF_WORKING_DAYS && totalWorkingHours <= MAXIMUM_WORKING_HOURS) {
    workingHours = getEmployeeWorkingHours(checkEmployeeAttendance);
    totalWorkingHours += workingHours;
    dailyWage = calculateEmployeeWage(workingHours)
    employeeDailyWage.push(dailyWage);
    totalWage += dailyWage;
    days += 1;
}

employeeDailyWage.forEach(element => console.log(element));
console.log(`Total working hours : ${totalWorkingHours}`);
console.log(`Wage : ${totalWage}`);