import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { UserCheck, Save, Github, Linkedin, ShieldCheck, Sparkles, Camera } from 'lucide-react';

export const ProfileEditPage = () => {
  const { user, setUser, setNotification } = useAuth();

  const [name, setName] = useState(user?.name || '');
  const [rollNo, setRollNo] = useState(user?.rollNo || '');
  const [branch, setBranch] = useState(user?.branch || 'CSE');
  const [semester, setSemester] = useState(user?.semester || 5);
  const [bio, setBio] = useState(user?.bio || 'Passionate developer & NIT Kurukshetra tech enthusiast.');
  const [avatar, setAvatar] = useState(user?.avatar || 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80');
  const [githubUrl, setGithubUrl] = useState(user?.githubUrl || 'https://github.com');
  const [linkedinUrl, setLinkedinUrl] = useState(user?.linkedinUrl || 'https://linkedin.com');

  const presetAvatars = [
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  ];

  const handleSave = (e) => {
    e.preventDefault();
    setUser(prev => ({
      ...prev,
      name,
      rollNo,
      branch,
      semester: Number(semester),
      bio,
      avatar,
      githubUrl,
      linkedinUrl
    }));

    setNotification({
      type: 'info',
      title: 'Profile Updated',
      message: 'Your NITK profile details have been saved successfully!'
    });
    setTimeout(() => setNotification(null), 3000);
  };

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <UserCheck className="w-6 h-6 text-cyan-400" /> Edit NITK Student Profile Details
          </h1>
          <p className="text-xs text-slate-400 mt-1">Manage your name, avatar, bio, roll number & social handles</p>
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleSave} className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 bg-[#0B0F19]">
        
        {/* Avatar Selection */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-slate-300 block">Select Profile Avatar</label>
          <div className="flex items-center gap-4">
            <img src={avatar} alt="Avatar" className="w-16 h-16 rounded-2xl object-cover ring-4 ring-cyan-500/40" />
            <div className="flex flex-wrap gap-2">
              {presetAvatars.map((url, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setAvatar(url)}
                  className={`w-10 h-10 rounded-xl overflow-hidden border-2 transition ${
                    avatar === url ? 'border-cyan-400 scale-105' : 'border-slate-800 opacity-60'
                  }`}
                >
                  <img src={url} alt="Preset" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <input
            type="url"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            placeholder="Or paste custom image URL..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 mt-1"
          />
        </div>

        {/* Name & Roll No */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">NITK Roll Number</label>
            <input
              type="text"
              required
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white font-mono focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Branch & Semester */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Branch</label>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="AI-DS">AI-DS</option>
              <option value="ME">ME</option>
              <option value="EE">EE</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={s}>Semester {s}</option>)}
            </select>
          </div>
        </div>

        {/* Bio */}
        <div>
          <label className="text-xs font-bold text-slate-300 block mb-1">Bio / Profile Description</label>
          <textarea
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 resize-none"
          />
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">GitHub Link</label>
            <input
              type="url"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">LinkedIn Link</label>
            <input
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-95 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
        >
          <Save className="w-4 h-4" /> Save Profile Details
        </button>
      </form>

    </div>
  );
};
