import React from 'react';
import { ShieldAlert, Users, BookOpen, Code2, Trophy, BarChart3, PieChart, Activity } from 'lucide-react';
import { sampleUsers, sampleCourses, sampleProblems } from '../data/mockData';

export const AdminPanel = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-cyan-400" /> Faculty & Admin Control Center
          </h1>
          <p className="text-xs text-slate-400 mt-1">Platform metrics, user management, course editing & AI moderation analytics</p>
        </div>
      </div>

      {/* Analytics Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400">Total Enrolled NITK Students</span>
          <div className="text-3xl font-extrabold text-white mt-2">1,420</div>
          <p className="text-[10px] text-emerald-400 font-bold mt-2">↑ 14% growth this semester</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400">Active Courses</span>
          <div className="text-3xl font-extrabold text-cyan-400 mt-2">{sampleCourses.length} Tracks</div>
          <p className="text-[10px] text-slate-400 mt-2">24 Total Modules</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400">Coding Problem Bank</span>
          <div className="text-3xl font-extrabold text-purple-400 mt-2">{sampleProblems.length} Problems</div>
          <p className="text-[10px] text-slate-400 mt-2">Company Tagged Questions</p>
        </div>

        <div className="glass-card p-5 rounded-2xl border border-slate-800">
          <span className="text-xs font-semibold text-slate-400">Avg Placement Readiness</span>
          <div className="text-3xl font-extrabold text-emerald-400 mt-2">78.6%</div>
          <p className="text-[10px] text-slate-400 mt-2">Campus Average Index</p>
        </div>
      </div>

      {/* Branch Distribution & Student Roster */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Branch Analytics */}
        <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <PieChart className="w-4 h-4 text-cyan-400" /> Branch Enrolment Breakdown
          </h3>

          <div className="space-y-3">
            {[
              { branch: 'CSE (Computer Science)', count: 480, pct: 34 },
              { branch: 'ECE (Electronics)', count: 310, pct: 22 },
              { branch: 'IT (Information Tech)', count: 260, pct: 18 },
              { branch: 'ME (Mechanical)', count: 190, pct: 13 },
              { branch: 'EE (Electrical)', count: 180, pct: 13 }
            ].map((b, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                  <span>{b.branch}</span>
                  <span className="text-cyan-400 font-bold">{b.count} ({b.pct}%)</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" style={{ width: `${b.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Roster Table */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-400" /> Student Profile Management
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900">
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Roll No</th>
                  <th className="p-3">Branch</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Level & XP</th>
                  <th className="p-3 text-right">Readiness</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {sampleUsers.map((u) => (
                  <tr key={u._id} className="hover:bg-slate-800/40">
                    <td className="p-3 font-bold text-white flex items-center gap-2">
                      <img src={u.avatar} alt={u.name} className="w-6 h-6 rounded-full object-cover" />
                      <span>{u.name}</span>
                    </td>
                    <td className="p-3 text-slate-400 font-mono">{u.rollNo}</td>
                    <td className="p-3 text-slate-300">{u.branch} (Sem {u.semester})</td>
                    <td className="p-3 capitalize font-semibold text-cyan-300">{u.role}</td>
                    <td className="p-3 font-mono text-purple-400">L{u.level} ({u.xp} XP)</td>
                    <td className="p-3 text-right font-bold text-emerald-400">{u.placementReadinessScore}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
};
