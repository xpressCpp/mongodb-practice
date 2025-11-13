db.orders.insertMany([
    { "_id": 1, "customer": "Alice", "items": ["pen", "notebook"], "total": 120, "status": "delivered" },
    { "_id": 2, "customer": "Bob", "items": ["bag"], "total": 450, "status": "pending" },
    { "_id": 3, "customer": "Charlie", "items": ["pen", "pencil", "eraser"], "total": 90, "status": "delivered" },
    { "_id": 4, "customer": "Alice", "items": ["notebook"], "total": 60, "status": "pending" }
])

// Que-Write a MongoDB query to find the total amount spent by each customer where the status is "delivered"

db.orders.aggregate([
    { $match: { status: 'delivered' }},
    { $group: {
        _id: '$customer',
        totalSpent: { $sum: '$total' }
    }}
])