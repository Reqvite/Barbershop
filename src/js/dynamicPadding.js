let intervalId = null

checkImgHeight()
function checkImgHeight() {
    const imgHeigth = document.querySelector('.hero-photo')
    intervalId = setInterval(() => {
        if (imgHeigth.height > 364) {
         let height = imgHeigth.height - 280;
        const padding = document.querySelector('.hero-container');
            padding.style.padding = `150px 120px ${height}px 31px`;
        } else {
            return;
        }
    }, 500);
}

   