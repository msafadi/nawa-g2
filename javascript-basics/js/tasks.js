const addBtn = document.querySelector('#add-task');
const list = document.querySelector('ul#tasks');
const addForm = document.querySelector('#add-form');
const addBox = document.querySelector('#add-box');
const input = document.querySelector('#add-form input');
const clearBtn = document.querySelector('.btn-danger');

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