import UserModel from "../models/user.model.js";

export default {
  save: async (userEncrypt) => {
    await UserModel.create(userEncrypt);
  },
  findUserByEmail: async (email) => {
    return await UserModel.findOne({email});
  },
  findUserById: async (id) => {
    return await UserModel.findById(id);
  }
}