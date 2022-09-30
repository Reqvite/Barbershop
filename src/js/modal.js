const BodyRef = document.querySelector('body');
const backDropRef = document.querySelector('.backdrop');
const modalRef = document.querySelector('.modal');


const closeModal = (e) => {
    console.log(e.target);
    if ((e.target.getAttribute('class')?.includes('backdrop')) || e.code === 'Escape' || (e.target.getAttribute('class')?.includes('icon-cross'))){
        backDropRef.classList.add('is-hidden');
        modalRef.classList.remove('is-open')
        window.removeEventListener('keydown', closeModal);
    } 
}

const openModal = (e) => {
    closeModal(e)
    if (e.target.getAttribute('class')?.includes('btn-modal')) {
        backDropRef.classList.remove('is-hidden');
        modalRef.classList.add('is-open')
        window.addEventListener('keydown', closeModal)
    } else {
        return;
    }
}

BodyRef.addEventListener('click', openModal)

