import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rollNo: { type: String, default: '22110001' },
  branch: { type: String, enum: ['CSE', 'ECE', 'IT', 'ME', 'EE', 'Civil', 'AI-DS'], default: 'CSE' },
  semester: { type: Number, min: 1, max: 8, default: 5 },
  year: { type: Number, min: 1, max: 4, default: 3 },
  role: { type: String, enum: ['student', 'senior', 'faculty', 'admin'], default: 'student' },
  avatar: { type: String, default: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80' },
  
  // Gamification Metrics
  xp: { type: Number, default: 450 },
  coins: { type: Number, default: 120 },
  level: { type: Number, default: 4 },
  streak: { type: Number, default: 7 },
  lastActiveDate: { type: Date, default: Date.now },
  
  // Badges & Achievements
  badges: [{
    id: String,
    title: String,
    description: String,
    icon: String,
    unlockedAt: { type: Date, default: Date.now }
  }],
  
  // Progress & Activity
  completedCourses: [{ type: String }],
  completedModules: [{ type: String }],
  solvedProblems: [{ type: String }],
  quizzesAttempted: { type: Number, default: 14 },
  quizScoreAverage: { type: Number, default: 88 },
  placementReadinessScore: { type: Number, default: 82 },
  
  // Goals
  dailyGoals: {
    solveProblem: { type: Boolean, default: true },
    completeModule: { type: Boolean, default: false },
    takeQuiz: { type: Boolean, default: true }
  },
  
  // Bio & Social
  bio: { type: String, default: 'Passionate developer & NIT Kurukshetra tech enthusiast.' },
  githubUrl: { type: String, default: 'https://github.com' },
  linkedinUrl: { type: String, default: 'https://linkedin.com' }
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model('User', userSchema);
