import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Sparkles, Trophy, CheckCircle2 } from 'lucide-react';

export const NotificationToast = () => {
  const { notification } = useAuth();

  if (!notification) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="glass-panel bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 border border-cyan-500/50 rounded-2xl p-4 shadow-2xl shadow-cyan-500/20 flex items-center gap-3 text-white max-w-sm">
        <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-400/40 text-cyan-300 shrink-0">
          <Sparkles className="w-5 h-5 text-cyan-400" />
        </div>
        <div>
          <h4 className="font-bold text-xs text-cyan-300">{notification.title}</h4>
          <p className="text-xs text-slate-200 mt-0.5">{notification.message}</p>
        </div>
      </div>
    </div>
  );
};
