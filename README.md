# 🎓 Student Management System

A modern Full Stack Student Management System built using **HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, and Mongoose**. The application allows users to perform complete CRUD (Create, Read, Update, Delete) operations with a beautiful animated Glassmorphism user interface.

---

## ✨ Features

- ➕ Add Student
- 📋 View All Students
- ✏️ Update Student Details
- 🗑️ Delete Student
- 💾 MongoDB Database Integration
- 🌐 REST API using Express.js
- 🎨 Modern Glassmorphism UI
- 🌈 Animated Gradient Background
- ✨ Smooth Animations & Hover Effects
- 📱 Responsive Design

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)
- Google Fonts (Poppins)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

### Tools
- VS Code
- Thunder Client
- Live Server
- Git & GitHub

---

## 📂 Project Structure

```
Student Management System/
│
├── backend/
│   ├── models/
│   │   └── Student.js
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/student-management-system.git
```

### 2. Navigate to Backend

```bash
cd backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start MongoDB

Ensure MongoDB Community Server is installed and running.

### 5. Run the Backend Server

```bash
node server.js
```

Expected Output:

```
Server started on Port 3000
MongoDB Connected
```

### 6. Run the Frontend

Open the **frontend** folder and launch `index.html` using the **Live Server** extension.

---

## 🌐 REST API Endpoints

### Get All Students

```
GET /students
```

### Add Student

```
POST /students
```

Example Request Body

```json
{
  "name": "Leela",
  "department": "CSE"
}
```

### Update Student

```
PUT /students/:id
```

Example Request Body

```json
{
  "name": "Mohul Ram",
  "department": "ECE"
}
```

### Delete Student

```
DELETE /students/:id
```

---

## 🎯 User Interface

The application includes a modern and interactive design with:

- 🌈 Animated Gradient Background
- 💎 Glassmorphism Cards
- ✨ Smooth Fade-in Animations
- 🚀 Hover Effects
- 🎨 Modern Typography
- 📊 Responsive Student Table
- 🖱️ Interactive Buttons
- 💫 Input Focus Glow Effects

---



## 📌 Future Enhancements

- 🔍 Search Students
- 📑 Pagination
- 🎯 Department Filter
- 🔐 User Authentication
- 🌙 Dark / Light Mode
- 📊 Dashboard Analytics
- 📥 Export Data to Excel/PDF
- ☁️ Cloud Deployment

---

## 👨‍💻 Author

**Mohul Ram**

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-profile

---

## 📄 License

This project is developed for educational and learning purposes.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

Happy Coding! 🚀
