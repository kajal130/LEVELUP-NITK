import React from 'react';
import { useAuth } from '../context/AuthContext';
import { X, Sparkles, Trophy, Award, Zap, CheckCircle2, HelpCircle } from 'lucide-react';

export const LevelDetailsModal = () => {
  const { user, showLevelModal, setShowLevelModal } = useAuth();

  if (!showLevelModal || !user) return null;

  const xpForNextLevel = user.level * 250;
  const currentLevelProgress = user.xp % 250;
  const progressPct = Math.min(100, Math.round((currentLevelProgress / 250) * 100));

  const levelTiers = [
    { level: 'L1 - L4', title: 'Novice NITKian', xpRange: '0 - 999 XP', perks: 'Unlocks LMS Courses & Daily POTD Challenges' },
    { level: 'L5 - L9', title: 'Code Apprentice', xpRange: '1,000 - 2,249 XP', perks: 'Unlocks Campus Discussion Forum & Project Submissions' },
    { level: 'L10 - L14', title: 'Algorithm Specialist', xpRange: '2,250 - 3,499 XP', perks: 'Unlocks AI Study Roadmap & Resume ATS Scanner' },
    { level: 'L15 - L19', title: 'Fullstack Pro', xpRange: '3,500 - 4,749 XP', perks: 'Unlocks Senior Mentorship Sessions & Placement Prep Kits' },
    { level: 'L20+', title: 'NITK Grandmaster Legend', xpRange: '5,000+ XP', perks: 'Featured on Institute Wall of Fame & Campus Placement Priority' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/40 max-w-2xl w-full space-y-6 bg-[#0B0F19] max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-[#0B0F19] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-white">Level System & XP Progression Guide</h2>
              <p className="text-xs text-slate-400">Detailed breakdown of how levels and titles are defined at NIT Kurukshetra</p>
            </div>
          </div>
          <button
            onClick={() => setShowLevelModal(false)}
            className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current User Status Ring Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-purple-950/60 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border-2 border-cyan-400 text-cyan-300 font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
              L{user.level}
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-cyan-400">Current Status</span>
              <h3 className="text-base font-extrabold text-white">Level {user.level} Developer</h3>
              <p className="text-xs text-slate-300 mt-0.5">{user.xp} Total XP • {250 - currentLevelProgress} XP needed for Level {user.level + 1}</p>
            </div>
          </div>

          <div className="w-full sm:w-48 space-y-1.5">
            <div className="flex justify-between text-[11px] font-semibold text-slate-300">
              <span>Progress to L{user.level + 1}</span>
              <span className="text-cyan-400">{progressPct}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }}></div>
            </div>
          </div>
        </div>

        {/* How Levels Are Defined Table */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-400" /> Level Tiers & Titles Matrix
          </h3>

          <div className="space-y-2">
            {levelTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl border text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                  user.level >= parseInt(tier.level.replace(/\D/g, ''))
                    ? 'bg-slate-900/90 border-cyan-500/30'
                    : 'bg-slate-950/40 border-slate-800 text-slate-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-extrabold text-cyan-300 min-w-[65px]">{tier.level}</span>
                  <div>
                    <h4 className="font-bold text-white">{tier.title}</h4>
                    <p className="text-[10px] text-slate-400">{tier.perks}</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-purple-400 font-bold self-start sm:self-center">{tier.xpRange}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How to Earn XP Section */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
          <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-yellow-400" /> How to Earn XP & Level Up Fast
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-300">Daily Login Streak</span>
              <span className="font-bold text-amber-400">+50 XP / day</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-300">Solve Daily Coding POTD</span>
              <span className="font-bold text-cyan-400">+50 XP</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-300">Complete LMS Topic Quiz</span>
              <span className="font-bold text-purple-400">+100 XP</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-slate-300">Showcase Campus Project</span>
              <span className="font-bold text-emerald-400">+150 XP</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
