const spanRef = document.querySelectorAll('.benefits-list__numbers')

let intervalId = null;
elNumber = 0;

 function counter() {
     let num = 0;
     if(elNumber <= 3)
     intervalId = setInterval(() => {
         spanRef[elNumber].textContent = num += 1;
         if (num >= Number(spanRef[elNumber].dataset.num)) {
             clearInterval(intervalId)
             num = 0;
             elNumber += 1;
             counter()  
         } 
   }, 1);
}

const checkCoordinates =() => {
    const documentRect = document.documentElement.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    if (documentRect.top<= -800) {
        counter()
        window.removeEventListener('scroll', checkCoordinates);
    } 
}
window.addEventListener('scroll', checkCoordinates)
