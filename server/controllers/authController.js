import jwt from 'jsonwebtoken';
import { sampleUsers } from '../seed/sampleData.js';
import { User } from '../models/User.js';

const JWT_SECRET = process.env.JWT_SECRET || 'levelup_nitk_secret_key_2026';

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check DB first if available, else sample users
    let user = null;
    try {
      user = await User.findOne({ email });
    } catch (e) {
      user = sampleUsers.find(u => u.email === email);
    }

    if (!user) {
      // Fallback matching default test users
      user = sampleUsers.find(u => u.email === email) || sampleUsers[0];
    }

    const token = jwt.sign({ id: user._id, role: user.role, email: user.email }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, rollNo, branch, semester, year, role } = req.body;

    const newUser = {
      _id: 'usr_' + Date.now(),
      name,
      email,
      password: password || 'password123',
      rollNo: rollNo || '221100' + Math.floor(10 + Math.random() * 89),
      branch: branch || 'CSE',
      semester: Number(semester) || 5,
      year: Number(year) || 3,
      role: role || 'student',
      xp: 100,
      coins: 50,
      level: 1,
      streak: 1,
      badges: [{ id: 'b_new', title: 'NITK Freshman', description: 'Joined LevelUp NITK Platform', icon: '🚀' }],
      placementReadinessScore: 65,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    };

    const token = jwt.sign({ id: newUser._id, role: newUser.role, email: newUser.email }, JWT_SECRET, { expiresIn: '7d' });

    res.json({
      success: true,
      message: 'Registration successful! Welcome to LevelUp NITK.',
      token,
      user: newUser
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = sampleUsers[0];
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
