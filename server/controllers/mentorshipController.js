import { sampleUsers } from '../seed/sampleData.js';

export const getSeniorsList = async (req, res) => {
  try {
    const seniors = sampleUsers.filter(u => u.role === 'senior' || u.semester >= 7);
    res.json({ success: true, count: seniors.length, seniors });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const requestMentorshipSession = async (req, res) => {
  try {
    const { seniorId, topic, message, preferredTime } = req.body;
    res.json({
      success: true,
      message: 'Mentorship request sent successfully to senior! You will be notified upon confirmation.',
      request: {
        id: 'ment_' + Date.now(),
        seniorId,
        topic,
        status: 'Pending',
        createdAt: new Date()
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
