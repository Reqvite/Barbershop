const BodyRef = document.querySelector('body');
const backDropRef = document.querySelector('.backdrop');
const modalRef = document.querySelector('.modal');
const backDropMaps = document.querySelector('.backdrop-maps')
const modalMaps = document.querySelector('.modal-maps')

const closeModal = (e) => {
    if ((e.target.getAttribute('class')?.includes('backdrop')) || e.code === 'Escape' || (e.target.getAttribute('href')?.includes('icon-cross')) || (e.target.getAttribute('class')?.includes('cross-modal'))){
        backDropRef.classList.add('is-hidden');
        modalRef.classList.remove('is-open');
        backDropMaps.classList.add('is-hidden');
        modalMaps.classList.remove('is-open');
        window.removeEventListener('keydown', closeModal);
        document.querySelector('body').style.overflow = 'visible';
    } 
}

const openModal = (e) => {
    closeModal(e)
    if (e.target.getAttribute('class')?.includes('btn-modal')) {
            document.querySelector('body').style.overflow = 'hidden'; 
        backDropRef.classList.remove('is-hidden');
        modalRef.classList.add('is-open')
        window.addEventListener('keydown', closeModal)
    } else if (e.target.getAttribute('class')?.includes('contacts-list__link')) {
        e.preventDefault()
            document.querySelector('body').style.overflow = 'hidden'; 
        modalMaps.classList.add('is-open');
        backDropMaps.classList.remove('is-hidden')
        modalRef.classList.add('is-open')
        window.addEventListener('keydown', closeModal)
    } else {
        return;
    }
}


BodyRef.addEventListener('click', openModal)

