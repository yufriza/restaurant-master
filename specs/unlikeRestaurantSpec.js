/* eslint-disable no-unused-expressions */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlike button when restaruant is liked', async () => {
    await TestFactories.createLikeButtonPresenterRestaurant({
      id: 1,
    });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]'),
    ).toBeTruthy();
  });

  it('shouldnt display like button when restaurant is liked', async () => {
    await TestFactories.createLikeButtonPresenterRestaurant({
      id: 1,
    });

    expect(
      document.querySelector('[aria-label="like this restaurant"]'),
    ).toBeFalsy();
  });

  it('should able remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterRestaurant({
      id: 1,
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('shouldnt throw error if unliked restaurant not on the list', async () => {
    await TestFactories.createLikeButtonPresenterRestaurant({
      id: 1,
    });

    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
