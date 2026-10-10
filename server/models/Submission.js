import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem' },
  language: { type: String, enum: ['cpp', 'java', 'python', 'javascript'], default: 'cpp' },
  code: { type: String, required: true },
  status: { type: String, enum: ['Accepted', 'Wrong Answer', 'Time Limit Exceeded', 'Runtime Error', 'Compilation Error'], default: 'Accepted' },
  runtime: { type: String, default: '14 ms' },
  memory: { type: String, default: '10.2 MB' },
  passedTestCases: { type: Number, default: 5 },
  totalTestCases: { type: Number, default: 5 }
}, { timestamps: true });

export const Submission = mongoose.models.Submission || mongoose.model('Submission', submissionSchema);
