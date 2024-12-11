document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const studentID = document.getElementById("studentID").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;

    // Add student to table
    const table = document.getElementById("studentList");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${studentID}</td>
        <td>${email}</td>
        <td>${contact}</td>
        <td class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    `;

    // Add delete functionality
    row.querySelector(".delete").addEventListener("click", () => {
        row.remove();
    });

    // Add edit functionality (basic example)
    row.querySelector(".edit").addEventListener("click", () => {
        document.getElementById("name").value = name;
        document.getElementById("studentID").value = studentID;
        document.getElementById("email").value = email;
        document.getElementById("contact").value = contact;
        row.remove();
    });

    table.appendChild(row);

    // Clear form
    document.getElementById("studentForm").reset();
});
