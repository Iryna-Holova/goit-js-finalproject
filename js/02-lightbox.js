import { galleryItems } from './gallery-items.js';
// Change code below this line

// Select the gallery element
const gallery = document.querySelector('.gallery');

// Generate the HTML markup for gallery
const galleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');

// Insert the gallery markup into the HTML
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Initialize the SimpleLightbox instance for the gallery
new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

/**
 * Creates the HTML markup for each gallery item.
 * @param {Object} item - The gallery item data.
 * @param {string} item.preview - The URL of the preview image.
 * @param {string} item.original - The URL of the original image.
 * @param {string} item.description - The description of the image.
 * @returns {string} The HTML markup for the gallery item.
 */
function makeGalleryItemMarkup({ preview, original, description }) {
  return `<li class="gallery__item">
            <a class="gallery__link" href=${original}>
              <img class="gallery__image" src=${preview} alt='${description}' />
            </a>
          </li>`;
}
