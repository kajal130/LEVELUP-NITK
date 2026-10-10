import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Code2, Trophy, Compass, FileCheck2, Users2, FolderGit2, Building2, MessageSquareCode, ShieldAlert, UserCheck, Bot } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Sidebar = () => {
  const { user } = useAuth();

  const navItems = [
    { label: 'Dashboard', path: '/', icon: LayoutDashboard },
    { label: 'My Profile', path: '/profile', icon: UserCheck },
    { label: 'AI Career Guidance', path: '/career-counselor', icon: Bot },
    { label: 'Courses (LMS)', path: '/courses', icon: BookOpen },
    { label: 'Coding Hub', path: '/coding', icon: Code2 },
    { label: 'Leaderboard', path: '/leaderboard', icon: Trophy },
    { label: 'Student Search & Ranks', path: '/students', icon: Users2 },
    { label: 'AI Study Roadmap', path: '/ai-roadmap', icon: Compass },
    { label: 'AI Resume ATS', path: '/ai-resume', icon: FileCheck2 },
    { label: 'Senior Mentorship', path: '/mentorship', icon: Users2 },
    { label: 'Projects Showcase', path: '/projects', icon: FolderGit2 },
    { label: 'Placements Portal', path: '/placements', icon: Building2 },
    { label: 'Campus Forum', path: '/forum', icon: MessageSquareCode }
  ];

  if (user && (user.role === 'admin' || user.role === 'faculty')) {
    navItems.push({ label: 'Admin Analytics', path: '/admin', icon: ShieldAlert });
  }

  return (
    <aside className="w-64 glass-panel border-r border-slate-800/80 bg-[#0B0F19]/80 min-h-[calc(100vh-4rem)] p-4 flex flex-col justify-between hidden md:flex shrink-0">
      <div className="space-y-1">
        <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider px-3 mb-2">Main Menu</p>
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-xs transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/10 text-cyan-300 border border-cyan-500/30 shadow-md shadow-cyan-500/10 font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`
              }
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>

      {/* NITK Campus Banner */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-blue-950/20 to-purple-950/40 border border-cyan-500/20 text-center">
        <div className="text-[11px] font-bold text-cyan-300">NIT Kurukshetra</div>
        <p className="text-[10px] text-slate-400 mt-0.5">Empowering Technical Culture with AI & Gamification</p>
      </div>
    </aside>
  );
};
