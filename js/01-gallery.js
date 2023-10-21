import { galleryItems } from './gallery-items.js';
// Change code below this line

// Select the gallery element
const gallery = document.querySelector('.gallery');

// Generate the HTML markup for gallery
const galleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');

// Insert the gallery markup into the HTML
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Adding click event listener to the gallery
gallery.addEventListener('click', handleGalleryItemClick);

let modal;

/**
 * Creates the HTML markup for each item in the gallery.
 * @param {Object} item - The gallery item data.
 * @param {string} item.preview - The URL of the preview image.
 * @param {string} item.original - The URL of the original image.
 * @param {string} item.description - The description of the image.
 * @returns {string} The HTML markup for the gallery item.
 */
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

/**
 * Handles the click event on gallery items.
 * @param {Event} e - The click event.
 */
function handleGalleryItemClick(e) {
  if (e.target.nodeName !== 'IMG') return;

  e.preventDefault();

  const imageSrc = e.target.dataset.source;
  const imageAlt = e.target.getAttribute('alt');

  onModalOpen(imageSrc, imageAlt);
}

/**
 * Opens the modal with the selected image.
 * @param {string} src - The source URL of the image.
 * @param {string} alt - The alternate text of the image.
 */
function onModalOpen(src, alt) {
  // Initialize the basicLightbox instance for the gallery
  modal = basicLightbox.create(`<img src=${src} alt='${alt}'>`, {
    onShow: () => {
      window.addEventListener('keydown', handleModalClose);
    },
    onClose: () => {
      window.removeEventListener('keydown', handleModalClose);
    },
  });
  modal.show();
}

/**
 * Handles the modal close event.
 * @param {KeyboardEvent} e - The keyboard event.
 */
function handleModalClose(e) {
  if (e.code !== 'Escape') return;
  modal.close();
}
