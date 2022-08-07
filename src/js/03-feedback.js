import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
let input = document.querySelector("input");
let textarea = document.querySelector("textarea");


const usersData = {};


form.addEventListener('input', throttle(evt => {
    usersData[evt.target.name] = evt.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(usersData));
}));


const savedData = localStorage.getItem("feedback-form-state");
const parsedData = JSON.parse(savedData);

const loadUsersForm = () => {
    let items = {};
    if (savedData) {
        try {
    items = parsedData;
  } catch (error) {
    console.log(error);
    }
    }
    return items || {};
}
const readUsersForm = () => {
    const formUsersData = loadUsersForm();
    input.value = formUsersData.email || '';
    textarea.value = formUsersData.message || '';
}
readUsersForm();

form.addEventListener('submit', clearForm);
function clearForm(event) {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state");
    console.log('email:', usersData.email || input.value);
    console.log('message:', usersData.message||textarea.value);
    input.value = '';
    textarea.value ='';
  
}