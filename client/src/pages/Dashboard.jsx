import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Flame, Trophy, Award, Sparkles, BookOpen, Code2, ArrowRight, Target, CheckCircle2, TrendingUp, Compass, Zap, ShieldCheck, UserCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BadgeDetailModal } from '../components/BadgeDetailModal';

export const Dashboard = () => {
  const { user, awardXPAndCoins, setShowLevelModal } = useAuth();
  const [activeBadgeModal, setActiveBadgeModal] = useState(null);

  const openBadgeModal = (badgeTitle) => {
    const titleLower = badgeTitle.toLowerCase();
    if (titleLower.includes('dsa') || titleLower.includes('titan')) {
      setActiveBadgeModal('dsa_titan');
    } else if (titleLower.includes('streak') || titleLower.includes('master')) {
      setActiveBadgeModal('streak_master');
    } else if (titleLower.includes('web') || titleLower.includes('wizard')) {
      setActiveBadgeModal('web_wizard');
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-8 bg-gradient-to-r from-cyan-950/60 via-slate-900 to-blue-950/70 border border-cyan-500/30">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5" /> NIT Kurukshetra Tech Ecosystem
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Welcome back, <span className="text-gradient">{user.name}</span> 👋
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {user.branch} • Semester {user.semester} • Level {user.level} Developer. You are on a <span className="text-amber-400 font-bold">{user.streak}-day continuous streak</span>! Keep pushing code daily.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/coding"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-95 shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition"
            >
              <Code2 className="w-4 h-4" /> Solve Today's POTD
            </Link>
            <Link
              to="/career-counselor"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-xs hover:opacity-95 shadow-lg shadow-purple-500/25 flex items-center gap-2 transition"
            >
              <HelpCircle className="w-4 h-4 text-white" /> AI Career Guidance
            </Link>
            <Link
              to="/profile"
              className="px-4 py-2.5 rounded-xl glass-card border border-slate-700 text-slate-200 font-semibold text-xs hover:bg-slate-800 flex items-center gap-2 transition"
            >
              <UserCheck className="w-4 h-4 text-cyan-400" /> Edit Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Grid: 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Placement Readiness Card */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800/80">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Placement Readiness</span>
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-emerald-400">{user.placementReadinessScore || 75}%</span>
            <span className="text-[10px] text-slate-400">Target: SDE 1</span>
          </div>
          <div className="mt-3 w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" style={{ width: `${user.placementReadinessScore || 75}%` }}></div>
          </div>
        </div>

        {/* Daily Streak Card - Click to view Streak Master breakdown */}
        <button
          onClick={() => setActiveBadgeModal('streak_master')}
          className="glass-card p-5 rounded-2xl border border-slate-800/80 text-left hover:border-amber-500/50 transition group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 group-hover:text-amber-300">Daily Streak</span>
            <Flame className="w-5 h-5 text-amber-500 animate-bounce" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-amber-400">{user.streak} Days</span>
            <span className="text-[10px] text-amber-500/90 font-bold">+50 XP Daily</span>
          </div>
          <p className="text-[10px] text-cyan-400 mt-3 font-semibold group-hover:underline">Click to view LeetCode-style activity grid →</p>
        </button>

        {/* Coins Economy Card */}
        <div className="glass-card p-5 rounded-2xl border border-slate-800/80">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">NITK LevelUp Coins</span>
            <Trophy className="w-5 h-5 text-yellow-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-yellow-400">{user.coins}</span>
            <span className="text-[10px] text-slate-400">Coins</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-3">Redeemable for mock interviews & title badges.</p>
        </div>

        {/* Level XP Card - Click to open Level Details Modal */}
        <button
          onClick={() => setShowLevelModal(true)}
          className="glass-card p-5 rounded-2xl border border-slate-800/80 text-left hover:border-purple-500/50 transition group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 group-hover:text-purple-300">Current Level</span>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-purple-400">Level {user.level}</span>
            <span className="text-[10px] text-slate-400">{user.xp} Total XP</span>
          </div>
          <div className="mt-3 w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: `${(user.xp % 250) / 2.5}%` }}></div>
          </div>
        </button>

      </div>

      {/* Main Section Grid: Daily Goals & Interactive Badges */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Daily Goals & Active Learning Tracks */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Daily Goals Panel */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-cyan-400" /> Today's Quests & Daily Goals
              </h3>
              <span className="text-xs text-slate-400">Resets in 6h 32m</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h4 className="text-xs font-bold text-white">Solve Daily POTD Problem</h4>
                    <p className="text-[10px] text-slate-400">Complete 1 coding challenge in C++/Java/Python</p>
                  </div>
                </div>
                <button
                  onClick={() => awardXPAndCoins(50, 15, 'Daily POTD Quest')}
                  className="px-3 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-bold hover:bg-cyan-500/30"
                >
                  Claim +50 XP
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-slate-600"></div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Attempt 1 Course Mini Quiz</h4>
                    <p className="text-[10px] text-slate-400">Test your knowledge in Web Dev or DSA</p>
                  </div>
                </div>
                <Link to="/courses" className="px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700">
                  Go to Quiz
                </Link>
              </div>
            </div>
          </div>

          {/* Featured Courses */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" /> Active Learning Tracks
              </h3>
              <Link to="/courses" className="text-xs text-cyan-400 font-semibold hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-2xl border border-slate-800">
                <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=80" alt="MERN" className="w-full h-28 object-cover rounded-xl mb-3" />
                <h4 className="text-xs font-bold text-white">Web Development MERN Stack Mastery</h4>
                <p className="text-[10px] text-slate-400 mt-1">2/8 Modules Completed</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-bold">+600 XP</span>
                  <Link to="/courses" className="text-xs text-cyan-400 font-bold hover:underline">Continue →</Link>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl border border-slate-800">
                <img src="https://images.unsplash.com/photo-1516116211223-4258568880c6?w=500&auto=format&fit=crop&q=80" alt="DSA" className="w-full h-28 object-cover rounded-xl mb-3" />
                <h4 className="text-xs font-bold text-white">DSA TITAN Track - NITK Placement</h4>
                <p className="text-[10px] text-slate-400 mt-1">1/6 Modules Completed</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 font-bold">+800 XP</span>
                  <Link to="/courses" className="text-xs text-cyan-400 font-bold hover:underline">Continue →</Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Col: Interactive Badges & Leaderboard Spotlight */}
        <div className="space-y-6">
          
          {/* Unlocked Badges (Click to view specific journey modal) */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-yellow-400" /> Click Badges to View Journey
            </h3>

            <div className="space-y-3">
              {user.badges && user.badges.map((badge) => (
                <button
                  key={badge.id}
                  onClick={() => openBadgeModal(badge.title)}
                  className="w-full text-left flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition">
                    {badge.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-white group-hover:text-cyan-300">{badge.title}</h4>
                    <p className="text-[10px] text-slate-400">{badge.description}</p>
                  </div>
                  <span className="text-[10px] text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition">View →</span>
                </button>
              ))}
            </div>
          </div>

          {/* Quick Leaderboard Spotlight */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" /> NITK Leaderboard
              </h3>
              <Link to="/leaderboard" className="text-xs text-cyan-400 font-semibold hover:underline">
                Full Board
              </Link>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/80 to-blue-950/60 border border-cyan-500/30 text-center">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">Your Current Rank</span>
              <div className="text-4xl font-extrabold text-white mt-1">#{user.rank || (user.xp === 0 ? 'Unranked' : 2)}</div>
              <p className="text-[11px] text-slate-300 mt-1">{user.branch} (Semester {user.semester})</p>
              <div className="mt-3 pt-3 border-t border-cyan-500/20 text-xs text-slate-400 flex justify-around">
                <span>Rank 1: 4120 XP</span>
                <span className="text-cyan-300 font-bold">You: {user.xp} XP</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Badge Detail Modal popup */}
      {activeBadgeModal && (
        <BadgeDetailModal badgeType={activeBadgeModal} onClose={() => setActiveBadgeModal(null)} />
      )}

    </div>
  );
};
