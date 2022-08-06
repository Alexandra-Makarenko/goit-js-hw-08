import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
let input = document.querySelector("input");
let textarea = document.querySelector("textarea");

let email = '';
let message = '';


input.addEventListener("input", () => {
    email = input.value;
    message = textarea.value;
    throttle(localStorage.setItem("feedback-form-state",JSON.stringify({email,message}) ),500);

});
textarea.addEventListener("input", () => {
    email = input.value;
    message = textarea.value;
    throttle(localStorage.setItem("feedback-form-state",JSON.stringify({email,message}) ),500);

});    
    


const savedData = localStorage.getItem("feedback-form-state");
const parsedData = JSON.parse(savedData);

const loadUsersForm = () => {
    let items = {};
    try {
    items = parsedData;
  } catch (error) {
    console.log(error);
    }
    return items || {};
}
const readUsersForm = () => {
    const formData = loadUsersForm();
    input.value = formData.email || '';
    textarea.value = formData.message || '';
    // console.log('formData', formData);
}
readUsersForm();
form.addEventListener('submit', clearForm);
function clearForm(event) {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state");
    input.value = '';
    textarea.value ='';
    console.log('email:', email);
    console.log('message:', message);
}