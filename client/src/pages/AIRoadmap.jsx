import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Compass, Sparkles, CheckCircle2, Clock, Calendar, ArrowRight, RefreshCw } from 'lucide-react';
import { generateAIRoadmapAPI } from '../services/api';

export const AIRoadmap = () => {
  const { user } = useAuth();
  const [targetRole, setTargetRole] = useState('Fullstack Web Developer');
  const [skillLevel, setSkillLevel] = useState('Intermediate');
  const [durationWeeks, setDurationWeeks] = useState(8);
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState({
    targetRole: 'Fullstack Web Developer',
    currentSkillLevel: 'Intermediate',
    estimatedTotalHours: 96,
    completionPercentage: 25,
    milestones: [
      { week: 1, title: 'HTML5, CSS3 & Glassmorphic Design Systems', details: 'Master semantic layouts, Flexbox/Grid, CSS custom properties, responsive design & accessibility.' },
      { week: 2, title: 'Modern JavaScript (ES6+) & Async Programming', details: 'Deep dive into Promises, Async/Await, Closures, Event Loop, DOM & Fetch API.' },
      { week: 3, title: 'React.js Core & Component State Management', details: 'JSX, Hooks (useState, useEffect, useMemo), Context API, and Tailwind CSS utility styling.' },
      { week: 4, title: 'Node.js & Express REST API Architecture', details: 'Routing, Middleware design, Async error handling, JWT auth & Password Hashing.' },
      { week: 5, title: 'Database Modeling with MongoDB & Mongoose', details: 'Schema design, Indexing, Aggregation pipelines, and data validation.' },
      { week: 6, title: 'Fullstack Integration & Realtime WebSockets', details: 'Socket.io for live updates, Redux Toolkit state, Axios intercepters & environment variables.' },
      { week: 7, title: 'System Design & NITK Placement Coding Prep', details: 'Caching with Redis, Load balancing concepts, Top 50 LeetCode Medium web questions.' },
      { week: 8, title: 'Deployment & CI/CD Pipeline', details: 'Deploying on Vercel/Render, GitHub Actions, Docker basics & Portfolio production polish.' }
    ]
  });

  const handleGenerateRoadmap = async (e) => {
    e.preventDefault();
    setLoading(true);

    const apiRes = await generateAIRoadmapAPI({
      targetRole,
      currentSkillLevel: skillLevel,
      branch: user.branch,
      durationWeeks: Number(durationWeeks)
    });

    setLoading(false);
    if (apiRes && apiRes.roadmap) {
      setRoadmap(apiRes.roadmap);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Compass className="w-6 h-6 text-cyan-400" /> AI Personal Learning Roadmap
          </h1>
          <p className="text-xs text-slate-400 mt-1">Generates customized week-by-week study milestones tailored to NITK curriculum</p>
        </div>
      </div>

      {/* Input Generator Form */}
      <form onSubmit={handleGenerateRoadmap} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Target Engineering Role</label>
            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="Fullstack Web Developer">Fullstack Web Developer (MERN)</option>
              <option value="Data Structures & Algorithms TITAN">DSA TITAN (Placement Track)</option>
              <option value="AI & Machine Learning Engineer">AI & Machine Learning Engineer</option>
              <option value="DevOps & Distributed Cloud">DevOps & Cloud Engineer</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Current Skill Level</label>
            <select
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="Beginner">Beginner (Starting from scratch)</option>
              <option value="Intermediate">Intermediate (Know basics)</option>
              <option value="Advanced">Advanced (Placement ready)</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Target Duration (Weeks)</label>
            <input
              type="number"
              min="4"
              max="16"
              value={durationWeeks}
              onChange={(e) => setDurationWeeks(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-95 shadow-lg shadow-cyan-500/20 flex items-center gap-2 disabled:opacity-50"
        >
          {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 text-white" />}
          Generate Custom AI Roadmap
        </button>
      </form>

      {/* Visual Roadmap Milestones */}
      {roadmap && (
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-blue-950/40 flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-white">{roadmap.targetRole} Roadmap</h3>
              <p className="text-xs text-slate-400 mt-1">
                Estimated Duration: {roadmap.milestones.length} Weeks • Total Commitment: {roadmap.estimatedTotalHours || 96} Hours
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              {roadmap.currentSkillLevel} Level
            </span>
          </div>

          {/* Timeline Nodes */}
          <div className="relative pl-6 border-l-2 border-slate-800 space-y-6">
            {roadmap.milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0B0F19] ring-2 ring-cyan-500/30"></div>
                <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Week {m.week} Milestone</span>
                    <span className="text-[10px] text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> ~12 Hours</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">{m.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{m.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
