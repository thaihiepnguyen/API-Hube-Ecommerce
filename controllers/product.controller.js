import ProductService from "../services/product.service.js";

export default {
  getAllProducts: async (req, res) => {
    const products = await ProductService.findAllProducts();

    return res.status(200).send(products);
  },
  getProductbyId: async (req, res) => {
    const id = req.params.proId;
    const product = await ProductService.findProductById(id);
    return res.status(200).send(product);
  }
}