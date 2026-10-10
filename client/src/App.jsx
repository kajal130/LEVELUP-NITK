import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { NotificationToast } from './components/NotificationToast';
import { AIChatDrawer } from './components/AIChatDrawer';
import { LevelDetailsModal } from './components/LevelDetailsModal';
import { StudentProfileModal } from './components/StudentProfileModal';

// Pages
import { AuthPage } from './pages/AuthPage';
import { Dashboard } from './pages/Dashboard';
import { ProfileEditPage } from './pages/ProfileEditPage';
import { AICareerCounselor } from './pages/AICareerCounselor';
import { Courses } from './pages/Courses';
import { CodingHub } from './pages/CodingHub';
import { Leaderboard } from './pages/Leaderboard';
import { StudentDirectory } from './pages/StudentDirectory';
import { AIRoadmap } from './pages/AIRoadmap';
import { AIResume } from './pages/AIResume';
import { Mentorship } from './pages/Mentorship';
import { Projects } from './pages/Projects';
import { Placements } from './pages/Placements';
import { Forum } from './pages/Forum';
import { AdminPanel } from './pages/AdminPanel';

const AppContent = () => {
  const { user } = useAuth();
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);

  if (!user) {
    return <AuthPage />;
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col font-['Outfit',sans-serif]">
      {/* Header Navbar */}
      <Navbar onToggleAIChat={() => setIsAIChatOpen(!isAIChatOpen)} />

      <div className="flex flex-1 max-w-7xl w-full mx-auto">
        {/* Sidebar Navigation */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<ProfileEditPage />} />
            <Route path="/career-counselor" element={<AICareerCounselor />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/coding" element={<CodingHub />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/students" element={<StudentDirectory />} />
            <Route path="/ai-roadmap" element={<AIRoadmap />} />
            <Route path="/ai-resume" element={<AIResume />} />
            <Route path="/mentorship" element={<Mentorship />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>

      {/* Gamification Notification Toast */}
      <NotificationToast />

      {/* Level System Definition Breakdown Modal */}
      <LevelDetailsModal />

      {/* Student Profile Card View Modal */}
      <StudentProfileModal />

      {/* AI Guidance Assistant Drawer */}
      <AIChatDrawer isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />
    </div>
  );
};

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
