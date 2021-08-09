/* eslint-disable import/prefer-default-export */
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    restaurant,
  });
};

export { createLikeButtonPresenterRestaurant };
