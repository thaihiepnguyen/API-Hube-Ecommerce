import UserModel from "../models/user.model.js";

export default {
  save: async (userEncrypt) => {
    await UserModel.create(userEncrypt);
  },
  findUserByEmail: async (email) => {
    return await UserModel.findOne({email});
  },
  findUserById: async (id) => {
    const user = await UserModel.findById(id);
    user.password = undefined;
    return user;
  },
  findAllUsers: async () => {
    return await UserModel.find({}, {fullname: 1, email: 1, age: 1, address: 1});
  }
}