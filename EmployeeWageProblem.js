const IS_PRESENT = 1;
const WAGE_PER_HOUR = 20;

function checkEmployeeAttendance() {
    var attendanceStatus = Math.floor(Math.random() * 10) % 2;
    var employeeWorkingHours;

    if (attendanceStatus == IS_PRESENT) {
        console.log("Employee is PRESENT!");
        employeeWorkingHours = 8;
    } else {
        console.log("Employee is ABSENT!");
        employeeWorkingHours = 0;
    }
    return employeeWorkingHours;
}

function calculateEmployeeWage(workHours) {
    return WAGE_PER_HOUR * workHours;
}

workingHours = checkEmployeeAttendance();
dailyWage = calculateEmployeeWage(workingHours)
console.log("Wage : " + dailyWage);