const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAXIMUM_WORKING_HOURS = 100;

function checkEmployeeAttendance() {
    var attendanceStatus = Math.floor(Math.random() * 10) % 3;
    var employeeWorkingHours;

    switch (attendanceStatus) {
        case IS_PART_TIME:
            console.log("Employee is PART TIME!");
            employeeWorkingHours = 4;
            break;

        case IS_FULL_TIME:
            console.log("Employee is FULL TIME!");
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

days = 0;
totalWage = 0;
totalWorkingHours = 0;

while (days < NUM_OF_WORKING_DAYS && totalWorkingHours <= MAXIMUM_WORKING_HOURS) {
    workingHours = checkEmployeeAttendance();
    totalWorkingHours += workingHours;
    dailyWage = calculateEmployeeWage(workingHours)
    totalWage += dailyWage;
    days += 1;
}

console.log(`Wage : ${totalWage}`);