import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Trophy, Flame, Coins, Sparkles, Filter, Award, Search, UserCheck, Eye } from 'lucide-react';
import { getSingleStudentRank } from '../utils/ranking';

export const Leaderboard = () => {
  const { user, setViewingStudentProfile, allStudents } = useAuth();
  const [selectedBranch, setSelectedBranch] = useState('All');
  const [selectedSemester, setSelectedSemester] = useState('All');

  const branches = ['All', 'CSE', 'IT', 'ECE', 'AI-DS', 'ME', 'EE'];
  const semesters = ['All', '1', '3', '5', '7'];

  // Combine and sort all students by XP descending
  let rankedMasterList = [...allStudents];
  rankedMasterList.sort((a, b) => b.xp - a.xp);
  rankedMasterList = rankedMasterList.map((item, idx) => ({ ...item, rank: idx + 1 }));

  // Apply filters
  let filtered = [...rankedMasterList];
  if (selectedBranch !== 'All') {
    filtered = filtered.filter(item => item.branch === selectedBranch);
  }
  if (selectedSemester !== 'All') {
    filtered = filtered.filter(item => item.semester === Number(selectedSemester));
  }

  const currentUserRank = user ? getSingleStudentRank(user, allStudents) : 1;

  const handleStudentClick = (studentItem) => {
    const studentRank = getSingleStudentRank(studentItem, allStudents);
    setViewingStudentProfile({ ...studentItem, rank: studentRank });
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-400" /> NIT Kurukshetra Campus Leaderboard
          </h1>
          <p className="text-xs text-slate-400 mt-1">Realtime dynamic rankings based on total XP earned</p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Branch Selector */}
          <div className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-xl border border-slate-800">
            <span className="text-[11px] font-bold text-slate-400">Branch:</span>
            <select
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
              className="bg-transparent text-xs font-bold text-cyan-300 focus:outline-none"
            >
              {branches.map(b => <option key={b} value={b} className="bg-slate-900 text-white">{b}</option>)}
            </select>
          </div>

          {/* Semester Selector */}
          <div className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-xl border border-slate-800">
            <span className="text-[11px] font-bold text-slate-400">Sem:</span>
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="bg-transparent text-xs font-bold text-cyan-300 focus:outline-none"
            >
              {semesters.map(s => <option key={s} value={s} className="bg-slate-900 text-white">{s === 'All' ? 'All Semesters' : `Sem ${s}`}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* User Current Dynamic Rank Banner */}
      {user && (
        <div className="glass-panel p-5 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/60 via-slate-900 to-blue-950/60 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 font-extrabold text-xl flex items-center justify-center border border-cyan-500/40 shadow-lg shadow-cyan-500/10">
              #{currentUserRank}
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                {user.name} <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">{user.branch} Sem {user.semester}</span>
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">Your rank dynamically updates as you solve problems and earn XP!</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-xs font-bold">
            <div className="text-amber-400 flex items-center gap-1"><Flame className="w-4 h-4" /> {user.streak} Days</div>
            <div className="text-yellow-400 flex items-center gap-1"><Coins className="w-4 h-4" /> {user.coins} Coins</div>
            <div className="text-purple-400 flex items-center gap-1"><Sparkles className="w-4 h-4" /> {user.xp} XP</div>
          </div>
        </div>
      )}

      {/* Leaderboard Table */}
      <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900/60">
                <th className="p-4 pl-6">Rank</th>
                <th className="p-4">Student (Click to view Profile)</th>
                <th className="p-4">Roll No</th>
                <th className="p-4">Branch & Sem</th>
                <th className="p-4">Streak</th>
                <th className="p-4">Problems Solved</th>
                <th className="p-4 pr-6 text-right">Total XP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {filtered.map((item) => (
                <tr
                  key={item._id}
                  onClick={() => handleStudentClick(item)}
                  className={`hover:bg-slate-800/60 cursor-pointer transition group ${
                    user && item._id === user._id ? 'bg-cyan-500/10 font-bold' : ''
                  }`}
                  title="Click to view student profile card and details"
                >
                  <td className="p-4 pl-6 font-extrabold">
                    {item.rank === 1 ? <span className="text-amber-400 flex items-center gap-1 text-sm">🥇 #1</span> :
                     item.rank === 2 ? <span className="text-slate-300 flex items-center gap-1 text-sm">🥈 #2</span> :
                     item.rank === 3 ? <span className="text-amber-600 flex items-center gap-1 text-sm">🥉 #3</span> :
                     <span className="text-slate-400">#{item.rank}</span>}
                  </td>
                  <td className="p-4 font-bold text-white flex items-center gap-2.5">
                    <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover ring-2 ring-slate-700 group-hover:ring-cyan-400 transition shrink-0" />
                    <span className="group-hover:text-cyan-300 group-hover:underline flex items-center gap-1">
                      {item.name} <Eye className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-cyan-400 transition" />
                    </span>
                  </td>
                  <td className="p-4 text-slate-400 font-mono">{item.rollNo}</td>
                  <td className="p-4 text-slate-300">{item.branch} (Sem {item.semester})</td>
                  <td className="p-4 font-bold text-amber-400 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" /> {item.streak}d
                  </td>
                  <td className="p-4 text-cyan-300 font-semibold">{item.solvedCount || 0} Solved</td>
                  <td className="p-4 pr-6 text-right font-extrabold text-purple-400">
                    {item.xp} XP
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
