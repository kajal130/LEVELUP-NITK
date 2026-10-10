import { sampleForumPosts } from '../seed/sampleData.js';

export const getForumPosts = async (req, res) => {
  try {
    const { tag } = req.query;
    let posts = [...sampleForumPosts];
    if (tag) {
      posts = posts.filter(p => p.tags.some(t => t.toLowerCase() === tag.toLowerCase()));
    }
    res.json({ success: true, count: posts.length, posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createForumPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const newPost = {
      _id: 'post_' + Date.now(),
      title,
      content,
      authorName: 'Aarav Sharma',
      authorBranch: 'CSE (5th Sem)',
      authorAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      tags: tags || ['General', 'NITK'],
      likes: 1,
      comments: [],
      createdAt: new Date()
    };

    res.json({ success: true, message: 'Discussion post published successfully!', post: newPost });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const likeForumPost = async (req, res) => {
  try {
    const { id } = req.params;
    res.json({ success: true, message: 'Post liked', likes: 43 });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
