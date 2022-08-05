// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line
console.log(galleryItems);
const markup = galleryItems
    .map((item) => 
  `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`)
  .join("");
// console.log(markup);

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend',markup)
var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionType: 'attr',
    captionPosition: 'bottom',
    captionDelay: 250,
    captionsData:'alt'
});

