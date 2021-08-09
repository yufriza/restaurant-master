/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('add favorite restaurant', async ({ I }) => {
  I.see('No favorite restaurant found', '.restaurant-not-found');
  I.amOnPage('/');
  I.seeElement('.card_title');

  const firstRestaurant = locate('.card_title').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click('.card_btn');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card_title');
  const favoriteRestaurantName = await I.grabTextFrom('.card_title');

  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});

Scenario('remove favorite restaurant', async ({ I }) => {
  I.see('No favorite restaurant found', '.restaurant-not-found');
  I.amOnPage('/');
  I.seeElement('.card_title');

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.card_btn').at(i));
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('.card_title');
  const removeFavoriteRestaurant = locate('.card_title').last();
  const removeFavoriteRestaurantName = await I.grabTextFrom(removeFavoriteRestaurant);
  I.click('.card_btn');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  const numOfFavoriteRestaurant = await I.grabNumberOfVisibleElements('.card_title');

  for (let i = 1; i <= numOfFavoriteRestaurant.length; i++) {
    const favoriteRestaurant = locate('.card_title').at(i);
    const favoriteRestaurantName = await I.grabTextFrom(favoriteRestaurant);
    assert.notStrictEqual(removeFavoriteRestaurantName, favoriteRestaurantName);
  }
});
