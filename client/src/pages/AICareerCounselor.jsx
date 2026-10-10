import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Compass, Sparkles, CheckCircle2, ArrowRight, Bot, HelpCircle, RefreshCw, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AICareerCounselor = () => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);

  // Questionnaire responses
  const [q1Interest, setQ1Interest] = useState('');
  const [q1Other, setQ1Other] = useState('');

  const [q2Skill, setQ2Skill] = useState('');
  const [q3Goal, setQ3Goal] = useState('');

  const [loading, setLoading] = useState(false);
  const [resultBlueprint, setResultBlueprint] = useState(null);

  const handleGenerateSolution = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setResultBlueprint({
        primaryRecommendation: q1Interest.includes('Web') ? 'Fullstack Web Development (MERN)' :
                               q1Interest.includes('Algo') ? 'DSA TITAN Track for Campus Placements' :
                               q1Interest.includes('AI') ? 'Artificial Intelligence & Data Science' : 'Cloud & DevOps Engineering',
        explanations: [
          {
            path: 'Fullstack Web Development (MERN)',
            desc: 'Building responsive frontend interfaces using React.js paired with Node.js & Express REST APIs and MongoDB databases. Highest demand for campus hiring at NIT Kurukshetra.',
            salaryRange: '₹14 LPA - ₹45 LPA',
            fitScore: '94% Match'
          },
          {
            path: 'DSA TITAN Track (Competitive Coding)',
            desc: 'Mastering Data Structures (Trees, Graphs, DP, Sliding Window) to crack Online Assessments and technical coding rounds for top tier tech giants like Microsoft & Amazon.',
            salaryRange: '₹18 LPA - ₹58 LPA',
            fitScore: '90% Match'
          },
          {
            path: 'Artificial Intelligence & Machine Learning',
            desc: 'Developing predictive ML models, PyTorch neural networks, Transformers, and LLM RAG pipelines using Gemini/OpenAI APIs.',
            salaryRange: '₹16 LPA - ₹50 LPA',
            fitScore: '85% Match'
          },
          {
            path: 'Cloud & System Design Infrastructure',
            desc: 'Architecting high-concurrency microservices, Docker containers, Kubernetes, AWS cloud services, and low-level design patterns.',
            salaryRange: '₹15 LPA - ₹48 LPA',
            fitScore: '82% Match'
          }
        ],
        actionSteps: [
          'Enroll in recommended MERN or DSA TITAN course on LevelUp NITK',
          'Solve 2 coding problems daily on the Coding Hub to maintain streak',
          'Complete Module 1 Mini Quiz to earn your first +100 XP'
        ]
      });
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
          <Bot className="w-4 h-4 animate-bounce" /> LevelUp AI Interactive Counselor
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          New Student Career Path & Future Guidance Wizard
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Answer 3 quick questions and AI will analyze your profile to provide a detailed technical career blueprint.
        </p>
      </div>

      {/* Step Form */}
      {!resultBlueprint ? (
        <form onSubmit={handleGenerateSolution} className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 bg-[#0B0F19]">
          
          {/* Question 1 */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-extrabold">1</span>
              What area of technology excites you the most?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                '1. Building Web & Mobile Apps (Web Dev / MERN)',
                '2. Solving Algorithmic Puzzles (DSA & Competitive Coding)',
                '3. AI, Machine Learning & LLMs (Data Science)',
                '4. Cloud, DevOps & Cyber Security',
                '5. Other (Custom Domain)'
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setQ1Interest(opt)}
                  className={`p-3.5 rounded-2xl text-xs font-medium text-left border transition ${
                    q1Interest === opt
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold shadow-md shadow-cyan-500/10'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {q1Interest.includes('Other') && (
              <input
                type="text"
                value={q1Other}
                onChange={(e) => setQ1Other(e.target.value)}
                placeholder="Specify your interest (e.g. Game Development, Blockchain)..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 mt-2"
              />
            )}
          </div>

          {/* Question 2 */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-extrabold">2</span>
              What is your current programming experience level?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                '1. Complete Beginner (Starting from scratch)',
                '2. Know basic syntax in C++ / Python / JS',
                '3. Intermediate (Built small practice projects)',
                '4. Advanced (Placement ready)'
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setQ2Skill(opt)}
                  className={`p-3.5 rounded-2xl text-xs font-medium text-left border transition ${
                    q2Skill === opt
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold shadow-md shadow-cyan-500/10'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs flex items-center justify-center font-extrabold">3</span>
              What is your primary goal for campus placements at NITK?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                '1. Top Product Companies (Microsoft, Amazon, Google)',
                '2. High-Growth Tech Startups (Fullstack Roles)',
                '3. AI Research & Higher Studies (MS / M.Tech)',
                '4. Open Source Development & Remote Jobs'
              ].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setQ3Goal(opt)}
                  className={`p-3.5 rounded-2xl text-xs font-medium text-left border transition ${
                    q3Goal === opt
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold shadow-md shadow-cyan-500/10'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!q1Interest || !q2Skill || !q3Goal || loading}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs hover:opacity-95 shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 text-white" />}
            Analyze Answers & Generate Career Blueprint
          </button>
        </form>
      ) : (
        /* Results View */
        <div className="space-y-6 animate-fade-in">
          
          <div className="glass-panel p-6 rounded-3xl border border-cyan-500/40 bg-gradient-to-r from-cyan-950/60 via-slate-900 to-purple-950/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">AI Top Recommended Pathway</span>
              <h2 className="text-xl font-extrabold text-white">{resultBlueprint.primaryRecommendation}</h2>
              <p className="text-xs text-slate-300 mt-1">Based on your choices, this domain offers the highest placement readiness match for NIT Kurukshetra.</p>
            </div>

            <Link
              to="/courses"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 shrink-0 flex items-center gap-2"
            >
              Start Recommended Track →
            </Link>
          </div>

          {/* Explanations of All Future Career Pathways in Brief */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" /> Explanation of Future Technical Career Pathways
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resultBlueprint.explanations.map((exp, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white">{exp.path}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">{exp.fitScore}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{exp.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between text-[11px]">
                    <span className="text-slate-400">Average NITK Package:</span>
                    <span className="font-bold text-emerald-400">{exp.salaryRange}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => { setResultBlueprint(null); setCurrentStep(1); }}
            className="px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white"
          >
            ← Retake Career Quiz
          </button>

        </div>
      )}

    </div>
  );
};
