
// Task 1: Employee Bonus Calculator

let empName = "Rahul";
let salary = 30000;
let experience = 6;

let bonus;

if (experience >= 5) {
    bonus = salary * 0.20;
} else if (experience >= 2) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.05;
}

console.log("Final Salary:", salary + bonus);

// Task 2: College Admission System

let studentName = "Kavin";
let age = 18;
let percentage = 75;

if (age >= 17) {
    if (percentage >= 60) {
        console.log("Admission Approved");
    } else {
        console.log("Admission Rejected");
    }
} else {
    console.log("Admission Rejected");
}

// Task 3: Food Delivery Menu

let choice = 1;

switch (choice) {
    case 1:
        console.log("Order Confirmed : Pizza");
        break;
    case 2:
        console.log("Order Confirmed : Burger");
        break;
    case 3:
        console.log("Order Confirmed : Shawarma");
        break;
    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;
    default:
        console.log("Invalid Choice");
}

// Task 4: Attendance Tracker

let students = [
    "Rahul",
    "Kavin",
    "John",
    "Priya",
    "Rani",
    "Asha",
    "Vikram",
    "David",
    "Arun",
    "Meena"
];

for (let student of students) {
    console.log(student);
}

console.log("Total Students:", students.length);

// Task 5: E-Commerce Cart

let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

let totalCartValue = 0;
let expensiveProduct = cart[0];

for (let item of cart) {
    console.log(item.product);

    totalCartValue += item.price;

    if (item.price > expensiveProduct.price) {
        expensiveProduct = item;
    }
}

console.log("Total Cart Value:", totalCartValue);
console.log("Most Expensive Product:", expensiveProduct.product);

// Task 6: Bank Account Management

let balance = 10000;

function deposit(amount) {
    balance += amount;
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
    } else {
        console.log("Insufficient Balance");
    }
}

function checkBalance() {
    console.log("Balance:", balance);
}

deposit(5000);
withdraw(2000);
checkBalance();

// Task 7: Movie Ticket Booking

let movieAge = 25;
let ticketPrice;

if (movieAge < 5) {
    ticketPrice = 0;
} else if (movieAge <= 18) {
    ticketPrice = 100;
} else if (movieAge <= 60) {
    ticketPrice = 200;
} else {
    ticketPrice = 120;
}

console.log("Ticket Price:", ticketPrice);

// Task 8: Online Shopping Discount

let purchase = 6000;
let discount = 0;

if (purchase > 5000) {
    discount = purchase * 0.20;
} else if (purchase > 3000) {
    discount = purchase * 0.10;
} else if (purchase > 1000) {
    discount = purchase * 0.05;
}

console.log("Original Amount:", purchase);
console.log("Discount:", discount);
console.log("Final Amount:", purchase - discount);

// Task 9: Food Inventory System

let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

inventory.push("Bread");
inventory.push("Butter");

inventory.shift();
inventory.pop();

console.log("Milk Exists:", inventory.includes("Milk"));
console.log("Final Inventory:", inventory);

// Task 10: Hospital Patient Management

let patient = {
    patientName: "Ramesh",
    age: 45,
    disease: "Fever",
    doctor: "Dr. Kumar"
};

for (let key in patient) {
    console.log(key, ":", patient[key]);
}

let { patientName, age: pAge, disease, doctor } = patient;

console.log(patientName);
console.log(pAge);
console.log(disease);
console.log(doctor);

// Task 11: Amazon Order Tracker

function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback();
}

placeOrder(sendSMS);

// Task 12: Cashback Offer Generator

function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = cashbackOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

// Task 13: Employee Database

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];

let totalSalary = 0;
let highestSalaryEmp = employees[0];

for (let emp of employees) {
    console.log(emp.name);

    totalSalary += emp.salary;

    if (emp.salary > highestSalaryEmp.salary) {
        highestSalaryEmp = emp;
    }
}

console.log("Total Salary Expense:", totalSalary);
console.log("Highest Salary Employee:", highestSalaryEmp.name);

// Task 14: Railway Reservation System

let availableSeats = 50;

function bookSeat(count) {
    if (count <= availableSeats) {
        availableSeats -= count;
        console.log("Booking Successful");
        console.log("Remaining Seats:", availableSeats);
    } else {
        console.log("Seats Unavailable");
    }
}

bookSeat(5);
bookSeat(10);

// Task 15: Mobile Store Billing System

let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 5000
};

let selectedProducts = ["Mobile", "Headphone"];

let amount = 0;

for (let item of selectedProducts) {
    amount += products[item];
}

let gst = amount * 0.18;
let finalBill = amount + gst;

console.log("Selected Products:", selectedProducts);
console.log("Total Amount:", amount);
console.log("GST:", gst);
console.log("Final Bill:", finalBill);