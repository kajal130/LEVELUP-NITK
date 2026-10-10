import { sampleCourses } from '../seed/sampleData.js';

export const getAllCourses = async (req, res) => {
  try {
    const { category, level } = req.query;
    let courses = [...sampleCourses];
    if (category) {
      courses = courses.filter(c => c.category.toLowerCase().includes(category.toLowerCase()));
    }
    if (level) {
      courses = courses.filter(c => c.level.toLowerCase().includes(level.toLowerCase()));
    }
    res.json({ success: true, count: courses.length, courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { id } = req.params;
    const course = sampleCourses.find(c => c._id === id) || sampleCourses[0];
    res.json({ success: true, course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const completeTopicQuiz = async (req, res) => {
  try {
    const { courseId, topicTitle, score } = req.body;
    const xpAwarded = score >= 80 ? 100 : 50;
    const coinsAwarded = 20;

    res.json({
      success: true,
      message: `Quiz completed! You scored ${score}%.`,
      xpEarned: xpAwarded,
      coinsEarned: coinsAwarded,
      unlockedBadge: score === 100 ? { title: 'Quiz Master', icon: '🎯', description: 'Scored 100% in Course Mini Quiz' } : null
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
