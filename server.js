const express = require('express');
const app = express();

// --- Data ---
const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const courses = [
    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

// --- 1. Student Router ---
const studentRouter = express.Router();

// GET /students
studentRouter.get('/', (req, res) => {
    const studentNames = students.map(s => s.name).join(', ');
    res.send(`Students: ${studentNames}`);
});

// GET /students/:id
studentRouter.get('/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    
    if (student) {
        res.send(`Student: ${student.name}`);
    } else {
        res.send('Student not found');
    }
});

// --- 2. Course Router ---
const courseRouter = express.Router();

// GET /courses
courseRouter.get('/', (req, res) => {
    const courseNames = courses.map(c => c.name).join(', ');
    res.send(`Courses: ${courseNames}`);
});

// GET /courses/:id
courseRouter.get('/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);
    
    if (course) {
        res.send(`Course: ${course.name}, Description: ${course.description}`);
    } else {
        res.send('Course not found');
    }
});

// --- Main App Routes ---

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the Student & Course Portal API!');
});

// Mount the routers
app.use('/students', studentRouter);
app.use('/courses', courseRouter);

// 404 Handle Invalid Routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});