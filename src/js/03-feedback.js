import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');
let input = document.querySelector("input");
let textarea = document.querySelector("textarea");

initForm();

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(form);
    formData.forEach((value, name) => console.log(value, name));
     input.value = '';
    textarea.value = '';
    localStorage.removeItem(LOCALSTORAGE_KEY);
});

form.addEventListener('input', throttle(evt => {
  let usersData = localStorage.getItem(LOCALSTORAGE_KEY);
  usersData = usersData ? JSON.parse(usersData) : {};
  usersData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(usersData));
},500));


function initForm() {
  let usersData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (usersData) {
    usersData = JSON.parse(usersData);
    Object.entries(usersData).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}

