import CouponModel from "../models/coupon.model.js";

export default {
  findAllCoupons: async () => {
    return CouponModel.find({});
  }
}