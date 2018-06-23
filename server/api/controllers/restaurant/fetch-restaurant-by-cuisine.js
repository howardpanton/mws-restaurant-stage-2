module.exports = async function fetchRestaurantByCuisine(req, res) {
    let cuisine = req.param('cuisine_name');
    if (cuisine) {
        const result = restaurants.fetchRestaurantByCuisine(cuisine);
    }
    if (result) {
        return res.json(result);
    } else {
        return res.notFound();
    }
};
