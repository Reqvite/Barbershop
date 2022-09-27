const spanRef = document.querySelectorAll('.benefits-list__numbers')

let intervalId = null;
elNumber = 0;

function checkDevice() {
       if (/Android|webOS|iPhone|iPad|iPod|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
        .test(navigator.userAgent)) {
        spanRef.forEach(el => {
            el.textContent = el.dataset.num;
        });
       } else {
           window.addEventListener('scroll', checkCoordinates);  
    }   
}

checkDevice()

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

function checkCoordinates (){
    const documentRect = document.documentElement.getBoundingClientRect();
    if (documentRect.top<= -800) {
        counter()
        window.removeEventListener('scroll', checkCoordinates);
    } 
}
