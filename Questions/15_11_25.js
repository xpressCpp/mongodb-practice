db.students.insertMany([
    { "name": "Rahul", "course": "Maths", "marks": 78, "city": "Delhi" },
    { "name": "Priya", "course": "Science", "marks": 92, "city": "Mumbai" },
    { "name": "Aman", "course": "Maths", "marks": 85, "city": "Delhi" },
    { "name": "Sara", "course": "English", "marks": 74, "city": "Bangalore" },
    { "name": "Rohan", "course": "Science", "marks": 88, "city": "Delhi" }
])

// Que-Write an aggregation query to find:
// 1️. The average marks for each course
// 2️. And also return how many students are enrolled in each course