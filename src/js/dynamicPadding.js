const padding = document.querySelector('.hero-container');
const photoPosition = document.querySelector('.hero-photo');
let intervalId = null

checkImgHeight()
function checkImgHeight() {
    const imgHeigth = document.querySelector('.hero-photo')
    intervalId = setInterval(() => {
            let height = imgHeigth.height - 280;
        if (imgHeigth.width > 773) {
            padding.style.padding = `${height - 50}px 150px 200px 31px`;
        } else if (imgHeigth.height > 364) {
            padding.style.padding = `150px 120px ${height}px 31px`;
        }
        if (window.screen.width >=1230) {
            padding.style.padding = `375px 150px 250px 200px`; 
        }
    }, 4);
}

   