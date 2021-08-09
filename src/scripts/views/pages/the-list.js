/* eslint-disable no-console */
import RestaurantSource from '../../data/restaurant-source';
import { createListTemplate } from '../templates/template-creator';

const TheList = {
  async render() {
    return `
    <hero-component></hero-component>
    <section class="jumbotron">
      <h2>Explore Amazing Restaurants</h2>
    </section>
    <div id="restaurant" class="resto container"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.theListRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createListTemplate(restaurant);
    });
  },
};

export default TheList;
