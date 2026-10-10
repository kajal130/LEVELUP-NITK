import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  authorName: String,
  authorRole: String,
  authorAvatar: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

const forumPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  authorName: String,
  authorBranch: String,
  authorAvatar: String,
  tags: [String],
  likes: { type: Number, default: 0 },
  likedBy: [String],
  comments: [commentSchema]
}, { timestamps: true });

export const ForumPost = mongoose.models.ForumPost || mongoose.model('ForumPost', forumPostSchema);
