import ProductService from "../services/product.service.js";

export default {
  getAllProducts: async (req, res) => {
    const products = await ProductService.findAllProducts();

    return res.status(200).send(products);
  }
}