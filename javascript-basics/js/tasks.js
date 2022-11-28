const addBtn = document.querySelector('#add-task');
const list = document.querySelector('ul#tasks');
const addForm = document.querySelector('#add-form');
const addBox = document.querySelector('#add-box');
const input = document.querySelector('#add-form input');
const clearBtn = document.querySelector('.btn-danger');

function Task(id, title) {
    this.id = id;
    this.title = title;
    this.completed = {
        status: false,
        label: "No"
    };
    this.isCompleted = function() {
        return this.completed.status;
    }
}
let task1 = new Task(1, "Task 1")
let task2 = new Task(2, "Task 2")
// alert(task1.title);
// alert(task2.title);

// Object (Simple)
let task = {
    id: 1,
    title: "Task title",
    completed: {
        status: true,
        label: "Completed"
    },
    isCompleted: function() {
        return this.completed.status;
    }
}

task.title = "Task #1";
task.completed.status = true;
task['created_at'] = new Date();
if (task.isCompleted()) {
    //alert(task.created_at.toString());
}

addBtn.addEventListener('click', function(event) {
    event.preventDefault();
    addBox.classList.toggle('d-none');
});

addForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let title = input.value;
    if (title == '') {
        alert('Please enter task title!');
        return;
    }
    list.innerHTML += '<li>' + title + '</li>';
    input.value = "";
});

input.addEventListener('keyup', function(event) {
    console.log(event.key);
    let p = document.querySelector('#add-form input + p');
    p.innerHTML = 'You typed: <b>' + this.value + '</b>';
});

const clearList = function (event) {

    if (event.key == undefined || event.key == 'Delete') {
        let answer = confirm('Are you sure you want to clear the list?')
        if (answer) {
            list.innerHTML = '';
        }
    }
}
// clearList();

document.addEventListener('keyup', clearList);
clearBtn.addEventListener('click', clearList);

// JSON and AJAX: XMLHTTPRequest or FETCH
const loadBtn = document.querySelector('#load-data')
loadBtn.addEventListener('click', function () {
    // let xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function (xhr, e) {
    //     if (this.readyState == 4) {
    //         if (this.status !== 200) {
    //             alert('Error');
    //             return;
    //         }
    //         let data = eval("("+this.responseText+")")
    //         for (i = 0; i < data.length; i++) {
    //             list.innerHTML += `<li>${data[i].title}</li>`
    //         }
    //     }
    // }
    // xhr.open('get', 'data/todos.json');
    // xhr.send();

    // console.log(this);
    // let that = this
    // retrun Promise object
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            // console.log(that)
            for (i = 0; i < data.length; i++) {
                list.innerHTML += `<li>${data[i].title}</li>`
            }
        });
});

// let funcNormal = function(x) {
//     return x + y;
// }

// // Arrow functions
// let func = x => x + y;
// alert( func(1, 2) );






