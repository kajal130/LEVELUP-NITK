import React from 'react';
import { X, Award, Flame, Code2, Sparkles, CheckCircle2, Calendar, Layout, Terminal } from 'lucide-react';

export const BadgeDetailModal = ({ badgeType, onClose }) => {
  if (!badgeType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/40 max-w-2xl w-full space-y-6 bg-[#0B0F19] max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-2xl flex items-center justify-center border border-amber-500/40">
              {badgeType === 'dsa_titan' ? '⚡' : badgeType === 'streak_master' ? '🔥' : '🌐'}
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">
                {badgeType === 'dsa_titan' && 'DSA Titan Badge - DSA Journey Breakdown'}
                {badgeType === 'streak_master' && 'Streak Master Badge - Daily Activity & Previous Streaks'}
                {badgeType === 'web_wizard' && 'Web Wizard Badge - Fullstack Web Dev Mastery'}
              </h2>
              <p className="text-xs text-slate-400">Detailed achievement progress & statistics</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1. DSA TITAN BADGE DETAILS */}
        {badgeType === 'dsa_titan' && (
          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-cyan-400">DSA Journey Progress</span>
                <h3 className="text-xl font-extrabold text-white">98 / 250 Problems Solved</h3>
                <p className="text-xs text-slate-400 mt-0.5">Top 8% among NIT Kurukshetra coders</p>
              </div>
              <div className="text-right font-bold text-cyan-300 text-sm">
                39.2% Completed
              </div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-emerald-500/30 text-center">
                <span className="text-xs font-bold text-emerald-400">Easy</span>
                <div className="text-xl font-extrabold text-white mt-1">45 / 80</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: '56%' }}></div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-amber-500/30 text-center">
                <span className="text-xs font-bold text-amber-400">Medium</span>
                <div className="text-xl font-extrabold text-white mt-1">38 / 120</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-amber-500" style={{ width: '31%' }}></div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 border border-rose-500/30 text-center">
                <span className="text-xs font-bold text-rose-400">Hard</span>
                <div className="text-xl font-extrabold text-white mt-1">15 / 50</div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="h-full bg-rose-500" style={{ width: '30%' }}></div>
                </div>
              </div>
            </div>

            {/* Topic Wise Solved */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Topic-wise Solved Breakdown</h4>
              {[
                { topic: 'Arrays & Hashing', solved: 22, total: 30, pct: 73 },
                { topic: 'Two Pointers & Sliding Window', solved: 18, total: 25, pct: 72 },
                { topic: 'Binary Search & Trees', solved: 24, total: 40, pct: 60 },
                { topic: 'Graphs & BFS/DFS', solved: 16, total: 35, pct: 45 },
                { topic: 'Dynamic Programming (DP)', solved: 18, total: 40, pct: 45 }
              ].map((t, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-300">{t.topic}</span>
                    <span className="text-cyan-400">{t.solved}/{t.total} ({t.pct}%)</span>
                  </div>
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${t.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. STREAK MASTER BADGE DETAILS */}
        {badgeType === 'streak_master' && (
          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/60 to-slate-900 border border-amber-500/30 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Flame className="w-10 h-10 text-amber-500 fill-amber-500 animate-bounce" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-400">Current Streak</span>
                  <h3 className="text-2xl font-extrabold text-white">14 Continuous Days</h3>
                  <p className="text-xs text-slate-300 mt-0.5">Maximum Previous Streak Record: <span className="text-amber-400 font-bold">28 Days</span></p>
                </div>
              </div>
            </div>

            {/* LeetCode Style Daily Streak Activity Grid (30 Days) */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-amber-400" /> LeetCode Style Daily Activity Grid
                </h4>
                <span className="text-[10px] text-slate-400">Active Green Dots = Problems/Quizzes Solved</span>
              </div>

              {/* 30 Day Grid */}
              <div className="grid grid-cols-10 gap-2 pt-2">
                {Array.from({ length: 30 }).map((_, i) => {
                  const isActive = i >= 16; // last 14 days active
                  return (
                    <div key={i} className="text-center space-y-1">
                      <div className={`w-full aspect-square rounded-lg border transition ${
                        isActive
                          ? 'bg-emerald-500 border-emerald-400 shadow-md shadow-emerald-500/20'
                          : 'bg-slate-950 border-slate-800 opacity-40'
                      }`}></div>
                      <span className="text-[9px] text-slate-500">Day {i + 1}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 3. WEB WIZARD BADGE DETAILS */}
        {badgeType === 'web_wizard' && (
          <div className="space-y-5">
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-500/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-400">Web Dev Mastery</span>
                <h3 className="text-xl font-extrabold text-white">MERN Fullstack Certified</h3>
                <p className="text-xs text-slate-300 mt-0.5">Completed 8/8 Course Modules & 2 Deployed Projects</p>
              </div>
              <span className="text-2xl">🌐</span>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Completed Technical Modules</h4>
              {[
                { name: 'HTML5 & CSS3 Glassmorphism Systems', status: 'Completed', xp: '+100 XP' },
                { name: 'Modern ES6+ JavaScript & Async Promises', status: 'Completed', xp: '+100 XP' },
                { name: 'React.js Hooks, State & Context API', status: 'Completed', xp: '+150 XP' },
                { name: 'Node.js & Express REST API Server', status: 'Completed', xp: '+150 XP' },
                { name: 'MongoDB Schema Design & Mongoose', status: 'Completed', xp: '+100 XP' }
              ].map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {m.name}
                  </span>
                  <span className="font-mono text-purple-400 font-bold">{m.xp}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
