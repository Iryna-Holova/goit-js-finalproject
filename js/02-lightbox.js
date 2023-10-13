import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

let galleryBox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
galleryBox.on('show.simplelightbox');

function makeGalleryItemMarkup({ preview, original, description }) {
  return `<li class="gallery__item">
            <a class="gallery__link" href=${original}>
              <img class="gallery__image" src=${preview} alt='${description}' />
            </a>
          </li>`;
}
