import couponService from "../services/coupon.service.js";

export default {
  getAllCoupons: async (req, res) => {
    const coupons = await couponService.findAllCoupons();
    if (!coupons) return res.status(400).json({ message: 'Can not get users'});
    return res.status(200).send(coupons);
  }
}