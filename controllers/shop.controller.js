
export default {
  getShopById: (req, res) => {
    const shopId = req.params.shopId;

    res.send(shopId);
  }
}