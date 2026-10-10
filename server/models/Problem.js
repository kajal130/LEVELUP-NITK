import mongoose from 'mongoose';

const testCaseSchema = new mongoose.Schema({
  input: { type: String, required: true },
  expectedOutput: { type: String, required: true },
  isHidden: { type: Boolean, default: false }
});

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], default: 'Medium' },
  category: { type: String, default: 'Arrays' },
  xp: { type: Number, default: 50 },
  coins: { type: Number, default: 15 },
  constraints: [String],
  companyTags: [String],
  sampleTestCases: [testCaseSchema],
  hiddenTestCases: [testCaseSchema],
  starterCode: {
    cpp: String,
    java: String,
    python: String,
    javascript: String
  },
  solutionSnippet: String,
  acceptanceRate: { type: Number, default: 68.5 },
  solvedCount: { type: Number, default: 1420 }
}, { timestamps: true });

export const Problem = mongoose.models.Problem || mongoose.model('Problem', problemSchema);
