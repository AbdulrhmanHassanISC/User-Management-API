# User Management API

A RESTful API for managing users built with **Node.js**, **Express**, **MongoDB**, and **Mongoose**.

## Features

- CRUD operations for users (Create, Read, Update, Delete)
- Input validation with `express-validator`
- MongoDB integration with Mongoose ODM
- Request logging middleware
- Global error handling
- Environment-based configuration

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express 5 | Web framework |
| MongoDB | Database |
| Mongoose 9 | ODM (Object Data Modeling) |
| express-validator | Input validation |
| dotenv | Environment variables |
| nodemon | Development auto-reload |

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB (local or cloud instance)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AbdulrhmanHassanISC/User-Management-API.git
cd Simple-Todo-API

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
DB_URL=mongodb://your-mongo-connection-string
```

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `DB_URL` | MongoDB connection string | Required |

### Run the Server

```bash
# Development (with auto-reload)
npm run dev

# Production
node index.js
```

Server starts at `http://localhost:3000`.

## API Reference

### Base URL

```
http://localhost:3000/api/users
```

### Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/users` | Get all users | No |
| `GET` | `/api/users/:id` | Get a single user by ID | No |
| `POST` | `/api/users` | Create a new user | No |
| `PUT` | `/api/users/:id` | Update an existing user | No |
| `DELETE` | `/api/users/:id` | Delete a user | No |

### Request & Response Examples

#### Get All Users

```bash
curl -X GET http://localhost:3000/api/users
```

Response `200 OK`:
```json
{
  "status": "success",
  "message": "Users retrieved successfully",
  "user": [
    {
      "_id": "664f1a2b3c4d5e6f7a8b9c0d",
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "age": 28,
      "phone": "010-1111-0001",
      "createdAt": "2024-01-10T00:00:00.000Z",
      "updatedAt": "2024-01-10T00:00:00.000Z"
    }
  ]
}
```

#### Get User by ID

```bash
curl -X GET http://localhost:3000/api/users/664f1a2b3c4d5e6f7a8b9c0d
```

Response `200 OK`:
```json
{
  "status": "success",
  "user": {
    "_id": "664f1a2b3c4d5e6f7a8b9c0d",
    "name": "Alice Johnson",
    "email": "alice@example.com",
    "age": 28,
    "phone": "010-1111-0001",
    "createdAt": "2024-01-10T00:00:00.000Z",
    "updatedAt": "2024-01-10T00:00:00.000Z"
  }
}
```

Response `404 Not Found`:
```json
{
  "status": "error",
  "message": "User not found"
}
```

#### Create User

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "phone": "010-1234-5678"
  }'
```

Response `201 Created`:
```json
{
  "status": "success",
  "message": "User created successfully",
  "data": {
    "_id": "664f1a2b3c4d5e6f7a8b9c0d",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30,
    "phone": "010-1234-5678",
    "createdAt": "2024-01-10T00:00:00.000Z",
    "updatedAt": "2024-01-10T00:00:00.000Z"
  }
}
```

#### Update User

```bash
curl -X PUT http://localhost:3000/api/users/664f1a2b3c4d5e6f7a8b9c0d \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Updated",
    "email": "john.updated@example.com",
    "age": 31
  }'
```

Response `200 OK`:
```json
{
  "status": "success",
  "message": "User updated successfully"
}
```

#### Delete User

```bash
curl -X DELETE http://localhost:3000/api/users/664f1a2b3c4d5e6f7a8b9c0d
```

Response `200 OK`:
```json
{
  "status": "success",
  "message": "User deleted successfully"
}
```

### Validation Rules

| Field | Rules |
|-------|-------|
| `name` | Required, non-empty string |
| `email` | Required, valid email format |
| `age` | Optional, number |
| `phone` | Optional, string |

## Data Model

```javascript
{
  name:  { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  age:   { type: Number },
  phone: { type: String, trim: true }
}
// Auto-generated: _id, createdAt, updatedAt
```

## Project Structure

```
├── controllers/
│   └── userController.js     # Route handler logic
├── db/
│   └── config.js             # MongoDB connection
├── models/
│   └── UserSchema.js         # Mongoose schema & model
├── routes/
│   └── userRoutes.js         # Express router
├── utils/
│   └── Proper.js             # Error handler & logger middleware
├── validators/
│   └── user.validator.js     # Input validation rules
├── .env                      # Environment variables (gitignored)
├── .gitignore
├── index.js                  # Application entry point
└── package.json
```

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `nodemon index.js` | Run with auto-reload |
| `test` | `echo \"Error: no test specified\" && exit 1` | Tests placeholder |

## License

ISC

## Author

**Abdelrhman**
