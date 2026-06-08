
// Task 1: Employee Salary Calculator


let basicSalary = 25000;

let hra = basicSalary * 0.20;
let bonus = basicSalary * 0.10;
let totalSalary = basicSalary + hra + bonus;
let tax = totalSalary * 0.05;
let finalSalary = totalSalary - tax;

console.log("----- Task 1 -----");
console.log("Basic Salary :", basicSalary);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);



// Task 2: Student Grade System


let marks = 85;

console.log("\n----- Task 2 -----");

if (marks >= 90 && marks <= 100) {
    console.log("Grade : A+");
}
else if (marks >= 80) {
    console.log("Grade : A");
}
else if (marks >= 70) {
    console.log("Grade : B");
}
else if (marks >= 60) {
    console.log("Grade : C");
}
else {
    console.log("Fail");
}

// Task 3: Login Authentication System

let username = "admin";
let password = "12345";

console.log("\n----- Task 3 -----");

if (username === "admin") {
    if (password === "12345") {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }
} else {
    console.log("Invalid Username");
}

// Task 4: ATM Withdrawal Machine

let balance = 5000;
let withdrawAmount = 3000;

console.log("\n----- Task 4 -----");

if (withdrawAmount > balance) {
    console.log("Insufficient Balance");
} else {
    balance -= withdrawAmount;
    console.log("Withdrawal Success");
    console.log("Remaining Balance :", balance);
}

// Task 5: E-Commerce Discount System

let purchaseAmount = 8000;
let discount = 0;

console.log("\n----- Task 5 -----");

if (purchaseAmount >= 10000) {
    discount = purchaseAmount * 0.20;
}
else if (purchaseAmount >= 5000) {
    discount = purchaseAmount * 0.10;
}
else if (purchaseAmount >= 2000) {
    discount = purchaseAmount * 0.05;
}

let finalAmount = purchaseAmount - discount;

console.log("Original Amount :", purchaseAmount);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);

// Task 6: Traffic Fine Checker

let helmet = "No";
let license = "No";

console.log("\n----- Task 6 -----");

if (helmet === "No" && license === "No") {
    console.log("Fine : ₹3000");
}
else if (helmet === "No") {
    console.log("Fine : ₹1000");
}
else if (license === "No") {
    console.log("Fine : ₹2000");
}
else {
    console.log("No Fine");
}

// Task 7: Employee Attendance Tracker

let attendance = ["P", "P", "A", "P", "A", "P", "P"];
let present = 0;
let absent = 0;

console.log("\n----- Task 7 -----");

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        present++;
    } else {
        absent++;
    }
}

console.log("Present Days :", present);
console.log("Absent Days :", absent);

// Task 8: Product Inventory Management


let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};

console.log("\n----- Task 8 -----");

for (let key in product) {
    console.log(key + " :", product[key]);
}


// Task 9: Cab Fare Calculator


let distance = 12;
let fare = 0;

console.log("\n----- Task 9 -----");

if (distance <= 5) {
    fare = distance * 20;
}
else if (distance <= 10) {
    fare = (5 * 20) + ((distance - 5) * 15);
}
else {
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}

console.log("Total Fare : ₹" + fare);

// Task 10: Mini Employee Management System

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];

console.log("\n----- Task 10 -----");

// Print all employees
console.log("All Employees:");
for (let emp of employees) {
    console.log(emp);
}

// Highest Salary Employee
let highest = employees[0];

for (let emp of employees) {
    if (emp.salary > highest.salary) {
        highest = emp;
    }
}

console.log("Highest Salary Employee :", highest);

// Lowest Salary Employee
let lowest = employees[0];

for (let emp of employees) {
    if (emp.salary < lowest.salary) {
        lowest = emp;
    }
}

console.log("Lowest Salary Employee :", lowest);

// Total Employees
console.log("Total Employees :", employees.length);

// Total Salary Expenditure
let totalSalaryExpenditure = 0;

for (let emp of employees) {
    totalSalaryExpenditure += emp.salary;
}

console.log("Total Salary Expenditure :", totalSalaryExpenditure);