import { sampleLeaderboard } from '../seed/sampleData.js';

export const getLeaderboard = async (req, res) => {
  try {
    const { branch, semester, type } = req.query;
    let list = [...sampleLeaderboard];

    if (branch && branch !== 'All') {
      list = list.filter(item => item.branch.toLowerCase() === branch.toLowerCase());
    }
    if (semester && semester !== 'All') {
      list = list.filter(item => item.semester === Number(semester));
    }

    // Re-rank items
    list = list.map((item, index) => ({ ...item, rank: index + 1 }));

    res.json({
      success: true,
      totalCount: list.length,
      leaderboard: list,
      userCurrentRank: {
        rank: 2,
        xp: 2840,
        streak: 14,
        coins: 420
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
