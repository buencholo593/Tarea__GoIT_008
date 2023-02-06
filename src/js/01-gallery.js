// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";

const divRef = document.querySelector(".gallery");

function createGalleryMarkup(items) {
return items.map(
    (item) => `<div class="gallery__item">
                    <a class="gallery__link" href="${item.original}">
                    <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                    />
                    </a>
                    </div>`
)
.join("")
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

divRef.innerHTML = addGalleryMarkup;

var lightbox = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionData: "alt"
})