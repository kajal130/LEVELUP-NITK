import React, { useState } from 'react';
import { FolderGit2, ThumbsUp, MessageSquare, ExternalLink, Plus, Github, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Projects = () => {
  const { awardXPAndCoins } = useAuth();
  const [projects, setProjects] = useState([
    {
      id: 'p1',
      title: 'LevelUp NITK - Gamified Learning & Coding Platform',
      description: 'An AI-powered web platform combining LMS, competitive coding runner, ATS resume checker, and senior mentorship for NIT Kurukshetra.',
      author: 'Aarav Sharma (CSE 5th Sem)',
      githubUrl: 'https://github.com/nitk/levelup-nitk',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Socket.io'],
      likes: 54,
      commentsCount: 12
    },
    {
      id: 'p2',
      title: 'NITK Smart Campus IoT Traffic Monitor',
      description: 'Computer vision & IoT sensor system tracking parking lot availability and main gate vehicle traffic real-time.',
      author: 'Ananya Verma (IT 7th Sem)',
      githubUrl: 'https://github.com/nitk/smart-campus',
      techStack: ['Python', 'OpenCV', 'Raspberry Pi', 'FastAPI', 'React'],
      likes: 38,
      commentsCount: 7
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [techStack, setTechStack] = useState('React, Node.js, MongoDB');

  const handleAddProject = (e) => {
    e.preventDefault();
    const newP = {
      id: 'p_' + Date.now(),
      title,
      description,
      author: 'Aarav Sharma (CSE 5th Sem)',
      githubUrl: githubUrl || 'https://github.com',
      techStack: techStack.split(',').map(s => s.trim()),
      likes: 1,
      commentsCount: 0
    };
    setProjects([newP, ...projects]);
    setShowAddModal(false);
    awardXPAndCoins(150, 50, 'Showcased Project on Campus Portal');
  };

  const handleLike = (id) => {
    setProjects(prev => prev.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <FolderGit2 className="w-6 h-6 text-cyan-400" /> NITK Student Projects Showcase
          </h1>
          <p className="text-xs text-slate-400 mt-1">Showcase your technical projects, get GitHub stars & peer ratings</p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-95 shadow-lg shadow-cyan-500/20 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" /> Upload New Project (+150 XP)
        </button>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white leading-tight">{p.title}</h3>
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800">
                  <Github className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
              <p className="text-[10px] text-cyan-400 font-semibold">By: {p.author}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.techStack.map(t => (
                  <span key={t} className="text-[10px] px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-cyan-300 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-800 pt-3 text-xs text-slate-400">
              <button onClick={() => handleLike(p.id)} className="flex items-center gap-1.5 hover:text-cyan-400 font-bold">
                <ThumbsUp className="w-4 h-4 text-cyan-400" /> {p.likes} Upvotes
              </button>
              <span className="flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> {p.commentsCount} Comments</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 max-w-md w-full space-y-4 bg-[#0B0F19]">
            <h3 className="text-base font-bold text-white">Upload New Project</h3>
            <form onSubmit={handleAddProject} className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Project Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Description</label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">GitHub Repository URL</label>
                <input
                  type="url"
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  placeholder="https://github.com/username/repo"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Tech Stack (comma separated)</label>
                <input
                  type="text"
                  value={techStack}
                  onChange={(e) => setTechStack(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                />
              </div>
              <div className="flex gap-2 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold">Cancel</button>
                <button type="submit" className="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold">Publish Project</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
