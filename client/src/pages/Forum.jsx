import React, { useState } from 'react';
import { sampleForumPosts } from '../data/mockData';
import { MessageSquareCode, ThumbsUp, MessageSquare, Plus, Tag, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Forum = () => {
  const { awardXPAndCoins } = useAuth();
  const [posts, setPosts] = useState(sampleForumPosts);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('Placement, Amazon, DSA');

  const handleCreatePost = (e) => {
    e.preventDefault();
    const newPost = {
      _id: 'post_' + Date.now(),
      title,
      content,
      authorName: 'Aarav Sharma',
      authorBranch: 'CSE (5th Sem)',
      authorAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      tags: tags.split(',').map(t => t.trim()),
      likes: 1,
      comments: []
    };
    setPosts([newPost, ...posts]);
    setShowCreateModal(false);
    awardXPAndCoins(50, 10, 'Created Campus Forum Thread');
  };

  const handleLike = (id) => {
    setPosts(prev => prev.map(p => p._id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <MessageSquareCode className="w-6 h-6 text-cyan-400" /> NITK Campus Discussion Forum
          </h1>
          <p className="text-xs text-slate-400 mt-1">Ask questions, share interview experiences & collaborate with peers</p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-95 shadow-lg shadow-cyan-500/20 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Start Discussion (+50 XP)
        </button>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post._id} className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={post.authorAvatar} alt={post.authorName} className="w-10 h-10 rounded-xl object-cover ring-2 ring-cyan-500/30" />
                <div>
                  <h4 className="text-xs font-bold text-white">{post.authorName}</h4>
                  <p className="text-[10px] text-cyan-300">{post.authorBranch}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {post.tags.map(t => (
                  <span key={t} className="text-[9px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 font-mono">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold text-white">{post.title}</h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{post.content}</p>
            </div>

            {/* Comments Thread preview */}
            {post.comments && post.comments.length > 0 && (
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Top Senior Reply</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-cyan-300">{post.comments[0].authorName}:</span>
                  <span className="text-xs text-slate-300">{post.comments[0].content}</span>
                </div>
              </div>
            )}

            <div className="flex items-center gap-6 text-xs text-slate-400 pt-2 border-t border-slate-800/60">
              <button onClick={() => handleLike(post._id)} className="flex items-center gap-1.5 hover:text-cyan-400 font-bold">
                <ThumbsUp className="w-4 h-4 text-cyan-400" /> {post.likes} Likes
              </button>
              <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> {post.comments.length} Comments</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 max-w-md w-full space-y-4 bg-[#0B0F19]">
            <h3 className="text-base font-bold text-white">Start New Discussion Thread</h3>
            <form onSubmit={handleCreatePost} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Thread Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Content / Question</label>
                <textarea
                  required
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Tags (comma separated)</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => setShowCreateModal(false)} className="flex-1 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold">Cancel</button>
                <button type="submit" className="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold">Publish Thread</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
