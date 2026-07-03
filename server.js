const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});
app.get("/", (req, res) => {
    res.send("Server is Running Successfully...");
});
app.post("/students", async (req, res) => {
    try {
        const student = new Student({

            name: req.body.name,
            department: req.body.department
        });
        await student.save();
        res.json({
            message: "Student Added Successfully",
            student: student
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);

    }
    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
app.put("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                department: req.body.department
            },
            {
                new: true
            }
        );
        res.json({
            message: "Student Updated Successfully",
            student: student
        });

    }
    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
app.delete("/students/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({
            message: "Student Deleted Successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
});
app.listen(3000, () => {
    console.log("Server started on Port 3000");
});
