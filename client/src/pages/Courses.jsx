import React, { useState } from 'react';
import { sampleCourses } from '../data/mockData';
import { useAuth } from '../context/AuthContext';
import { BookOpen, Play, FileText, HelpCircle, CheckCircle2, Award, Star, Clock, Sparkles, Lock, ArrowLeft } from 'lucide-react';

export const Courses = () => {
  const { awardXPAndCoins } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);
  const [quizState, setQuizState] = useState({ active: false, currentQ: 0, selectedAns: null, score: 0, finished: false });

  const categories = ['All', 'Web Development', 'DSA', 'AI & ML', 'System Design'];

  const filteredCourses = selectedCategory === 'All'
    ? sampleCourses
    : sampleCourses.filter(c => c.category === selectedCategory);

  const startQuiz = () => {
    setQuizState({ active: true, currentQ: 0, selectedAns: null, score: 0, finished: false });
  };

  const handleQuizSubmitAnswer = (optionIdx) => {
    setQuizState(prev => ({ ...prev, selectedAns: optionIdx }));
  };

  const nextQuizQuestion = (correctIdx) => {
    const isCorrect = quizState.selectedAns === correctIdx;
    const newScore = isCorrect ? quizState.score + 100 : quizState.score;

    if (quizState.currentQ + 1 < (activeTopic?.miniQuiz?.length || 1)) {
      setQuizState(prev => ({
        ...prev,
        currentQ: prev.currentQ + 1,
        selectedAns: null,
        score: newScore
      }));
    } else {
      setQuizState(prev => ({
        ...prev,
        finished: true,
        score: newScore
      }));
      awardXPAndCoins(100, 25, `Completed Mini Quiz for ${activeTopic.title}`);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-cyan-400" /> Structured LMS Courses
          </h1>
          <p className="text-xs text-slate-400 mt-1">Course → Module → Topic → Lecture → Notes → Mini Quiz → Certificate</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setSelectedCategory(cat); setActiveCourse(null); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'glass-card text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Detail View or Catalog */}
      {activeCourse ? (
        <div className="space-y-6 animate-fade-in">
          {/* Back Button */}
          <button
            onClick={() => { setActiveCourse(null); setActiveTopic(null); setQuizState({ active: false }); }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-card text-xs font-semibold text-cyan-300 hover:bg-slate-800"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Courses
          </button>

          {/* Course Overview Banner */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col md:flex-row gap-6">
            <img src={activeCourse.thumbnail} alt={activeCourse.title} className="w-full md:w-64 h-40 object-cover rounded-2xl border border-slate-800 shrink-0" />
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  {activeCourse.category}
                </span>
                <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400" /> {activeCourse.rating}
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-white">{activeCourse.title}</h2>
              <p className="text-xs text-slate-300 leading-relaxed">{activeCourse.description}</p>
              <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 pt-2">
                <span className="text-purple-400 flex items-center gap-1"><Sparkles className="w-4 h-4" /> +{activeCourse.xpReward} XP Reward</span>
                <span className="text-yellow-400">+150 Coins</span>
                <span>{activeCourse.enrolledStudentsCount} Students Enrolled</span>
              </div>
            </div>
          </div>

          {/* Modules & Topics Split View */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Modules & Topics Tree */}
            <div className="glass-panel p-5 rounded-3xl border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white border-b border-slate-800 pb-3">Course Curriculum</h3>
              {activeCourse.modules && activeCourse.modules.map((mod, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-xs font-extrabold text-cyan-300 uppercase tracking-wider">{mod.title}</h4>
                  <div className="space-y-1 pl-2">
                    {mod.topics && mod.topics.map((t, tidx) => (
                      <button
                        key={tidx}
                        onClick={() => { setActiveTopic(t); setQuizState({ active: false }); }}
                        className={`w-full text-left p-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition ${
                          activeTopic?.title === t.title
                            ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <Play className="w-3.5 h-3.5 text-cyan-400" /> {t.title}
                        </span>
                        <span className="text-[10px] text-slate-500">{t.duration}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Topic Video / Notes / Mini Quiz Area */}
            <div className="lg:col-span-2 space-y-6">
              {activeTopic ? (
                <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Play className="w-5 h-5 text-cyan-400" /> {activeTopic.title}
                  </h3>

                  {/* Video Player */}
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
                    <iframe
                      src={activeTopic.videoUrl}
                      title={activeTopic.title}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Notes & Quiz Section */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-cyan-400" /> Lecture Notes
                    </h4>
                    <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed font-mono">
                      {activeTopic.notes}
                    </div>

                    {/* Interactive Mini Quiz Button */}
                    {activeTopic.miniQuiz && activeTopic.miniQuiz.length > 0 && !quizState.active && (
                      <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-purple-950/40 border border-cyan-500/30 flex items-center justify-between">
                        <div>
                          <h5 className="text-xs font-bold text-white flex items-center gap-1.5">
                            <HelpCircle className="w-4 h-4 text-cyan-400" /> Module Mini Quiz Ready
                          </h5>
                          <p className="text-[10px] text-slate-400">Test your comprehension to earn +100 XP</p>
                        </div>
                        <button
                          onClick={startQuiz}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-lg shadow-cyan-500/20"
                        >
                          Take Mini Quiz
                        </button>
                      </div>
                    )}

                    {/* Interactive Mini Quiz Engine */}
                    {quizState.active && (
                      <div className="p-5 rounded-2xl bg-slate-900 border border-cyan-500/40 space-y-4">
                        {!quizState.finished ? (
                          <>
                            <div className="flex items-center justify-between text-xs text-cyan-400 font-bold">
                              <span>Question {quizState.currentQ + 1} of {activeTopic.miniQuiz.length}</span>
                              <span>Score: {quizState.score} XP</span>
                            </div>
                            <p className="text-xs font-bold text-white">{activeTopic.miniQuiz[quizState.currentQ].question}</p>
                            <div className="space-y-2">
                              {activeTopic.miniQuiz[quizState.currentQ].options.map((opt, oidx) => (
                                <button
                                  key={oidx}
                                  onClick={() => handleQuizSubmitAnswer(oidx)}
                                  className={`w-full text-left p-3 rounded-xl text-xs font-medium border transition ${
                                    quizState.selectedAns === oidx
                                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold'
                                      : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                            <button
                              disabled={quizState.selectedAns === null}
                              onClick={() => nextQuizQuestion(activeTopic.miniQuiz[quizState.currentQ].correctAnswer)}
                              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs disabled:opacity-50"
                            >
                              Submit & Next →
                            </button>
                          </>
                        ) : (
                          <div className="text-center py-4 space-y-3">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                              🎉
                            </div>
                            <h4 className="text-base font-bold text-white">Quiz Completed!</h4>
                            <p className="text-xs text-emerald-400 font-bold">+100 XP & +25 Coins Awarded!</p>
                            <button
                              onClick={() => setQuizState({ active: false })}
                              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
                            >
                              Return to Topic
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="glass-panel p-12 rounded-3xl border border-slate-800 text-center space-y-3">
                  <Play className="w-10 h-10 text-cyan-400/50 mx-auto" />
                  <h4 className="text-sm font-bold text-white">Select a Topic from the Left Module Tree</h4>
                  <p className="text-xs text-slate-400">Watch video lectures, read notes, and attempt quizzes to earn course completion certificate.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Catalog Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course._id} className="glass-card rounded-3xl border border-slate-800/80 overflow-hidden flex flex-col justify-between">
              <div>
                <img src={course.thumbnail} alt={course.title} className="w-full h-44 object-cover" />
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {course.category}
                    </span>
                    <span className="text-xs text-amber-400 font-bold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-400" /> {course.rating}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white line-clamp-1">{course.title}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{course.description}</p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-800/60 mt-3 flex items-center justify-between">
                <span className="text-xs text-purple-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> +{course.xpReward} XP
                </span>
                <button
                  onClick={() => {
                    setActiveCourse(course);
                    if (course.modules && course.modules[0]?.topics[0]) {
                      setActiveTopic(course.modules[0].topics[0]);
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-md hover:opacity-95"
                >
                  Start Course →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
