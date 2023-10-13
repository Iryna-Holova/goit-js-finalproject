import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', handleGalleryItemClick);

const galleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

let modal;

function makeGalleryItemMarkup({ preview, original, description }) {
  return `<li class="gallery__item">
            <a class="gallery__link" href=${original}>
              <img
                class="gallery__image"
                src=${preview}
                data-source=${original}
                alt='${description}'
              />
            </a>
          </li>`;
}

function handleGalleryItemClick(e) {
  if (e.target.nodeName !== 'IMG') return;

  e.preventDefault();

  const imageSrc = e.target.dataset.source;
  const imageAlt = e.target.getAttribute('alt');

  onModalOpen(imageSrc, imageAlt);
}

function onModalOpen(src, alt) {
  modal = basicLightbox.create(`<img src=${src} alt='${alt}'>`);
  modal.show();
  window.addEventListener('keydown', handleModalClose);
}

function handleModalClose(e) {
  if (e.code !== 'Escape') return;
  modal.close();
  window.removeEventListener('keydown', handleModalClose);
}
