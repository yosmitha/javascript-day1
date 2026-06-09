
// TASK 1: Age Category Finder

let age = Number(prompt("Task 1: Enter Age"));

if (age >= 0 && age <= 12) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}

// TASK 2: Salary Hike Calculator

let salary = Number(prompt("Task 2: Enter Salary"));
let hike = 0;

if (salary < 20000) {
    hike = salary * 0.20;
} else if (salary <= 50000) {
    hike = salary * 0.10;
} else {
    hike = salary * 0.05;
}

console.log("Old Salary:", salary);
console.log("New Salary:", salary + hike);

// TASK 3: Electricity Department

let units = Number(prompt("Task 3: Enter Units Consumed"));
let bill = 0;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Electricity Bill: ₹" + bill);

// TASK 4: Simple ATM

let balance = 10000;
let withdraw = Number(prompt("Task 4: Enter Withdrawal Amount"));

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" + balance);
} else {
    console.log("Insufficient Funds");
}

//TASK5

let username = prompt("Task 5: Enter Username");
let password = prompt("Task 5: Enter Password");

if (username === "admin" && password === "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}

// TASK 6: Mobile Recharge Offer

let recharge = Number(prompt("Task 6: Enter Recharge Amount"));

if (recharge >= 499) {
    console.log("Netflix Offer");
} else if (recharge >= 299) {
    console.log("2GB Extra Data");
} else {
    console.log("No Offer");
}

// TASK 7: Traffic Signal System

let color = prompt("Task 7: Enter Signal Color").toLowerCase();

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Color");
}

// TASK 8: Employee Attendance

let workingDays = Number(prompt("Task 8: Enter Working Days"));
let presentDays = Number(prompt("Task 8: Enter Present Days"));

let attendance = (presentDays / workingDays) * 100;

console.log("Attendance Percentage:", attendance.toFixed(2) + "%");

if (attendance >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// TASK 9: Bus Ticket Booking

let ticketPrice = 500;
let tickets = Number(prompt("Task 9: Enter Number of Tickets"));

let totalAmount = ticketPrice * tickets;
let gst = totalAmount * 0.05;
let finalAmount = totalAmount + gst;

console.log("Total Amount: ₹" + totalAmount);
console.log("GST: ₹" + gst);
console.log("Final Amount: ₹" + finalAmount);

// TASK 10: Restaurant Bill

let foodCost = Number(prompt("Task 10: Enter Food Cost"));
let finalBill;

if (foodCost > 2000) {
    finalBill = foodCost - (foodCost * 0.10);
} else {
    finalBill = foodCost;
}

console.log("Final Bill: ₹" + finalBill);

// TASK 11: Police Recruitment

let pAge = Number(prompt("Task 11: Enter Age"));
let height = Number(prompt("Task 11: Enter Height (cm)"));
let weight = Number(prompt("Task 11: Enter Weight (kg)"));

if (pAge >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Selected");
        } else {
            console.log("Rejected: Weight less than 55");
        }
    } else {
        console.log("Rejected: Height less than 160");
    }
} else {
    console.log("Rejected: Age less than 18");
}

// TASK 12: Student Result

let m1 = Number(prompt("Task 12: Subject 1 Marks"));
let m2 = Number(prompt("Task 12: Subject 2 Marks"));
let m3 = Number(prompt("Task 12: Subject 3 Marks"));
let m4 = Number(prompt("Task 12: Subject 4 Marks"));
let m5 = Number(prompt("Task 12: Subject 5 Marks"));

let total = m1 + m2 + m3 + m4 + m5;
let percentage = total / 5;

console.log("Total:", total);
console.log("Percentage:", percentage + "%");

if (percentage >= 90) {
    console.log("Grade A+");
} else if (percentage >= 80) {
    console.log("Grade A");
} else if (percentage >= 70) {
    console.log("Grade B");
} else if (percentage >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// TASK 13: Employee Shift Finder

let time = Number(prompt("Task 13: Enter Time (0-23)"));

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
} else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} else {
    console.log("Night Shift");
}

// TASK 14: Loan Eligibility

let lAge = Number(prompt("Task 14: Enter Age"));
let lSalary = Number(prompt("Task 14: Enter Salary"));
let experience = Number(prompt("Task 14: Enter Experience"));

if (lAge >= 21 && lSalary >= 25000 && experience >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// TASK 15: Cab Fare Calculator

let distance = Number(prompt("Task 15: Enter Distance"));

let fare;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Fare: ₹" + fare);

// TASK 16: Multiplication Table

let num = Number(prompt("Task 16: Enter Number"));

for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// TASK 17: Password Checker

let passLength = Number(prompt("Task 17: Enter Password Length"));

if (passLength < 6) {
    console.log("Weak");
} else if (passLength <= 10) {
    console.log("Medium");
} else {
    console.log("Strong");
}

// TASK 18: Company Bonus System

let exp = Number(prompt("Task 18: Enter Experience"));
let empSalary = Number(prompt("Task 18: Enter Salary"));

let bonus = 0;

if (exp <= 2) {
    bonus = empSalary * 0.05;
} else if (exp <= 5) {
    bonus = empSalary * 0.10;
} else {
    bonus = empSalary * 0.20;
}

console.log("Bonus: ₹" + bonus);

// TASK 19: Countdown Timer

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

console.log("Happy New Year");

// TASK 20: Interview Selection System

let degree = prompt("Task 20: Degree Completed? (yes/no)");
let communication = prompt("Task 20: Communication (good/poor)");
let techScore = Number(prompt("Task 20: Technical Score"));

if (degree.toLowerCase() === "yes") {
    if (communication.toLowerCase() === "good") {
        if (techScore >= 70) {
            console.log("Selected");
        } else {
            console.log("Rejected: Technical Score below 70");
        }
    } else {
        console.log("Rejected: Communication not good");
    }
} else {
    console.log("Rejected: Degree not completed");
}