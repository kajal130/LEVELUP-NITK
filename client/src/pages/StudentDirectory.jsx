import React, { useState } from 'react';
import { sampleUsers } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { Search, Trophy, Flame, Sparkles, GraduationCap, Eye, UserCheck } from 'lucide-react';

export const StudentDirectory = () => {
  const { setViewingStudentProfile } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [branchFilter, setBranchFilter] = useState('All');

  const branches = ['All', 'CSE', 'IT', 'ECE', 'AI-DS', 'ME', 'EE'];

  let filtered = sampleUsers.filter(u => {
    const matchesSearch = u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          u.rollNo.includes(searchTerm) ||
                          u.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = branchFilter === 'All' || u.branch === branchFilter;
    return matchesSearch && matchesBranch;
  });

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Search className="w-6 h-6 text-cyan-400" /> NITK Student Search & Rankings
          </h1>
          <p className="text-xs text-slate-400 mt-1">Search any NIT Kurukshetra classmate or senior to view their exact rank, XP, badges & placement readiness score</p>
        </div>

        {/* Search & Branch Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search name, roll no..."
              className="bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Branch filter */}
          <select
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-bold text-cyan-300 focus:outline-none"
          >
            {branches.map(b => <option key={b} value={b}>{b === 'All' ? 'All Branches' : b}</option>)}
          </select>
        </div>
      </div>

      {/* Student Profile Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((student, idx) => (
          <div key={student._id} className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between hover:border-cyan-500/40 transition">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-cyan-500/40" />
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                      {student.name}
                    </h3>
                    <p className="text-xs text-cyan-300 font-semibold">{student.branch} (Sem {student.semester})</p>
                    <p className="text-[10px] text-slate-400 font-mono">Roll: {student.rollNo}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-extrabold text-amber-400 block">Rank #{student.level > 15 ? 1 : idx + 2}</span>
                  <span className="text-[10px] text-purple-400 font-bold">{student.xp} XP</span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 p-2.5 rounded-2xl bg-slate-950 border border-slate-800 text-center text-xs">
                <div>
                  <span className="text-[9px] text-slate-500 block">Level</span>
                  <span className="font-extrabold text-cyan-300">L{student.level}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 block">Streak</span>
                  <span className="font-extrabold text-amber-400 flex items-center justify-center gap-0.5">
                    <Flame className="w-3 h-3 fill-amber-500" /> {student.streak}d
                  </span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 block">Readiness</span>
                  <span className="font-extrabold text-emerald-400">{student.placementReadinessScore}%</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setViewingStudentProfile({ ...student, rank: student.level > 15 ? 1 : idx + 2 })}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 text-cyan-300 font-bold text-xs hover:bg-cyan-500/30 flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" /> View Full Student Profile & Rank
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};
