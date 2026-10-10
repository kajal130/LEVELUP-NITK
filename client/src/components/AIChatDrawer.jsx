import React, { useState } from 'react';
import { X, Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';
import { sendAIChatMessage } from '../services/api';

export const AIChatDrawer = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Greetings NITKian! I am LevelUp AI, your personal technical counselor. Ask me about study roadmaps, placement prep, DSA strategies, or ATS resume tips!'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    const apiRes = await sendAIChatMessage({ message: userMsg });
    setLoading(false);

    if (apiRes && apiRes.reply) {
      setMessages(prev => [...prev, { sender: 'ai', text: apiRes.reply }]);
    } else {
      setMessages(prev => [...prev, {
        sender: 'ai',
        text: 'For DSA at NIT Kurukshetra placement season: Focus heavily on Binary Trees, Graphs (BFS/DFS), Dynamic Programming (Knapsack & LCS), and Two Pointers. Solve 2 problems daily on LevelUp NITK to maintain your streak!'
      }]);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 glass-panel bg-[#0B0F19]/95 border-l border-slate-800 shadow-2xl flex flex-col justify-between">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-gradient-to-r from-cyan-950/40 to-slate-900">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 text-cyan-300">
            <Bot className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              LevelUp AI Assistant
            </h3>
            <p className="text-[10px] text-cyan-400 font-medium">NIT Kurukshetra Guidance Bot</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {m.sender === 'ai' && (
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-cyan-400" />
              </div>
            )}
            <div className={`p-3 rounded-2xl text-xs max-w-[80%] leading-relaxed ${
              m.sender === 'user' 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-tr-none' 
                : 'glass-card border border-slate-800 text-slate-200 rounded-tl-none'
            }`}>
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-xs text-cyan-400">
            <RefreshCw className="w-4 h-4 animate-spin" /> LevelUp AI is thinking...
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 border-t border-slate-800 flex items-center gap-2 bg-slate-900/60">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI about DSA, Web Dev, ATS..."
          className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90 transition shadow-lg shadow-cyan-500/20"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
