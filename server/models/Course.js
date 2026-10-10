import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: String, default: '15 mins' },
  videoUrl: { type: String, default: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  notes: { type: String, default: 'Comprehensive lecture notes and code snippets...' },
  miniQuiz: [{
    question: String,
    options: [String],
    correctAnswer: Number,
    explanation: String
  }]
});

const moduleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  topics: [topicSchema],
  assignment: {
    title: String,
    description: String,
    submissionType: { type: String, default: 'code' }
  }
});

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['Web Development', 'DSA', 'AI & ML', 'Cloud & DevOps', 'C++', 'Java', 'System Design', 'OS', 'DBMS', 'CN', 'Interview Prep'],
    required: true 
  },
  thumbnail: { type: String, default: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=80' },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
  xpReward: { type: Number, default: 500 },
  coinsReward: { type: Number, default: 100 },
  rating: { type: Number, default: 4.8 },
  enrolledStudentsCount: { type: Number, default: 240 },
  modules: [moduleSchema],
  finalAssessment: {
    title: String,
    passingScore: { type: Number, default: 70 },
    questionsCount: { type: Number, default: 10 }
  }
}, { timestamps: true });

export const Course = mongoose.models.Course || mongoose.model('Course', courseSchema);
