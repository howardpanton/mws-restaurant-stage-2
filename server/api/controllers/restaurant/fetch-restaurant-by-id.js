module.exports = async function fetchRestaurantById(req, res) {
  let id = req.param("restaurant_id");
  if (id) {
    const result = restaurants.fetchRestaurantById(id);
    if (result) {
      return res.json(result);
    } else {
      return res.notFound();
    }
  } else {
    return res.notFound();
  }
};
