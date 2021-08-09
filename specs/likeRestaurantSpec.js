/* eslint-disable no-unused-expressions */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Liking A Restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterRestaurant({
      id: 1,
    });

    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeTruthy();
  });

  it('shouldnt show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterRestaurant({
      id: 1,
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeFalsy();
  });

  it('should able to add restaurant into favorite', async () => {
    await TestFactories.createLikeButtonPresenterRestaurant({
      id: 1,
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('shouldnt add again liked restaurant', async () => {
    await TestFactories.createLikeButtonPresenterRestaurant({
      id: 1,
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('shouldnt add id-less restaurant', async () => {
    await TestFactories.createLikeButtonPresenterRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
