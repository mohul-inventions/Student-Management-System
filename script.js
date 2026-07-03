window.onload = function () {
    loadStudents();
};

async function saveStudent() {

    const name = document.getElementById("name").value;
    const department = document.getElementById("department").value;

    if (name === "" || department === "") {
        alert("Please fill all fields");
        return;
    }

    await fetch("http://localhost:3000/students", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            department
        })

    });

    document.getElementById("name").value = "";
    document.getElementById("department").value = "";

    loadStudents();
}

async function loadStudents() {

    const response = await fetch("http://localhost:3000/students");

    const students = await response.json();

    let rows = "";

    students.forEach(student => {

        rows += `
        <tr>

            <td>${student.name}</td>
            <td>${student.department}</td>

            <td>

                <button class="editBtn"
                onclick="editStudent('${student._id}','${student.name}','${student.department}')">

                Edit

                </button>

                <button class="deleteBtn"
                onclick="deleteStudent('${student._id}')">

                Delete

                </button>

            </td>

        </tr>
        `;

    });

    document.getElementById("studentTable").innerHTML = rows;

}

async function editStudent(id, oldName, oldDepartment) {

    const name = prompt("Enter New Name", oldName);
    const department = prompt("Enter New Department", oldDepartment);

    if (name == null || department == null)
        return;

    await fetch(`http://localhost:3000/students/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name,
            department
        })

    });

    loadStudents();

}

async function deleteStudent(id) {

    if (!confirm("Are you sure?"))
        return;

    await fetch(`http://localhost:3000/students/${id}`, {

        method: "DELETE"

    });

    loadStudents();

}