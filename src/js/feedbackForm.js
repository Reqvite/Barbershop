import throttle from "lodash.throttle";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const feedbackForm = document.querySelector('.section-feedback__form')

const STORAGE_KEY = "feedbackForm";

feedbackForm.addEventListener('submit', feedbackFormHandle)
feedbackForm.addEventListener('input', throttle(getData, 500) )

let feedbackFormData = {};

checkLocalStorage()

function getData(e) {
    console.log(e.target.value);
    feedbackFormData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
}

function feedbackFormHandle(e) {
    e.preventDefault()
    if (feedbackForm[0].value === '' || feedbackForm[1].value === '') {
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
}

function checkLocalStorage() {
    const getValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (getValue) {
        feedbackForm[0].value = getValue.name || '';
        feedbackForm[1].value = getValue.tel || '';
        feedbackForm[2].value = getValue.text || '';
        feedbackFormData = getValue;
    }
}