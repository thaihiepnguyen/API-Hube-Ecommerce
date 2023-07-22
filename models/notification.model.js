import mongoose from 'mongoose';

const notificationSchema = mongoose.Schema({
    noti_template: {
      type: String,
    },
    noti_content: {
      type: String,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Notification', notificationSchema, 'notification_templates');