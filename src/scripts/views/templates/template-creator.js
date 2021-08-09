/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createDetailTemplate = (restaurant) => `
  <ul class="breadcrumb">
    <li><a href="#/the-list">Home</a></li>
    <li>${restaurant.name}</li>
  </ul>

  <section class="detail-hero" style="background-image: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${`${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}`})" title="Picture of the hero banner">
    <div class="hero-inner">
      <h2>${restaurant.name}</h2>
    </div>
  </section>

  <div class="grid-container grid-fit info">
    <div class="grid-container grid-fit">
      <div class="grid-element" title="City of restaurant"><p><i class="fa fa-map-marker"></i>&nbsp;&nbsp;${restaurant.city}</p></div>
      <div class="grid-element" title="Address of restaurant"><p><i class="fa fa-location-arrow"></i>&nbsp;&nbsp;${restaurant.address}</p></div>
      <div class="grid-element" title="Category of restaurant"><p><i class="fa fa-tags"></i>&nbsp;&nbsp;${restaurant.categories.map((item) => item.name).join(' - ')}&nbsp;Food</p></div>
      <div class="grid-element" title="Rating of restaurant"><p><i class="fa fa-star"></i>&nbsp;&nbsp;${restaurant.rating}&nbsp;/&nbsp;5</p></div>
    </div>
  </div>

  <hr>

  <div class="grid-container grid-fit">
    <div class="grid-container grid-fit">
      <div class="grid-element about-restaurant" title="About restaurant">
        <h3>About ${restaurant.name} :</h3>
        <article>${restaurant.description}</article>
      </div>
    </div>
    <div class="grid-container grid-fit" title="Menus of restaurant">
      <div class="grid-element"><ul><h3>Eateries&nbsp;:&nbsp;</h3>${restaurant.menus.foods.map((item) => `<li>${item.name}</li>`).join('')}</ul></div>
      <div class="grid-element"><ul><h3>Beverages&nbsp;:&nbsp;</h3>${restaurant.menus.drinks.map((item) => `<li>${item.name}</li>`).join('')}</ul></div>
    </div>
  </div>

  <hr>

  <div class="grid-container grid-fit">
    <div id="new-review" class="rewiew-wrapper">
      <h3 class=""review-header">Add Review</h3>
      <label for="reviewer">Name :</label>
      <input type="text" id="reviewer" style="height: 44px">
      <label for="the-review">Review :</label>
      <input type="text" id="the-review" style="height: 150px">
      <input type="submit" id="submit-review" value="Submit">
    </div>
    <div>
      ${restaurant.customerReviews.map((review) => `
      <div class="review-wrapper">
        <h5 class="reviewer">${review.name}</h5>
        <p class="the-review">${review.review}</p>
        <p class="review-date"">${review.date}</p>
      </div>`).join('')}
    </div>
  </div>
`;

const createListTemplate = (restaurant) => `
  <div class="card">
    <div class="card_image">
      <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" />
    </div>
    <div class="card_content">
      <h2 class="card_title">${restaurant.name}</h2>
      <table class="card_icon">
        <tr>
          <td><i class="fa fa-map-marker"></i>&nbsp;${restaurant.city}</td>
          <td><i class="fa fa-star"></i>&nbsp;${restaurant.rating}</td>
        </tr>
      </table>
      <p class="card_text">${restaurant.description}</p>
      <a href="${`/#/detail/${restaurant.id}`}"><button class="btn card_btn">Read More</button></a>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true" aria-label="like this restaurant"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true" aria-label="unlike this restaurant"></i>
  </button>
`;

export {
  createDetailTemplate, createListTemplate, createLikeButtonTemplate, createUnlikeButtonTemplate,
};
