
const studentName = "Gulsezim Kapizova";
const group = "SE-2517";

console.log("Student:", studentName, "Group:", group);

window.addEventListener("load", () => {
    alert("Hello, JavaScript World!");
});

document.getElementById("helloButton").addEventListener("click", () => {
    alert("Hello, JavaScript World!");
});

const course = "JavaScript";
const firstNumber = 12;
const secondNumber = 4;
const isStudent = true;

console.log("String:", course);
console.log("Number:", firstNumber);
console.log("Boolean:", isStudent);

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Concatenation:", studentName + " studies " + course);

document.getElementById("mathResults").textContent =
    `12 + 4 = ${firstNumber + secondNumber} · ` +
    `12 - 4 = ${firstNumber - secondNumber} · ` +
    `12 × 4 = ${firstNumber * secondNumber} · ` +
    `12 ÷ 4 = ${firstNumber / secondNumber}`;

document.getElementById("changeText").addEventListener("click", () => {
    document.getElementById("changeParagraph").textContent =
        "The paragraph was updated using JavaScript!";
});

let colorChanged = false;

document.getElementById("changeColor").addEventListener("click", () => {
    colorChanged = !colorChanged;

    document.getElementById("styleBox").style.backgroundColor =
        colorChanged ? "#c8f2d9" : "#e7eeff";
});

let fontSize = 16;

document.getElementById("changeFont").addEventListener("click", () => {
    fontSize = fontSize >= 26 ? 16 : fontSize + 2;

    document.getElementById("styleBox").style.fontSize = fontSize + "px";
});

let itemNumber = 1;

document.getElementById("addItem").addEventListener("click", () => {
    itemNumber++;

    const li = document.createElement("li");
    li.textContent = "Item " + itemNumber;

    document.getElementById("itemList").appendChild(li);
});

document.getElementById("removeItem").addEventListener("click", () => {
    const list = document.getElementById("itemList");

    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
});

const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", () => {
    hoverBox.classList.add("active");
});

hoverBox.addEventListener("mouseout", () => {
    hoverBox.classList.remove("active");
});

document.getElementById("liveInput").addEventListener("keyup", event => {
    document.getElementById("liveOutput").textContent =
        event.target.value || "(empty)";
});

document.getElementById("validationForm").addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("formMessage");

    message.className = "";

    if (!name || !email || !password) {
        message.textContent = "Please fill in all fields.";
        message.classList.add("error");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.classList.add("error");
    } else {
        message.textContent = "Form submitted successfully!";
        message.classList.add("success");
    }
});

const tasks = [];
let nextTaskId = 1;

function renderTasks() {
    const list = document.getElementById("todoList");
    list.replaceChildren();

    tasks.forEach(task => {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.setAttribute("aria-label", "Mark " + task.text + " complete");

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            renderTasks();
        });

        const label = document.createElement("span");
        label.textContent = task.text;

        const remove = document.createElement("button");
        remove.textContent = "Delete";

        remove.addEventListener("click", () => {
            const index = tasks.findIndex(item => item.id === task.id);

            if (index !== -1) {
                tasks.splice(index, 1);
            }

            renderTasks();
        });

        li.append(checkbox, label, remove);
        list.appendChild(li);
    });

    const completed = tasks.filter(task => task.completed).length;

    document.getElementById("taskCount").textContent =
        `${tasks.length} task(s) · ${completed} completed`;
}

document.getElementById("todoForm").addEventListener("submit", event => {
    event.preventDefault();

    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (!text) {
        return;
    }

    tasks.push({
        id: nextTaskId++,
        text: text,
        completed: false
    });

    input.value = "";

    renderTasks();
    input.focus();
});

renderTasks();
