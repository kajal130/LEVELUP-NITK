import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { sampleUsers } from '../data/mockData';
import { Lock, Mail, User, ShieldCheck, Sparkles, LogIn, UserPlus, GraduationCap, AlertCircle, CheckCircle2 } from 'lucide-react';

export const AuthPage = () => {
  const { login } = useAuth();
  const [isSignup, setIsSignup] = useState(false);

  // Form Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [branch, setBranch] = useState('CSE');
  const [semester, setSemester] = useState('5');
  const [role, setRole] = useState('student'); // 'student', 'senior', 'faculty'
  const [bio, setBio] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [avatar, setAvatar] = useState('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80');

  const [passwordError, setPasswordError] = useState('');

  // Password Validation Rule Checker
  const validatePassword = (pass) => {
    if (pass.length < 8) return 'Password must be at least 8 characters long.';
    if (!/[A-Z]/.test(pass)) return 'Password must contain at least one uppercase letter (A-Z).';
    if (!/[a-z]/.test(pass)) return 'Password must contain at least one lowercase letter (a-z).';
    if (!/[0-9]/.test(pass)) return 'Password must contain at least one number (0-9).';
    if (!/[@#$%^&*!_]/.test(pass)) return 'Password must contain at least one special symbol (@#$%^&*!_).';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError('');

    if (isSignup) {
      const err = validatePassword(password);
      if (err) {
        setPasswordError(err);
        return;
      }

      // Create New Student Account starting from 0 XP & 0 Coins
      const newUser = {
        _id: 'usr_' + Date.now(),
        name: name || 'NITK Student',
        email: email || `student_${Date.now()}@nitk.ac.in`,
        password,
        rollNo: rollNo || '221100' + Math.floor(10 + Math.random() * 89),
        branch,
        semester: Number(semester),
        year: Math.ceil(Number(semester) / 2),
        role, // FIXED ROLE
        xp: 0, // Starts at 0 XP
        coins: 0, // Starts at 0 Coins
        level: 1, // Starts at Level 1
        streak: 0, // Starts at 0 streak
        rank: 8, // Unranked / Rank #8
        solvedCount: 0,
        avatar: avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        badges: [{ id: 'b_new', title: 'NITK Freshman', description: 'Joined LevelUp NITK Platform', icon: '🚀' }],
        placementReadinessScore: 50,
        bio: bio || 'New student at NIT Kurukshetra.',
        githubUrl: githubUrl || 'https://github.com'
      };

      login(newUser);
    } else {
      const matched = sampleUsers.find(u => u.email.toLowerCase() === email.toLowerCase()) || sampleUsers[0];
      login(matched);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Welcome Branding Card */}
        <div className="space-y-4 text-left">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-0.5 shadow-xl shadow-cyan-500/20">
            <div className="w-full h-full bg-[#0B0F19] rounded-[14px] flex items-center justify-center">
              <span className="font-extrabold text-xl text-gradient">LV</span>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-white leading-tight">
            LevelUp <span className="text-cyan-400">NITK</span> Portal
          </h1>
          <p className="text-xs text-slate-300 leading-relaxed">
            Centralized AI-Powered Gamified Learning & Placement Ecosystem for NIT Kurukshetra.
          </p>

          {/* Quick Demo Switcher Prompt */}
          <div className="p-4 rounded-2xl glass-panel border border-cyan-500/30 space-y-2">
            <span className="text-[10px] uppercase font-bold text-cyan-400">⚡ Single-Laptop Account Switcher</span>
            <p className="text-xs text-slate-300">Click any student/senior below to switch accounts instantly:</p>
            <div className="grid grid-cols-2 gap-2 pt-1">
              {sampleUsers.map((u) => (
                <button
                  key={u._id}
                  onClick={() => login(u)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-left transition flex items-center gap-2 group"
                >
                  <img src={u.avatar} alt={u.name} className="w-6 h-6 rounded-full object-cover shrink-0" />
                  <div className="truncate">
                    <p className="text-xs font-bold text-white group-hover:text-cyan-300 truncate">{u.name}</p>
                    <p className="text-[9px] text-slate-400 truncate">{u.branch} ({u.role.toUpperCase()})</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-5 bg-[#0B0F19]">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-lg font-extrabold text-white">
              {isSignup ? 'Create NITK Account' : 'Student & Faculty Login'}
            </h2>
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-xs text-cyan-400 font-bold hover:underline"
            >
              {isSignup ? 'Already have account? Login' : 'New student? Register'}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Account Role (Fixed)</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-cyan-300 font-bold focus:outline-none"
                    >
                      <option value="student">Student</option>
                      <option value="senior">Senior (4th Year)</option>
                      <option value="faculty">Faculty</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Roll Number</label>
                    <input
                      type="text"
                      required
                      value={rollNo}
                      onChange={(e) => setRollNo(e.target.value)}
                      placeholder="e.g. 22110045"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white font-mono focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Branch</label>
                    <select
                      value={branch}
                      onChange={(e) => setBranch(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    >
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="ECE">ECE</option>
                      <option value="AI-DS">AI-DS</option>
                      <option value="ME">ME</option>
                      <option value="EE">EE</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Semester</label>
                    <select
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(s => <option key={s} value={s}>Semester {s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Short Bio</label>
                  <input
                    type="text"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="e.g. Passionate web developer & NITK student"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                  />
                </div>
              </>
            )}

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">College Email ID</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name_rollno@nitk.ac.in"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
              {isSignup && (
                <p className="text-[10px] text-slate-400 mt-1">
                  Must include 8+ chars, Uppercase, Lowercase, Number & Special Symbol (@#$%^&*!)
                </p>
              )}
            </div>

            {passwordError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{passwordError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-95 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              {isSignup ? <UserPlus className="w-4 h-4" /> : <LogIn className="w-4 h-4" />}
              {isSignup ? 'Register New Student (0 XP)' : 'Login to LevelUp NITK'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
