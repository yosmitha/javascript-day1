
// TASK 1: Student Management System

console.log("===== TASK 1: Student Management System =====");

let students = [
    { id: 1, name: "Ravi", department: "CSE", mark: 95 },
    { id: 2, name: "Priya", department: "ECE", mark: 82 },
    { id: 3, name: "Kiran", department: "EEE", mark: 70 },
    { id: 4, name: "Sneha", department: "MECH", mark: 45 },
    { id: 5, name: "Rahul", department: "CIVIL", mark: 88 }
];

let totalMarks = 0;

for (let student of students) {
    console.log("Student Name:", student.name);
    totalMarks += student.mark;
}

console.log("Total Marks:", totalMarks);

console.log("Students Scored Above 80:");
for (let student of students) {
    if (student.mark > 80) {
        console.log(student.name);
    }
}

for (let student of students) {
    let grade;

    if (student.mark >= 90) {
        grade = "A";
    } else if (student.mark >= 75) {
        grade = "B";
    } else if (student.mark >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    console.log(student.name, "Grade:", grade);
}

function printStudentDetails(student) {
    console.log(student);
}

for (let student of students) {
    printStudentDetails(student);
}

// TASK 2: Employee Payroll System

console.log("\n===== TASK 2: Employee Payroll System =====");

let employees = [
    { id: 1, name: "Amit", salary: 35000, department: "HR" },
    { id: 2, name: "Neha", salary: 45000, department: "IT" },
    { id: 3, name: "Raj", salary: 28000, department: "Finance" }
];

let totalSalary = 0;

for (let emp of employees) {
    console.log(emp.name);
    totalSalary += emp.salary;
}

console.log("Total Salary Expense:", totalSalary);

console.log("Employees earning above 30000:");
for (let emp of employees) {
    if (emp.salary > 30000) {
        console.log(emp.name);
    }
}

for (let emp of employees) {
    switch (emp.department) {
        case "HR":
            console.log("HR - Human Resources");
            break;
        case "IT":
            console.log("IT - Information Technology");
            break;
        case "Finance":
            console.log("Finance Department");
            break;
        default:
            console.log("Other Department");
    }
}

function payrollReport(callback) {
    callback();
}

payrollReport(function () {
    console.log("Payroll Report Generated");
});

// TASK 3: Online Food Order System

console.log("\n===== TASK 3: Online Food Order System =====");

let foods = [
    { id: 1, foodName: "Biryani", price: 250, category: "Main" },
    { id: 2, foodName: "Pizza", price: 300, category: "FastFood" },
    { id: 3, foodName: "Juice", price: 100, category: "Drink" }
];

let totalMenuValue = 0;

for (let food of foods) {
    console.log(food.foodName);
    totalMenuValue += food.price;
}

console.log("Total Menu Value:", totalMenuValue);

console.log("Foods above 200:");
for (let food of foods) {
    if (food.price > 200) {
        console.log(food.foodName);
    }
}

for (let food of foods) {
    switch (food.category) {
        case "Main":
            console.log("Main Course");
            break;
        case "FastFood":
            console.log("Fast Food Item");
            break;
        case "Drink":
            console.log("Beverage");
            break;
    }
}

function confirmOrder(callback) {
    callback();
}

confirmOrder(function () {
    console.log("Order Confirmed");
});

// TASK 4: Movie Ticket Booking System

console.log("\n===== TASK 4: Movie Ticket Booking System =====");

let movies = [
    { movieName: "Pushpa", ticketPrice: 200, availableSeats: 50, language: "Telugu" },
    { movieName: "Leo", ticketPrice: 180, availableSeats: 0, language: "Tamil" }
];

let totalSeats = 0;

for (let movie of movies) {
    console.log(movie.movieName);
    totalSeats += movie.availableSeats;
}

console.log("Total Available Seats:", totalSeats);

for (let movie of movies) {
    if (movie.availableSeats > 0) {
        console.log(movie.movieName, "- Booking Possible");
    } else {
        console.log(movie.movieName, "- House Full");
    }

    switch (movie.language) {
        case "Telugu":
            console.log("Telugu Movie");
            break;
        case "Tamil":
            console.log("Tamil Movie");
            break;
    }
}

function bookingConfirmation(callback) {
    callback();
}

bookingConfirmation(function () {
    console.log("Booking Confirmed");
});

// TASK 5: Hospital Patient Records

console.log("\n===== TASK 5: Hospital Patient Records =====");

let patients = [
    { patientId: 1, patientName: "Suresh", age: 65, disease: "Heart" },
    { patientId: 2, patientName: "Anita", age: 45, disease: "Skin" },
    { patientId: 3, patientName: "Ramesh", age: 72, disease: "Bone" }
];

console.log("Patient Names:");
for (let patient of patients) {
    console.log(patient.patientName);
}

console.log("Total Patients:", patients.length);

console.log("Patients above age 60:");
for (let patient of patients) {
    if (patient.age > 60) {
        console.log(patient.patientName);
    }

    switch (patient.disease) {
        case "Heart":
            console.log("Cardiology");
            break;
        case "Skin":
            console.log("Dermatology");
            break;
        case "Bone":
            console.log("Orthopedics");
            break;
    }
}

function appointment(callback) {
    callback();
}

appointment(function () {
    console.log("Appointment Confirmed");
});

// TASK 6: Library Management System

console.log("\n===== TASK 6: Library Management System =====");

let books = [
    { bookId: 1, bookName: "JavaScript", author: "John", price: 600, category: "Programming" },
    { bookId: 2, bookName: "Physics", author: "David", price: 450, category: "Science" }
];

let totalBookValue = 0;

for (let book of books) {
    console.log(book.bookName);
    totalBookValue += book.price;
}

console.log("Total Book Value:", totalBookValue);

for (let book of books) {
    if (book.price > 500) {
        console.log(book.bookName);
    }

    switch (book.category) {
        case "Programming":
            console.log("Programming Book");
            break;
        case "Science":
            console.log("Science Book");
            break;
    }
}

function issueBook(bookName) {
    console.log(bookName, "issued successfully");
}

issueBook("JavaScript");

// TASK 7: E-Commerce Product Dashboard

console.log("\n===== TASK 7: E-Commerce Product Dashboard =====");

let products = [
    { productId: 1, productName: "Laptop", price: 50000, stock: 5 },
    { productId: 2, productName: "Mouse", price: 1000, stock: 20 }
];

let inventoryValue = 0;

for (let product of products) {
    console.log(product.productName);
    inventoryValue += product.price * product.stock;
}

console.log("Inventory Value:", inventoryValue);

for (let product of products) {

    if (product.stock < 10) {
        console.log(product.productName, "- Low Stock");
    }

    if (product.stock > 0) {
        console.log(product.productName, "- In Stock");
    } else {
        console.log(product.productName, "- Out Of Stock");
    }
}

function productReport(callback) {
    callback();
}

productReport(function () {
    console.log("Product Report Generated");
});

// TASK 8: College Admission System

console.log("\n===== TASK 8: College Admission System =====");

let applicants = [
    { name: "Kavya", age: 19, percentage: 85, department: "CSE" },
    { name: "Rohit", age: 17, percentage: 75, department: "ECE" },
    { name: "Pooja", age: 20, percentage: 55, department: "EEE" }
];

let eligibleCount = 0;

for (let applicant of applicants) {

    console.log(applicant.name);

    if (applicant.age >= 18 && applicant.percentage >= 60) {
        console.log(applicant.name, "- Eligible");
        eligibleCount++;
    } else {
        console.log(applicant.name, "- Not Eligible");
    }

    switch (applicant.department) {
        case "CSE":
            console.log("Computer Science");
            break;
        case "ECE":
            console.log("Electronics");
            break;
        case "EEE":
            console.log("Electrical");
            break;
    }
}

console.log("Eligible Students:", eligibleCount);

function admissionResult(callback) {
    callback();
}

admissionResult(function () {
    console.log("Admission Result Generated");
});

// TASK 9: Bus Reservation System

console.log("\n===== TASK 9: Bus Reservation System =====");

let passengers = [
    { passengerId: 1, name: "Raju", seatNumber: 1, ticketPrice: 500, busType: "AC" },
    { passengerId: 2, name: "Vani", seatNumber: 2, ticketPrice: 500, busType: "NonAC" }
];

let totalCollection = 0;

for (let passenger of passengers) {
    console.log(passenger.name);
    totalCollection += passenger.ticketPrice;

    console.log("Occupied Seat:", passenger.seatNumber);

    switch (passenger.busType) {
        case "AC":
            console.log("Air Conditioned Bus");
            break;
        case "NonAC":
            console.log("Non AC Bus");
            break;
    }
}

console.log("Total Collection:", totalCollection);

function ticketConfirmation(callback) {
    callback();
}

ticketConfirmation(function () {
    console.log("Ticket Confirmed");
});

// TASK 10: Mobile Store Management

console.log("\n===== TASK 10: Mobile Store Management =====");

let mobiles = [
    { brand: "Samsung", model: "A36", price: 32000, stock: 10 },
    { brand: "Motorola", model: "Edge 60", price: 25000, stock: 8 },
    { brand: "Realme", model: "Narzo", price: 18000, stock: 15 }
];

let totalStockValue = 0;

for (let mobile of mobiles) {
    console.log(mobile.brand, mobile.model);

    totalStockValue += mobile.price * mobile.stock;

    if (mobile.price > 20000) {
        console.log("Above 20000:", mobile.model);
    }

    switch (mobile.brand) {
        case "Samsung":
            console.log("Premium Brand");
            break;
        case "Motorola":
            console.log("Performance Brand");
            break;
        case "Realme":
            console.log("Budget Brand");
            break;
    }
}

console.log("Total Stock Value:", totalStockValue);

function salesReport(callback) {
    callback();
}

salesReport(function () {
    console.log("Sales Report Generated");
});