const vidBtn = document.querySelector('.vp-a');
const videoPopup = document.querySelector('.video-popup');
const vidClose = document.getElementById('closeVid');
const vidOverlay = document.querySelector('.popup-overlay');
vidBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    videoPopup.classList.add('show');
});
vidClose.addEventListener('click',()=>{
    videoPopup.classList.remove('show');
});
vidOverlay.addEventListener('click',()=>{
    videoPopup.classList.remove('show');
});
