import NotificationModel from "../models/notification.model.js";

export default {
  findNotification: async (template_id) => {
    return await NotificationModel.findOne({ templateId: template_id}, {templateContent: 1, _id: 0});
  }
}