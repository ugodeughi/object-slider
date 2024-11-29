const pics = [
  {
    image: 'img/01.jpg',
    title: 'Svezia',
    text: 'Scandinavia\'s blend of nature and innovation.',
  }, {
    image: 'img/02.jpg',
    title: 'Norvegia',
    text: 'Fjords, mountains, and coastal charm in Nordic splendor.',
  }, {
    image: 'img/03.jpg',
    title: 'Alaska',
    text: 'Untamed wilderness and rugged beauty in the Last Frontier.',
  }, {
    image: 'img/04.jpg',
    title: 'Gran Canyon',
    text: 'Nature\'s masterpiece, a colorful tapestry of cliffs.',
  }, {
    image: 'img/05.jpg',
    title: "Skyrim",
    text: 'Epic Nordic fantasy with dragons and ancient magic.',
  }
];

const prevButtun = document.getElementById('prev');
const nextButtun = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery');
const thumbnailsGallery = document.getElementById('thumbnails');
const carouselElement = document.getElementById('carousel');

let counterActiveIndex = 0;

// stampo tutti gli elementi delle immagini alla stato di default
printElements(pics, carouselGallery, thumbnailsGallery);

// seleziono tutti gli elementi galley/thumbs
const images = document.querySelectorAll('#carousel figure');
const thumbs = document.querySelectorAll('#thumbnails img');


prevButtun.addEventListener('click', () => {
  counterActiveIndex =  gotoNextPrev(false, images, thumbs, counterActiveIndex)
})
nextButtun.addEventListener('click', () => {
  counterActiveIndex = gotoNextPrev(true, images, thumbs, counterActiveIndex)
})

for (let index = 0; index < thumbs.length; index++) {
  const thumb = thumbs[index];
  thumb.addEventListener('click', () => {
    counterActiveIndex =  selectImage(index, counterActiveIndex, images, thumbs);
  })
}

// seeziono il primo elemento
images[counterActiveIndex].classList.add('active')
thumbs[counterActiveIndex].classList.add('active')

// auto LOOP
let autoplayOn = true;

setInterval(() => {
  if(autoplayOn){
    counterActiveIndex = gotoNextPrev(true, images, thumbs, counterActiveIndex)
  }
}, 2000)

carouselElement.addEventListener('mouseenter', () => {
  autoplayOn = false;
})
thumbnailsGallery.addEventListener('mouseenter', () => {
  autoplayOn = false;
  
})
carouselElement.addEventListener('mouseleave', () => {
  autoplayOn = true;  
})
thumbnailsGallery.addEventListener('mouseleave', () => {
  autoplayOn = true;  
})