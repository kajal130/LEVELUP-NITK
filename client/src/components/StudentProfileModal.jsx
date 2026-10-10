import React from 'react';
import { useAuth } from '../context/AuthContext';
import { X, Trophy, Flame, Coins, Sparkles, ShieldCheck, GraduationCap, Github, Linkedin, Award, CheckCircle2 } from 'lucide-react';

export const StudentProfileModal = () => {
  const { viewingStudentProfile, setViewingStudentProfile } = useAuth();

  if (!viewingStudentProfile) return null;

  const student = viewingStudentProfile;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/40 max-w-xl w-full space-y-6 bg-[#0B0F19] max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
            <GraduationCap className="w-4 h-4" /> NIT Kurukshetra Student Profile Card
          </div>
          <button
            onClick={() => setViewingStudentProfile(null)}
            className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Student Avatar & Rank Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="relative">
            <img src={student.avatar} alt={student.name} className="w-20 h-20 rounded-2xl object-cover ring-4 ring-cyan-500/40 shadow-xl" />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-extrabold text-xs px-2 py-0.5 rounded-full shadow-lg">
              Rank #{student.rank || student.level || 2}
            </div>
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-2">
              {student.name}
            </h2>
            <p className="text-xs text-cyan-300 font-semibold">
              {student.branch} • Semester {student.semester} (Roll: {student.rollNo})
            </p>
            <p className="text-[11px] text-slate-400 capitalize">{student.role} • Level {student.level} Developer</p>
          </div>
        </div>

        {/* 4 Stat Metrics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="glass-card p-3 rounded-2xl border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block font-semibold">NITK Rank</span>
            <span className="text-base font-extrabold text-amber-400">#{student.rank || student.level || 2}</span>
          </div>
          <div className="glass-card p-3 rounded-2xl border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block font-semibold">Streak</span>
            <span className="text-base font-extrabold text-amber-500 flex items-center justify-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-amber-500" /> {student.streak}d
            </span>
          </div>
          <div className="glass-card p-3 rounded-2xl border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block font-semibold">Level XP</span>
            <span className="text-base font-extrabold text-purple-400">{student.xp}</span>
          </div>
          <div className="glass-card p-3 rounded-2xl border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block font-semibold">Readiness</span>
            <span className="text-base font-extrabold text-emerald-400">{student.placementReadinessScore || 85}%</span>
          </div>
        </div>

        {/* Unlocked Badges */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-yellow-400" /> Unlocked Badges & Achievements
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {student.badges && student.badges.map((b) => (
              <div key={b.id} className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
                <span className="text-xl">{b.icon}</span>
                <div>
                  <h4 className="text-xs font-bold text-white">{b.title}</h4>
                  <p className="text-[10px] text-slate-400">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
