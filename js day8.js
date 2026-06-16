//task1
const employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 50000 },
    { id: 3, name: "John", salary: 75000 }
];

const highSalary = employees.filter(emp => emp.salary > 40000);
console.log("Salary > 40000:", highSalary);

const firstAbove = employees.find(emp => emp.salary > 60000);
console.log("First Salary > 60000:", firstAbove);

const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary Expense:", totalSalary);

const employeeNames = employees.map(emp => emp.name);
console.log("Employee Names:", employeeNames);

//task2
function checkAdmission(name, age, percentage) {
    if (age >= 18 && percentage >= 60) {
        return `${name} - Admission Approved`;
    } else {
        return `${name} - Admission Rejected`;
    }
}

console.log(checkAdmission("Yosmitha", 19, 75));

//task3
const cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];

const totalBill = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log("Total Bill:", totalBill);

const expensiveProduct = cart.reduce((a, b) =>
    a.price > b.price ? a : b
);
console.log("Most Expensive Product:", expensiveProduct);

const productNames = cart.map(item => item.product);
console.log("Product Names:", productNames);

//task4
let signal = "red";

switch (signal) {
    case "red":
        console.log("STOP");
        console.log("Fine: ₹1000");
        break;

    case "yellow":
        console.log("WAIT");
        console.log("Fine: ₹500");
        break;

    case "green":
        console.log("GO");
        console.log("No Fine");
        break;

    default:
        console.log("Invalid Signal");
}

//task5
const students = [
    { name: "A", mark: 95 },
    { name: "B", mark: 45 },
    { name: "C", mark: 80 },
    { name: "D", mark: 30 }
];

const passedStudents = students.filter(student => student.mark >= 50);
console.log("Passed Students:", passedStudents);

const failedStudents = students.filter(student => student.mark < 50);
console.log("Failed Students:", failedStudents);

const grades = students.map(student => {
    let grade;

    if (student.mark >= 90) grade = "A";
    else if (student.mark >= 75) grade = "B";
    else if (student.mark >= 50) grade = "C";
    else grade = "Fail";

    return { name: student.name, grade };
});

console.log("Grades:", grades);

//task6
function placeOrder(customerName, ...items) {
    console.log("Customer:", customerName);
    console.log("Items:", items);
    console.log("Item Count:", items.length);
}

placeOrder("Priya", "Biryani", "Pasta", "Fries");

//task7
let balance = 1000;

function deposit(amount) {
    balance += amount;
    return balance;
}

function withdraw(amount) {
    balance -= amount;
    return balance;
}

function checkBalance() {
    return balance;
}

console.log("After Deposit:", deposit(500));
console.log("After Withdraw:", withdraw(300));
console.log("Current Balance:", checkBalance());

//task8
let bookedSeats = [];

function bookSeat(seatNo) {
    if (bookedSeats.includes(seatNo)) {
        console.log(`${seatNo} Already Booked`);
    } else {
        bookedSeats.push(seatNo);
        console.log(`${seatNo} Booked Successfully`);
    }
}

bookSeat("A1");
bookSeat("A2");
bookSeat("A1");

console.log("Booked Seats:", bookedSeats);

//task9
function validateUser(username, password, email) {

    if (username.includes(" ")) {
        console.log("Username should not contain spaces");
        return;
    }

    if (password.length < 8) {
        console.log("Password must be at least 8 characters");
        return;
    }

    if (!email.includes("@")) {
        console.log("Invalid Email");
        return;
    }

    console.log("Login Successful");
}

validateUser(
    "yosmitha123",
    "password123",
    "yosmitha@gmail.com"
);

//task10
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        console.log("Product Titles:");

        products.forEach(product => {
            console.log(product.title);
        });

        const costlyProducts = products.filter(
            product => product.price > 1000
        );

        console.log("Products Above ₹1000:");
        console.log(costlyProducts);

        console.log("Total Products:", products.length);
    })
    .catch(error => console.log(error));

//task11
const dob = new Date("2002-05-15");

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log("Day:", dob.getDate());
console.log("Month:", dob.getMonth() + 1);
console.log("Year:", dob.getFullYear());
console.log("Weekday:", weekdays[dob.getDay()]);

//task12
let plan = "Premium";

let benefit =
    plan === "Mobile"
        ? "Watch on Mobile"
        : plan === "Basic"
        ? "Single Screen HD"
        : plan === "Standard"
        ? "2 Screens Full HD"
        : plan === "Premium"
        ? "4 Screens Ultra HD"
        : "Invalid Plan";

console.log("Benefit:", benefit);

//task13
const patients = [
    { id: 1, name: "Hema", critical: true },
    { id: 2, name: "Sreeja", critical: false },
    { id: 3, name: "Spoorti", critical: true }
];

const criticalPatients = patients.filter(
    patient => patient.critical
);

console.log("Critical Patients:", criticalPatients);

const patientById = patients.find(
    patient => patient.id === 2
);

console.log("Patient Found:", patientById);

console.log("Total Patients:", patients.length);

//task14
const inventory1 = [
    { id: 1, name: "Laptop" }
];

const inventory2 = [
    { id: 2, name: "Mobile" }
];

const mergedInventory = [
    ...inventory1,
    ...inventory2
];

console.log("Merged Inventory:", mergedInventory);

const { id, name } = mergedInventory[0];

console.log("Destructured Values:");
console.log(id, name);

const updatedInventory = [
    ...mergedInventory,
    { id: 3, name: "Tablet" }
];

console.log("Updated Inventory:", updatedInventory);


//task15
let group = ["Mahesh", "Babu"];

group.push("Arjun");
console.log("After Push:", group);

group.pop();
console.log("After Pop:", group);

group.unshift("Gowtham");
console.log("After Unshift:", group);

group.shift();
console.log("After Shift:", group);

group.splice(1, 0, "Priya");
console.log("Final Group:", group);