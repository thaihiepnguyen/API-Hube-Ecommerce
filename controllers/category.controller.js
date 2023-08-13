import CategoryService from "../services/category.service.js";

export default {
  getAllCategories: async (req, res) => {
    const categories =  await CategoryService.getAllCategories();
    if (!categories) return res.status(400).json({ message: 'Can not get categories'});

    return res.status(200).send(categories);
  },
  getCategoryById: async (req, res) => {
    const { id } = req.params;
    const category = await CategoryService.getCategoryById(id);
    if (!category) return res.status(400).json({ message: 'Can not get category'});

    return res.status(200).send(category);
  }
}