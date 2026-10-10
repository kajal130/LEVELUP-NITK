import { sampleProblems } from '../seed/sampleData.js';
import { executeUserCode } from '../services/codeRunnerService.js';

export const getAllProblems = async (req, res) => {
  try {
    const { difficulty, category, search } = req.query;
    let problems = [...sampleProblems];

    if (difficulty) {
      problems = problems.filter(p => p.difficulty.toLowerCase() === difficulty.toLowerCase());
    }
    if (category) {
      problems = problems.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
    }
    if (search) {
      problems = problems.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    }

    res.json({ success: true, count: problems.length, problems });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProblemBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const problem = sampleProblems.find(p => p.slug === slug || p._id === slug) || sampleProblems[0];
    res.json({ success: true, problem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const submitProblemCode = async (req, res) => {
  try {
    const { problemId, language, code } = req.body;
    const problem = sampleProblems.find(p => p._id === problemId) || sampleProblems[0];

    const result = await executeUserCode({
      language: language || 'cpp',
      code,
      testCases: problem.sampleTestCases
    });

    res.json({
      success: true,
      result
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
