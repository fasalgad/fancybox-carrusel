import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.css';

import './style.css';

const container = document.getElementById('myCarousel');

let arrays = [
  { id: 1, name: 'descripcion1', img: 'img1' },
  { id: 2, name: 'descripcion2', img: 'img2' },
];
arrays.forEach((item) => {
  let div = document.createElement('div');
  div.classList.add('f-carousel__slide');
  div.innerHTML = `
  <h3>${item.id} ${item.name}</h3>
  <div>${item.img}</div>
  `;
  container.append(div);
});

const options = { infinite: true };

new Carousel(container, options);
let div = document.createElement('div');
div.classList.add('f-carousel__slide');
div.innerHTML = `
  <h3>asdasd</h3>
  <div>asdasd</div>
  `;
container.append(div);
