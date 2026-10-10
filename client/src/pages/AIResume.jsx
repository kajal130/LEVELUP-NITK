import React, { useState } from 'react';
import { FileCheck2, Sparkles, CheckCircle2, AlertTriangle, RefreshCw, Award, ArrowUpRight } from 'lucide-react';
import { analyzeResumeATSAPI } from '../services/api';

export const AIResume = () => {
  const [resumeText, setResumeText] = useState(`AARAV SHARMA
Roll No: 22110045 | NIT Kurukshetra | B.Tech CSE (Semester 5)
GitHub: github.com/aarav | Email: aarav_22110045@nitk.ac.in

SKILLS:
Languages: C++, JavaScript, Python, SQL
Frontend: React.js, HTML5, CSS3, Tailwind CSS, Redux Toolkit
Backend: Node.js, Express.js, REST APIs, JWT, WebSockets
Databases: MongoDB, Mongoose, MySQL

PROJECTS:
1. LevelUp NITK - AI-Powered Gamified Learning Platform
- Built fullstack React-Node application with real-time leaderboards and code execution engine.
- Implemented JWT authentication and Socket.io for live peer messaging.

2. Placement Tracker - Campus Recruitment System
- Developed REST APIs handling 500+ student applications with MongoDB schema validation.`);

  const [jobDescription, setJobDescription] = useState('Amazon SDE 1 - Strong background in C++, React.js, Node.js, REST API, Microservices, and System Design.');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState({
    atsScore: 88,
    matchedKeywords: ['REACT.JS', 'NODE.JS', 'C++', 'REST API', 'JAVASCRIPT', 'MONGODB', 'JWT'],
    missingKeywords: ['MICROSERVICES', 'SYSTEM DESIGN', 'DOCKER', 'AWS'],
    strengths: [
      'Strong technical skills section with relevant framework mentions.',
      'Clear project highlights with measurable bullet points.',
      'Includes education details corresponding to NIT Kurukshetra standard.'
    ],
    improvements: [
      'Add missing target keywords: MICROSERVICES, SYSTEM DESIGN, DOCKER.',
      'Quantify your impact in project section (e.g. "improved latency by 35%", "used by 200+ students").',
      'Ensure standard clean single-column PDF layout for optimal ATS parser parsing.'
    ]
  });

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setLoading(true);

    const apiRes = await analyzeResumeATSAPI({ resumeText, jobDescription });
    setLoading(false);

    if (apiRes && apiRes.analysis) {
      setAnalysis(apiRes.analysis);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <FileCheck2 className="w-6 h-6 text-cyan-400" /> AI Resume ATS Checker & Reviewer
          </h1>
          <p className="text-xs text-slate-400 mt-1">Parses resume text against top NITK campus recruiter ATS scanners</p>
        </div>
      </div>

      {/* Inputs Form */}
      <form onSubmit={handleAnalyze} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-panel p-5 rounded-3xl border border-slate-800 space-y-3">
          <label className="text-xs font-bold text-slate-300 block">Paste Resume Text</label>
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            className="w-full h-52 bg-[#070A11] border border-slate-800 rounded-2xl p-4 font-mono text-xs text-slate-300 focus:outline-none focus:border-cyan-500 leading-relaxed resize-none"
            placeholder="Paste your plain text resume content..."
          />
        </div>

        <div className="glass-panel p-5 rounded-3xl border border-slate-800 space-y-3 flex flex-col justify-between">
          <div>
            <label className="text-xs font-bold text-slate-300 block mb-1">Target Job Description (Optional)</label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full h-32 bg-[#070A11] border border-slate-800 rounded-2xl p-4 font-mono text-xs text-slate-300 focus:outline-none focus:border-cyan-500 leading-relaxed resize-none"
              placeholder="Paste company job description (e.g. Amazon SDE, Microsoft SWE)..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-95 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 text-white" />}
            Analyze ATS Resume Match
          </button>
        </div>
      </form>

      {/* Analysis Results Display */}
      {analysis && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
          
          {/* ATS Score Gauge Card */}
          <div className="glass-panel p-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-cyan-950/40 to-slate-900 text-center space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">ATS Match Score</h3>
            <div className="text-5xl font-extrabold text-cyan-400">{analysis.atsScore}%</div>
            <p className="text-xs text-slate-300">High compatibility with NITK campus recruiter scanners.</p>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" style={{ width: `${analysis.atsScore}%` }}></div>
            </div>
          </div>

          {/* Keywords Breakdown */}
          <div className="lg:col-span-2 glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white">Keyword Alignment Breakdown</h3>

            <div className="space-y-3">
              <div>
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1.5">Matched Keywords:</span>
                <div className="flex flex-wrap gap-1.5">
                  {analysis.matchedKeywords.map((k) => (
                    <span key={k} className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                      ✓ {k}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider block mb-1.5">Missing Required Keywords:</span>
                <div className="flex flex-wrap gap-1.5">
                  {analysis.missingKeywords.map((k) => (
                    <span key={k} className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300">
                      ✗ {k}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations List */}
          <div className="lg:col-span-3 glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Actionable Resume Bullet Improvements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {analysis.improvements.map((imp, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-xs text-slate-300">
                  <span className="text-[10px] font-bold text-amber-400">Suggestion #{idx + 1}</span>
                  <p>{imp}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
