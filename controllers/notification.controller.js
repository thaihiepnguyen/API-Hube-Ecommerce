import NotificationService from "../services/notification.service.js";
import UserService from "../services/user.service.js";

export default {
  getNotification: async (req, res) => {
    const template_id = +req.params.template_id || 1;
    const user = await UserService.findUserById(req.userId);
    const content = await NotificationService.findNotification(template_id);

    const stringContent = JSON.stringify(content);
    const result = JSON.parse(stringContent.replace('#nick_name#', user.fullname));

    return res.send(result);
  }
}