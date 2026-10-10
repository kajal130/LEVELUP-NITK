import mongoose from 'mongoose';

const mentorshipSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  senior: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  topic: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Accepted', 'Completed', 'Declined'], default: 'Pending' },
  scheduledTime: { type: Date },
  meetingUrl: { type: String }
}, { timestamps: true });

export const Mentorship = mongoose.models.Mentorship || mongoose.model('Mentorship', mentorshipSchema);
