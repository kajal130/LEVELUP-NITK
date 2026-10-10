import axios from 'axios';

const API_BASE = '/api';

export const fetchCourses = async (params) => {
  try {
    const res = await axios.get(`${API_BASE}/courses`, { params });
    return res.data;
  } catch (error) {
    console.warn('Backend API fallback triggered for Courses');
    return { success: true, courses: [] };
  }
};

export const fetchCourseDetail = async (id) => {
  try {
    const res = await axios.get(`${API_BASE}/courses/${id}`);
    return res.data;
  } catch (error) {
    return { success: true, course: null };
  }
};

export const fetchProblems = async (params) => {
  try {
    const res = await axios.get(`${API_BASE}/problems`, { params });
    return res.data;
  } catch (error) {
    return { success: true, problems: [] };
  }
};

export const fetchLeaderboard = async (params) => {
  try {
    const res = await axios.get(`${API_BASE}/leaderboard`, { params });
    return res.data;
  } catch (error) {
    return { success: true, leaderboard: [] };
  }
};

export const generateAIRoadmapAPI = async (payload) => {
  try {
    const res = await axios.post(`${API_BASE}/ai/roadmap`, payload);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const analyzeResumeATSAPI = async (payload) => {
  try {
    const res = await axios.post(`${API_BASE}/ai/resume-ats`, payload);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const submitCodeAPI = async (payload) => {
  try {
    const res = await axios.post(`${API_BASE}/problems/submit`, payload);
    return res.data;
  } catch (error) {
    return null;
  }
};

export const sendAIChatMessage = async (payload) => {
  try {
    const res = await axios.post(`${API_BASE}/ai/chat`, payload);
    return res.data;
  } catch (error) {
    return null;
  }
};
