module.exports = async function fetchRestaurants(req, res) {
    const result = restaurants.fetchRestaurants();
    if (result) {
        return res.json(result);
    } else {
        return res.notFound();
    }
};
