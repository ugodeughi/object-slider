
/**
 * 
 * @param {array} arrayGallery 
 * @param {HTMLElement} targetGallery 
 * @param {HTMLElement} targetThumb 
 */
const printElements = (arrayGallery, targetGallery, targetThumb) => {

  let galleryElements = '', thumbnailsElements = '';

  for(let pic of arrayGallery){
    const {image, title, text} = pic;  
    const img = `<img alt="${title}" src="${image}">`;

    thumbnailsElements += img

    galleryElements += `
    <figure class="">
          <figcaption>
            <h2>${title}</h2>
            <h3>${text}</h3>
          </figcaption>
          ${img}
    </figure>`
    
  }
  console.log(targetGallery);
  
  targetGallery.innerHTML = galleryElements;
  targetThumb.innerHTML = thumbnailsElements;
}

const selectImage = (newIndex, oldIndex, images, thumbs) => {
  images[oldIndex].classList.remove('active')
  thumbs[oldIndex].classList.remove('active')

  images[newIndex].classList.add('active')
  thumbs[newIndex].classList.add('active')
  
  return newIndex;
}

const gotoNextPrev = (isNext, images, thumbs, counterActiveIndex) => {

  const oldIndex = counterActiveIndex;

  isNext ? counterActiveIndex++ : counterActiveIndex--;

  // per il loop infinito controllo se il counter > alla launghezza dell'array lo posiziono sull'elemento 0
  // se è inferiore a 0 lo posiziono sull'ultimo elemento
  if(counterActiveIndex === images.length) counterActiveIndex = 0;
  if(counterActiveIndex < 0) counterActiveIndex = images.length - 1;

  selectImage(counterActiveIndex, oldIndex, images, thumbs)
  
  return counterActiveIndex
}