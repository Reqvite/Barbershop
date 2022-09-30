import throttle from "lodash.throttle";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const feedbackForm = document.querySelectorAll('.section-feedback__form')

const STORAGE_KEY = "feedbackForm";

addEventListener()
function addEventListener() {
    feedbackForm.forEach((el => {
       el.addEventListener('submit', feedbackFormHandle)
        el.addEventListener('input', throttle(getData, 500)) 
    }))
}


let feedbackFormData = {};

checkLocalStorage()

function getData(e) {
    feedbackFormData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
}

function feedbackFormHandle(e) {
    e.preventDefault()
    feedbackForm.forEach((el => {
       if (el[0].value === '' || el[1].value === '') {
        Swal.fire({
  title: 'Please fill in the fields (name and telephone are required).',
  icon: 'info',
  confirmButtonText: 'Cool'
})
    } else {
    Swal.fire({
  title: 'Thank you, our manager will contact you soon.',
  icon: 'success',
                 confirmButtonText: 'Cool'
             })
            console.log(feedbackFormData);
          e.currentTarget.reset();
          localStorage.removeItem(STORAGE_KEY);
        formData = {};
    }   
    }))
      
}

function checkLocalStorage() {
    const getValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (getValue) {
        feedbackForm.forEach((el => {
            el[0].value = getValue.name || '';
        el[1].value = getValue.tel || '';
        el[2].value = getValue.text || '';
        feedbackFormData = getValue;
        }))
        
    }
}