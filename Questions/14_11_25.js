db.products.insertMany([
    { "_id": 1, "name": "iPhone 15", "category": "mobile", "price": 1200, "rating": 4.7, "stock": 30 },
    { "_id": 2, "name": "Samsung Galaxy S24", "category": "mobile", "price": 1100, "rating": 4.5, "stock": 25 },
    { "_id": 3, "name": "MacBook Air", "category": "laptop", "price": 1800, "rating": 4.8, "stock": 15 },
    { "_id": 4, "name": "Dell XPS", "category": "laptop", "price": 1600, "rating": 4.6, "stock": 20 },
    { "_id": 5, "name": "AirPods Pro", "category": "accessory", "price": 250, "rating": 4.3, "stock": 50 },
    { "_id": 6, "name": "Logitech Mouse", "category": "accessory", "price": 80, "rating": 4.4, "stock": 100 }
])

// Que-3: 
// 1. Write an aggregation query to find the average rating and total stock value (price × stock) for each category.
// 2. Then, decide and explain which field(s) you should create an index on to make this aggregation most efficient — and why.