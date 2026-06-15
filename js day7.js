//Task1
let signal = "green";

switch (signal.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}
//task2
for (let i = 1; i <= 30; i++) {
    console.log(`Employee ${i} Present`);
}
//task3
let balance = 10000;

while (balance > 0) {
    balance -= 500;
    console.log(`Remaining Balance: ₹${balance}`);
}
//task4
let age = 20;
let percentage = 75;
let entrancePassed = true;

if (age >= 18) {
    if (percentage >= 70) {
        if (entrancePassed) {
            console.log("Admission Approved");
        } else {
            console.log("Rejected: Entrance Exam Not Passed");
        }
    } else {
        console.log("Rejected: Percentage Below 70");
    }
} else {
    console.log("Rejected: Age Below 18");
}
//task5
function deliveryStatus(customerName, foodItem, deliveryAddress) {
    console.log(
        `${foodItem} delivered to ${customerName} at ${deliveryAddress}`
    );
}

deliveryStatus("Rahul", "Pizza", "Hyderabad");
//task6
function calculateSalary(basicSalary) {
    return basicSalary;
}

function calculateBonus(salary) {
    return salary + salary * 0.1;
}

let salary = calculateSalary(30000);
let finalSalary = calculateBonus(salary);

console.log("Final Salary:", finalSalary);
//task7
function applyDiscount(amount, callback) {
    let discountedAmount = amount - amount * 0.1;
    callback(discountedAmount);
}

function generateInvoice(amount) {
    console.log(`Invoice Amount: ₹${amount}`);
}

applyDiscount(5000, generateInvoice);
//task8
function* offers() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
//task9
let scienceStudents = ["Ravi", "Priya", "Kiran"];
let commerceStudents = ["Anu", "Vijay", "Deepa"];

let allStudents = [...scienceStudents, ...commerceStudents];

console.log(allStudents);
//task10
function calculateMarks(studentName, ...marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0);

    console.log("Student:", studentName);
    console.log("Total Marks:", total);
}

calculateMarks("Rahul", 80, 75, 90, 85);
//task11
let employee = {
    name: "John",
    department: "IT",
    salaryEmp: 50000,
    experience: 3
};

let { name, department, salaryEmp, experience } = employee;

console.log(name);
console.log(department);
console.log(salaryEmp);
console.log(experience);
//task12
let products = [
    { name: "Mobile", price: 15000, category: "Electronics" },
    { name: "Headphones", price: 3000, category: "Electronics" },
    { name: "Laptop", price: 55000, category: "Electronics" }
];

let expensiveProducts = products.filter(
    product => product.price > 5000
);

console.log(expensiveProducts);
//task13
let customers = [
    { name: "Ravi", purchase: 30000 },
    { name: "Priya", purchase: 60000 },
    { name: "Anu", purchase: 80000 }
];

let premiumCustomer = customers.find(
    customer => customer.purchase > 50000
);

console.log(premiumCustomer);
//task14
let expenses = [10000, 25000, 15000, 5000];

let totalExpense = expenses.reduce(
    (total, expense) => total + expense,
    0
);

console.log("Total Expense:", totalExpense);
//task15
let players = [
    { name: "Player1", age: 20 },
    { name: "Player2", age: 22 },
    { name: "Player3", age: 19 }
];

let allAdults = players.every(
    player => player.age > 18
);

console.log("All Players Above 18:", allAdults);
//task16
let candidates = [
    { name: "Rahul", skills: ["HTML", "CSS"] },
    { name: "Priya", skills: ["React", "JavaScript"] },
    { name: "Kiran", skills: ["Java"] }
];

let reactDeveloper = candidates.some(
    candidate => candidate.skills.includes("React")
);

console.log("React Developer Found:", reactDeveloper);
//task17
let mobile = "9876543210";

if (
    mobile.length === 10 &&
    (mobile.startsWith("6") ||
        mobile.startsWith("7") ||
        mobile.startsWith("8") ||
        mobile.startsWith("9"))
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}
//task18
let courseTitle = "Learn JavaScript Complete Course";

let slug = courseTitle
    .toLowerCase()
    .split(" ")
    .join("-");

console.log(slug);
//task19
let employeeList = [
    { name: "A", salary: 40000 },
    { name: "B", salary: 60000 },
    { name: "C", salary: 30000 }
];

// Highest to Lowest
employeeList.sort((a, b) => b.salary - a.salary);
console.log("Highest to Lowest");
console.log(employeeList);

// Lowest to Highest
employeeList.sort((a, b) => a.salary - b.salary);
console.log("Lowest to Highest");
console.log(employeeList);
//task20
let movies = ["Pushpa", "Kalki", "Salaar"];

let bookingIds = movies.map(
    (movie, index) => `BOOK${index + 1}`
);

console.log(bookingIds);