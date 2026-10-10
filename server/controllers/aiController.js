import { generateAIRoadmap, analyzeResumeATS, generateAIQuiz, answerAIChatbot } from '../services/aiService.js';

export const getAIRoadmap = async (req, res) => {
  try {
    const { targetRole, currentSkillLevel, branch, durationWeeks } = req.body;
    const roadmap = await generateAIRoadmap({ targetRole, currentSkillLevel, branch, durationWeeks });
    res.json({ success: true, roadmap });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getResumeATSAnalysis = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;
    const analysis = await analyzeResumeATS({ resumeText, jobDescription });
    res.json({ success: true, analysis });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAIQuiz = async (req, res) => {
  try {
    const { topic, numQuestions, difficulty } = req.body;
    const questions = await generateAIQuiz({ topic: topic || 'Data Structures', numQuestions, difficulty });
    res.json({ success: true, questions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const handleAIChat = async (req, res) => {
  try {
    const { message, history } = req.body;
    const reply = await answerAIChatbot({ userMessage: message, conversationHistory: history });
    res.json({ success: true, reply });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
