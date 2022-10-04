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
    console.log(feedbackFormData.name);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
     feedbackForm.forEach((el => {
            el[0].value = feedbackFormData.name || '';
        el[1].value = feedbackFormData.tel || '';
        el[2].value = feedbackFormData.text || '';
        }))
        
}

function feedbackFormHandle(e) {
    e.preventDefault()
       if (feedbackFormData.name === undefined || feedbackFormData.tel === undefined) {
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
           feedbackForm.forEach((el => {
                       el.reset();  
           }))
          localStorage.removeItem(STORAGE_KEY);
           feedbackFormData = {};
           
    }   
     
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