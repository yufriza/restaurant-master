/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <div class="page-title">
      <div id="likeButtonContainer"></div>
      <div id="restaurant" class="restaurant container">
    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createDetailTemplate(restaurant);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        name: restaurant.name,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });

    const nameReviewer = document.querySelector('#reviewer');
    const theReview = document.querySelector('#the-review');
    const submitReview = document.querySelector('#submit-review');

    submitReview.addEventListener('click', () => {
      const review = {
        id: restaurant.id,
        name: nameReviewer.value,
        review: theReview.value,
      };
      RestaurantSource.reviewRestaurant(review);
      window.location.reload();
    });
  },
};

export default Detail;
