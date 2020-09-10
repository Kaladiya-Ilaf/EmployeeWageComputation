const IS_PRESENT = 1;

var employeeWorkingHours;

function checkEmployeeAttendance() {
    var attendanceStatus = Math.floor(Math.random() * 10) % 2;

    if (attendanceStatus == IS_PRESENT) {
        console.log("Employee is PRESENT!");
        employeeWorkingHours = 8;
    } else {
        console.log("Employee is ABSENT!");
        employeeWorkingHours = 0;
    }
    return employeeWorkingHours;
}

var workingHours = checkEmployeeAttendance();