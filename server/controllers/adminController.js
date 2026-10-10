import { sampleUsers, sampleCourses, sampleProblems } from '../seed/sampleData.js';

export const getAdminAnalytics = async (req, res) => {
  try {
    res.json({
      success: true,
      analytics: {
        totalStudents: 1420,
        activeDailyUsers: 840,
        coursesPublished: sampleCourses.length,
        problemsInBank: sampleProblems.length,
        totalQuizzesAttempted: 18450,
        avgPlacementReadinessScore: 78.6,
        branchDistribution: [
          { name: 'CSE', count: 480 },
          { name: 'ECE', count: 310 },
          { name: 'IT', count: 260 },
          { name: 'ME', count: 190 },
          { name: 'EE', count: 180 }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
