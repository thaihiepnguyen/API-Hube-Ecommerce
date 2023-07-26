import mongoose from 'mongoose';

const NotificationSchema = mongoose.Schema({
    noti_template: {
      type: String,
    },
    noti_content: {
      type: String,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Notification', NotificationSchema, 'notification_templates');