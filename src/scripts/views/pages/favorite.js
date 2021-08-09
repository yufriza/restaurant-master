/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="page-title">
      <section class="jumbotron">
        <h2>Favorite page</h2>
      </section>
      <div id="restaurant" class="resto container">
        <p class="restaurant-not-found">No favorite restaurant found</p>
      </div>
    </div>
      `;
  },

  async clearRestaurantList(restaurants) {
    const restaurantsContainer = document.querySelector(
      '#restaurant'
    );
    if (restaurants.length > 0) {
      restaurantsContainer.innerHTML = '';
    } else if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<p class="restaurant-not-found">No favorite restaurant found</p>';
    }
  },

  async afterRender() {
    const favRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');

    this.clearRestaurantList(favRestaurants);
    favRestaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createListTemplate(restaurant);
    });
  },
};

export default Favorite;
