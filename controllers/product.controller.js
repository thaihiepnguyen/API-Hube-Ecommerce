import categoryService from "../services/category.service.js";
import ProductService from "../services/product.service.js";

export default {
  getAllProducts: async (req, res) => {
    const products = await ProductService.findAllProducts();

    return res.status(200).send(products);
  },
  getProductbyId: async (req, res) => {
    const id = req.params.proId;
    const product = await ProductService.findProductById(id);
    const category = await categoryService.findCategoryById({_id: product.catId});

    product["_doc"].category = category;

    return res.status(200).send(product);
  },
  getProductOrderByPrice: async (req, res) => {
    const products = await ProductService.findProductOrderByPrice();
    return res.status(200).send(products)
  },
  getProductHistory: async (req, res) => {
    const products = await ProductService.findProductHistory();
    return res.status(200).send(products)
  },
  getProductSale: async (req, res) => {
    const products = await ProductService.findProductSale();
    return res.status(200).send(products)
  }
}