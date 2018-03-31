let data  = require('./restaurant.json');

data = JSON.parse(JSON.stringify(data));

/**
 * Fetch all restaurants.
 */
module.exports.fetchRestaurants = () => {
    let restaurants = data.restaurants;
    if (restaurants) { // Got the restaurant
        return restaurants;
    } else { // Restaurant does not exist in the database
        return null;
    }
}


/**
 * Fetch a restaurant by its ID.
 */
module.exports.fetchRestaurantById = (id) => {
    let restaurant = data.restaurants.find(r => r.id == id);
    if (restaurant) { // Got the restaurant
        return restaurant;
    } else { // Restaurant does not exist in the database
        return null;
    }
}


/**
 * Fetch restaurants by a cuisine type with proper error handling.
 */
module.exports.fetchRestaurantByCuisine = (cuisine) => {
    cuisine = cuisine[0].toUpperCase() + cuisine.slice(1);
    let restaurants = data.restaurants.filter(r => r.cuisine_type === cuisine);
    sails.log.debug(restaurants);
    if (restaurants) { // Got the restaurant
        return restaurants;
    } else { // Restaurant does not exist in the database
        return null;
    }
}
