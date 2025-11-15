db.students.insertMany([
    { "name": "Rahul", "course": "Maths", "marks": 78, "city": "Delhi" },
    { "name": "Priya", "course": "Science", "marks": 92, "city": "Mumbai" },
    { "name": "Aman", "course": "Maths", "marks": 85, "city": "Delhi" },
    { "name": "Sara", "course": "English", "marks": 74, "city": "Bangalore" },
    { "name": "Rohan", "course": "Science", "marks": 88, "city": "Delhi" }
])

// Que:- Write an aggregation query to find:
// 1️. The average marks for each course
// 2️. And also return how many students are enrolled in each course

db.students.aggregate([
    {
        $group: {
            _id: '$course',
            avgMarks: { $avg: '$marks' },
            totalStudent: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            course: '$_id',
            avgMarks: 1,
            totalStudent: 1
        }
    }
])

// ----------------------

db.students.insertMany([
    { "_id": 1, "name": "Rahul", "course": "Maths", "marks": 78, "city": "Delhi" },
    { "_id": 2, "name": "Priya", "course": "Science", "marks": 92, "city": "Mumbai" },
    { "_id": 3, "name": "Aman", "course": "Maths", "marks": 85, "city": "Delhi" },
    { "_id": 4, "name": "Sara", "course": "English", "marks": 74, "city": "Bangalore" },
    { "_id": 5, "name": "Rohan", "course": "Science", "marks": 88, "city": "Delhi" },
    { "_id": 6, "name": "Neha", "course": "Maths", "marks": 91, "city": "Mumbai" },
    { "_id": 7, "name": "Vikram", "course": "Science", "marks": 79, "city": "Mumbai" }
])

// Que- Filter: Consider only students from Delhi and Mumbai.
// For those students, compute for each course:
// The average marks (rounded to one decimal),
// The number of students (count), and
// The top student name (the student with the highest marks) for that course.

db.students.aggregate([
    { $match: { $or: [{city: 'Delhi'}, {city: 'Mumbai'}] } },
    { $sort: { marks: -1 } },
    { $group: {
        _id: '$course',
        avgMarks: { $avg: '$marks' },
        totalStudent: { $sum: 1 },
        topStudent: { $first: '$name' }
    }},
    { $project: {
        _id: 0,
        course: '$_id',
        avgMarks: { $round: ['$avgMarks', 1] },
        totalStudent: 1, 
        topStudent: 1
    }}
])