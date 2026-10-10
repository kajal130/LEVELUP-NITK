import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Flame, Coins, Award, Sparkles, ChevronDown, UserCheck, ShieldCheck, LogOut, Search, Bot, Lock } from 'lucide-react';
import { getSingleStudentRank } from '../utils/ranking';

export const Navbar = ({ onToggleAIChat }) => {
  const { user, logout, setShowLevelModal, allStudents } = useAuth();
  const location = useLocation();
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);

  // Dynamic rank calculation
  const currentRank = user ? getSingleStudentRank(user, allStudents) : 1;

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-[#0B0F19]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Institute Name */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-lg text-gradient">LV</span>
              </div>
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                LevelUp <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-semibold">NITK</span>
              </span>
              <p className="text-[10px] text-slate-400 -mt-0.5 tracking-wider font-medium uppercase">NIT Kurukshetra</p>
            </div>
          </Link>
        </div>

        {/* Gamification Stats Banner */}
        {user && (
          <div className="hidden lg:flex items-center space-x-4 bg-slate-900/80 border border-slate-800 rounded-full px-4 py-1.5">
            {/* Clickable Level Progress Trigger */}
            <button
              onClick={() => setShowLevelModal(true)}
              className="flex items-center gap-2 pr-3 border-r border-slate-800 hover:opacity-80 transition group"
              title="Click to view Level System Breakdown & Perks"
            >
              <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400 group-hover:scale-105 transition">
                L{user.level}
              </div>
              <div className="text-left">
                <div className="text-[11px] font-semibold text-cyan-300 group-hover:underline flex items-center gap-1">
                  Level {user.level} <Sparkles className="w-3 h-3 text-cyan-400" />
                </div>
                <div className="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" style={{ width: `${(user.xp % 250) / 2.5}%` }}></div>
                </div>
              </div>
            </button>

            {/* Dynamic Rank Badge */}
            <div className="flex items-center gap-1.5 text-cyan-400 px-2 font-bold text-xs">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Rank #{currentRank}</span>
            </div>

            {/* Daily Streak */}
            <div className="flex items-center gap-1.5 text-amber-400 px-2 font-bold text-xs border-l border-slate-800">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-bounce" />
              <span>{user.streak} Day Streak</span>
            </div>

            {/* Coins */}
            <div className="flex items-center gap-1.5 text-yellow-400 px-2 font-bold text-xs">
              <Coins className="w-4 h-4 text-yellow-400" />
              <span>{user.coins} Coins</span>
            </div>

            {/* XP Total */}
            <div className="flex items-center gap-1.5 text-purple-400 pl-2 font-bold text-xs border-l border-slate-800">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>{user.xp} XP</span>
            </div>
          </div>
        )}

        {/* Right Section: Student Search, AI Assistant & Fixed Profile Menu */}
        <div className="flex items-center space-x-3">
          
          {user && (
            <>
              {/* Search Students Link */}
              <Link
                to="/students"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-card border border-slate-800 text-slate-300 font-semibold text-xs hover:text-cyan-300 transition"
              >
                <Search className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">Search Students</span>
              </Link>

              {/* AI Assistant Button */}
              <button 
                onClick={onToggleAIChat}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 text-cyan-300 font-semibold text-xs hover:from-cyan-500/30 hover:to-blue-600/30 transition shadow-md shadow-cyan-500/10"
              >
                <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="hidden sm:inline">AI Assistant</span>
              </button>

              {/* User Profile & Account Menu */}
              <div className="relative">
                <button
                  onClick={() => setShowRoleDropdown(!showRoleDropdown)}
                  className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-slate-800/60 border border-slate-800 transition"
                >
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-lg object-cover ring-2 ring-cyan-500/40" />
                  <div className="hidden md:block text-left pr-1">
                    <p className="text-xs font-semibold text-white leading-tight">{user.name}</p>
                    {/* Fixed Role Display - NO ROLE SWITCHING ALLOWED */}
                    <p className="text-[10px] text-cyan-400 font-medium uppercase flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-cyan-400" /> {user.role} ({user.branch})
                    </p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 hidden md:block" />
                </button>

                {showRoleDropdown && (
                  <div className="absolute right-0 mt-2 w-60 rounded-xl glass-panel bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-800">
                      <p className="text-xs font-semibold text-white">{user.name}</p>
                      <p className="text-[11px] text-slate-400">{user.email}</p>
                      <p className="text-[10px] text-cyan-400 mt-1">Roll No: {user.rollNo}</p>
                    </div>

                    {/* Fixed Account Role Banner */}
                    <div className="px-4 py-2 border-b border-slate-800 bg-slate-950/60">
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-slate-400 flex items-center gap-1">
                          <Lock className="w-3 h-3 text-slate-400" /> Account Role:
                        </span>
                        <span className="text-cyan-300 uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/30">
                          {user.role}
                        </span>
                      </div>
                      <p className="text-[9px] text-slate-500 mt-1">Role is locked for this ID</p>
                    </div>

                    <div className="px-2 py-1">
                      <Link
                        to="/profile"
                        onClick={() => setShowRoleDropdown(false)}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-200 hover:bg-slate-800 flex items-center justify-between"
                      >
                        <span>Edit Profile Details</span>
                        <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                      </Link>

                      <button
                        onClick={() => { setShowLevelModal(true); setShowRoleDropdown(false); }}
                        className="w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold text-cyan-300 hover:bg-slate-800 flex items-center justify-between"
                      >
                        <span>View Level System Specs</span>
                        <Sparkles className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* LOGOUT BUTTON */}
                    <div className="px-2 pt-2 border-t border-slate-800">
                      <button
                        onClick={() => { logout(); setShowRoleDropdown(false); }}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-rose-400 hover:bg-rose-500/10 flex items-center gap-2 transition"
                      >
                        <LogOut className="w-4 h-4" /> Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

        </div>

      </div>
    </header>
  );
};
