const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOUR = 20;

function checkEmployeeAttendance() {
    var attendanceStatus = Math.floor(Math.random() * 10) % 3;
    var employeeWorkingHours;

    switch (attendanceStatus) {
        case IS_PART_TIME:
            console.log("Employee is PART TIME!");
            employeeWorkingHours = 4;
            break;

        case IS_FULL_TIME:
            console.log("Employee is FULL TIME");
            employeeWorkingHours = 8;
            break;

        default:
            console.log("Employee is ABSENT!");
            employeeWorkingHours = 0;
            break;
    }

    return employeeWorkingHours;
}

function calculateEmployeeWage(workHours) {
    return WAGE_PER_HOUR * workHours;
}

workingHours = checkEmployeeAttendance();
dailyWage = calculateEmployeeWage(workingHours)
console.log(`Wage : ${dailyWage}`);