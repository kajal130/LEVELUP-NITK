import React, { useState } from 'react';
import { sampleUsers } from '../data/mockData';
import { Users, GraduationCap, Calendar, MessageSquare, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Mentorship = () => {
  const { user } = useAuth();
  const seniors = sampleUsers.filter(u => u.role === 'senior' || u.semester >= 7);
  const [selectedSenior, setSelectedSenior] = useState(null);
  const [requestTopic, setRequestTopic] = useState('Amazon SDE Interview Prep & Resume Guidance');
  const [requestMsg, setRequestMsg] = useState('Hi senior! I am preparing for Amazon SDE 1 campus visit and would love 20 mins guidance on DSA and system design.');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedSenior(null);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Users className="w-6 h-6 text-cyan-400" /> NITK Senior Mentorship Hub
          </h1>
          <p className="text-xs text-slate-400 mt-1">Connect with placed seniors & 4th-year students for 1-on-1 career guidance</p>
        </div>
      </div>

      {/* Senior Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seniors.map((senior) => (
          <div key={senior._id} className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src={senior.avatar} alt={senior.name} className="w-12 h-12 rounded-2xl object-cover ring-2 ring-cyan-500/40" />
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {senior.name} <GraduationCap className="w-4 h-4 text-cyan-400" />
                  </h3>
                  <p className="text-xs text-cyan-300 font-semibold">{senior.branch} (Semester {senior.semester})</p>
                  <p className="text-[10px] text-emerald-400 font-bold mt-0.5">Placed at Microsoft (SDE)</p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5">
                {senior.badges.map((b) => (
                  <span key={b.id} className="text-[10px] px-2 py-0.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                    {b.icon} {b.title}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedSenior(senior)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-95 shadow-md"
            >
              Request 1-on-1 Guidance Session
            </button>
          </div>
        ))}
      </div>

      {/* Request Modal */}
      {selectedSenior && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 max-w-md w-full space-y-4 bg-[#0B0F19]">
            <h3 className="text-base font-bold text-white">Request Mentorship with {selectedSenior.name}</h3>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="text-sm font-bold text-white">Request Sent Successfully!</h4>
                <p className="text-xs text-slate-300">{selectedSenior.name} will receive a notification and confirm a schedule.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitRequest} className="space-y-3">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Mentorship Topic</label>
                  <input
                    type="text"
                    value={requestTopic}
                    onChange={(e) => setRequestTopic(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Message to Senior</label>
                  <textarea
                    rows={3}
                    value={requestMsg}
                    onChange={(e) => setRequestMsg(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSenior(null)}
                    className="flex-1 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
