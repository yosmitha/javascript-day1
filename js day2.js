
// TASK 1: Student Result Checker

let marks = 75;

console.log("===== Student Result Checker =====");

// Pass or Fail using Ternary Operator
let result = marks >= 35 ? "Pass" : "Fail";
console.log("Result:", result);

// Grade Calculation
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// TASK 2: Employee Bonus Calculator

console.log("\n===== Employee Bonus Calculator =====");

let salary = 25000;


let bonus = salary * 0.10;

let finalSalary = salary + bonus;

console.log("Original Salary :", salary);
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);



// TASK 3: User Login Validation


console.log("\n===== User Login Validation =====");

let email = "admin@gmail.com";
let password = "12345";

if (email === "admin@gmail.com" && password === "12345") {
    console.log("Login Success");
} else {
    console.log("Login Failed");
}


// TASK 4: Product Discount Calculator


console.log("\n===== Product Discount Calculator =====");

let price = 2000;

let finalAmount = price > 1000 ? price - (price * 0.20) : price;

console.log("Original Price :", price);
console.log("Final Amount :", finalAmount);



// TASK 5: Array Product Management


console.log("\n===== Array Product Management =====");

let products = ["Laptop", "Mobile", "Mouse", "Keyboard"];

console.log("First Product :", products[0]);


console.log("Last Product :", products[products.length - 1]);


console.log("Total Products :", products.length);



// TASK 6: Employee Object


console.log("\n===== Employee Object =====");

let employee = {
    name: "Naveen",
    department: "Development",
    salary: 30000
};

console.log("Employee Details :", employee);


console.log("Employee Name :", employee.name);
console.log("Employee Salary :", employee.salary);

// TASK 7: E-Commerce Cart Total


console.log("\n===== E-Commerce Cart Total =====");

let shirt = 500;
let pant = 1000;
let shoe = 1500;

let totalBill = shirt + pant + shoe;


let discount = totalBill * 0.10;


let finalBill = totalBill - discount;

console.log("Total Bill :", totalBill);
console.log("Discount :", discount);
console.log("Final Amount :", finalBill);

// TASK 8: Age Eligibility Checker


console.log("\n===== Age Eligibility Checker =====");

let age = 19;

if (age >= 18) {
    console.log("Eligible for Voting");
} else {
    console.log("Not Eligible");
}



// TASK 9: Increment Decrement Practice


console.log("\n===== Increment Decrement Practice =====");

let a = 10;

console.log("Initial Value :", a);

a++;
console.log("After a++ :", a);

++a;
console.log("After ++a :", a);

a--;
console.log("After a-- :", a);

--a;
console.log("After --a :", a);



// TASK 10: Mini Employee Attendance System


console.log("\n===== Mini Employee Attendance System =====");

let isPresent = true;
let completedTask = true;

if (isPresent && completedTask) {
    console.log("Eligible for Salary");
} else {
    console.log("Not Eligible");
}



// BONUS TASK: Employee Management Console App


console.log("\n===== Employee Management Console App =====");

let employeeData = {
    id: 101,
    name: "John",
    department: "Development",
    salary: 35000,
    experience: 2
};


console.log("Employee ID :", employeeData.id);
console.log("Employee Name :", employeeData.name);
console.log("Department :", employeeData.department);
console.log("Salary :", employeeData.salary);
console.log("Experience :", employeeData.experience, "Years");


let empBonus = employeeData.salary * 0.10;
let empFinalSalary = employeeData.salary + empBonus;

console.log("\nBonus :", empBonus);
console.log("Final Salary :", empFinalSalary);


let performanceStatus =
    employeeData.experience >= 2 ? "Good" : "Average";

console.log("\nPerformance Status :", performanceStatus);