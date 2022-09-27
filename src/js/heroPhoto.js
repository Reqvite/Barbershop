const heroBlockReF = document.querySelectorAll('.hero-photo')

function changePhoto() {
    let num = 0;
    setInterval(() => {
        num += 1;
        if (num === 3) {
            num = 0
            heroBlockReF[2].style.opacity = '0';
            heroBlockReF[0].style.opacity = '1';
        }
        heroBlockReF[num].style.opacity = '1';
        if (num !== 0) {
           heroBlockReF[num-1].style.opacity = '0';   
        }  
    }, 10000)    
}
changePhoto()

