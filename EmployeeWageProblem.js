const IS_PRESENT = 1;

function checkEmployeeAttendance() {
    var attendanceStatus = Math.floor(Math.random() * 10) % 2;

    if (attendanceStatus == IS_PRESENT)
        console.log("Employee is PRESENT!");
    else
        console.log("Employee is ABSENT!");
}

checkEmployeeAttendance();