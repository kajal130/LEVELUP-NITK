import React from 'react';
import { sampleCompanies } from '../data/mockData';
import { Building2, CheckCircle2, FileText, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

export const Placements = () => {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Building2 className="w-6 h-6 text-cyan-400" /> NITK Placement Cell & Recruitment Portal
          </h1>
          <p className="text-xs text-slate-400 mt-1">Company criteria, CTC package details & previous year campus interview experiences</p>
        </div>
      </div>

      {/* Company Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleCompanies.map((comp, idx) => (
          <div key={idx} className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={comp.logo} alt={comp.name} className="w-10 h-10 rounded-xl object-cover ring-2 ring-cyan-500/30" />
                  <div>
                    <h3 className="text-base font-extrabold text-white">{comp.name}</h3>
                    <p className="text-xs text-cyan-300 font-semibold">{comp.role}</p>
                  </div>
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {comp.package}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800/80 text-xs text-slate-300 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Eligibility Criteria</span>
                <p className="font-semibold">{comp.eligibility}</p>
              </div>

              {/* Rounds */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Selection Process Rounds</span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {comp.rounds.map((r, ridx) => (
                    <li key={ridx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" /> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Top Questions Asked</span>
              <div className="flex flex-wrap gap-1">
                {comp.topQuestions.map(q => (
                  <span key={q} className="text-[9px] px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800">
                    {q}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
