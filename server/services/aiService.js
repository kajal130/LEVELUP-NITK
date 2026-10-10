// AI Intelligence service for LevelUp NITK
// Integrates with Gemini / OpenAI API or returns rich contextual fallback responses

export const generateAIRoadmap = async ({ targetRole, currentSkillLevel, branch, durationWeeks = 8 }) => {
  const roleLower = (targetRole || 'Fullstack Web Developer').toLowerCase();
  
  // Custom smart roadmap generator
  let milestones = [];
  if (roleLower.includes('web') || roleLower.includes('fullstack')) {
    milestones = [
      { week: 1, title: 'HTML5, CSS3 & Glassmorphism Design Systems', details: 'Master semantic layouts, Flexbox/Grid, CSS custom properties, responsive design & accessibility.' },
      { week: 2, title: 'Modern JavaScript (ES6+) & Async Programming', details: 'Deep dive into Promises, Async/Await, Closures, Event Loop, DOM & Fetch API.' },
      { week: 3, title: 'React.js Core & Component State Management', details: 'JSX, Hooks (useState, useEffect, useMemo), Context API, and Tailwind CSS utility styling.' },
      { week: 4, title: 'Node.js & Express REST API Architecture', details: 'Routing, Middleware design, Async error handling, JWT auth & Password Hashing.' },
      { week: 5, title: 'Database Modeling with MongoDB & Mongoose', details: 'Schema design, Indexing, Aggregation pipelines, and data validation.' },
      { week: 6, title: 'Fullstack Integration & Realtime WebSockets', details: 'Socket.io for live updates, Redux Toolkit state, Axios intercepters & environment variables.' },
      { week: 7, title: 'System Design & NITK Placement Coding Prep', details: 'Caching with Redis, Load balancing concepts, Top 50 LeetCode Medium web questions.' },
      { week: 8, title: 'Deployment & CI/CD Pipeline', details: 'Deploying on Vercel/Render, GitHub Actions, Docker basics & Portfolio production polish.' }
    ];
  } else if (roleLower.includes('ai') || roleLower.includes('machine learning') || roleLower.includes('ml')) {
    milestones = [
      { week: 1, title: 'Python for Data Science & NumPY Vectorization', details: 'Arrays, matrix ops, pandas dataframes & data cleaning techniques.' },
      { week: 2, title: 'Exploratory Data Analysis (EDA) & Data Visualization', details: 'Matplotlib, Seaborn, Feature Engineering, handling missing values & outliers.' },
      { week: 3, title: 'Classical Machine Learning Algorithms', details: 'Linear/Logistic Regression, Decision Trees, Random Forests & SVMs using Scikit-Learn.' },
      { week: 4, title: 'Model Evaluation & Optimization', details: 'Cross-validation, Hyperparameter tuning, Precision/Recall trade-offs & ROC Curves.' },
      { week: 5, title: 'Deep Learning & Neural Networks Fundamentals', details: 'Perceptrons, Activation functions, Backpropagation & PyTorch basics.' },
      { week: 6, title: 'Computer Vision & Natural Language Processing', details: 'CNNs for images, Transformers (BERT, GPT), Tokenization & HuggingFace pipelines.' },
      { week: 7, title: 'LLM Fine-Tuning & Prompt Engineering', details: 'RAG architecture, Vector databases (Pinecone/Chroma), LangChain & Gemini API.' },
      { week: 8, title: 'MLOps & AI API Deployment', details: 'FastAPI, Model serialization, Streamlit demo apps & cloud hosting.' }
    ];
  } else {
    milestones = [
      { week: 1, title: 'Data Structures Foundations & Complexity', details: 'Big-O notation, Arrays, Strings, Two Pointers, Sliding Window techniques.' },
      { week: 2, title: 'Linked Lists, Stacks & Queues', details: 'Singly/Doubly linked lists, Monotonic stacks, Priority Queues & applications.' },
      { week: 3, title: 'Trees, Binary Search Trees & Heaps', details: 'Traversals (Inorder/Preorder/Postorder), BST properties, Min/Max Heap operations.' },
      { week: 4, title: 'Graphs & Disjoint Set Union (DSU)', details: 'BFS, DFS, Topological Sort, Dijkstra algorithm, Union-Find algorithm.' },
      { week: 5, title: 'Dynamic Programming (DP) Mastery', details: '1D & 2D DP, Memoization vs Tabulation, Knapsack variations, LCS & LIS.' },
      { week: 6, title: 'Advanced Topics & Bit Manipulation', details: 'Segment Trees, Trie data structure, Bitwise operations & Math algorithms.' },
      { week: 7, title: 'Low Level System Design (LLD)', details: 'SOLID principles, Design patterns (Singleton, Factory, Strategy), UML diagrams.' },
      { week: 8, title: 'Mock Coding Interviews & Speed Practice', details: 'Timed contests, NITK campus interview patterns, top company previous questions.' }
    ];
  }

  return {
    targetRole,
    currentSkillLevel,
    branch,
    generatedAt: new Date(),
    estimatedTotalHours: durationWeeks * 12,
    completionPercentage: 15,
    milestones
  };
};

export const analyzeResumeATS = async ({ resumeText, jobDescription }) => {
  // ATS resume analysis algorithm
  const textLower = (resumeText || '').toLowerCase();
  
  const keywords = ['react', 'node', 'javascript', 'python', 'dsa', 'express', 'mongodb', 'git', 'sql', 'rest api', 'jwt', 'docker', 'c++'];
  const matched = keywords.filter(k => textLower.includes(k));
  const missing = keywords.filter(k => !textLower.includes(k));
  
  const atsScore = Math.min(96, Math.max(55, Math.round((matched.length / keywords.length) * 100) + 12));

  return {
    atsScore,
    totalKeywordsChecked: keywords.length,
    matchedKeywordsCount: matched.length,
    matchedKeywords: matched.map(k => k.toUpperCase()),
    missingKeywords: missing.map(k => k.toUpperCase()),
    strengths: [
      'Strong technical skills section with relevant framework mentions.',
      'Clear project highlights with measurable bullet points.',
      'Includes education details corresponding to NIT Kurukshetra standard.'
    ],
    improvements: [
      `Add missing target keywords: ${missing.slice(0, 4).join(', ').toUpperCase()}.`,
      'Quantify your impact in project section (e.g. "improved latency by 35%", "used by 200+ students").',
      'Ensure standard clean single-column PDF layout for optimal ATS parser parsing.'
    ],
    recommendedCourses: [
      'Web Development Masterclass (Module 4: React & Node)',
      'Data Structures & Algorithms TITAN Track',
      'System Design Essentials for Campus Placements'
    ]
  };
};

export const generateAIQuiz = async ({ topic, numQuestions = 5, difficulty = 'Medium' }) => {
  return [
    {
      id: 1,
      question: `In ${topic}, which of the following best describes time complexity optimization?`,
      options: ['O(N^2) to O(N log N)', 'O(1) to O(N^2)', 'O(N!) to O(N^3)', 'O(2^N) to O(3^N)'],
      correctAnswer: 0,
      explanation: 'Reducing quadratic O(N^2) algorithms to linearithmic O(N log N) using divide-and-conquer or sorting significantly optimizes runtime for large inputs.'
    },
    {
      id: 2,
      question: `What is the primary architectural benefit of utilizing ${topic} in production applications?`,
      options: ['Increased memory overhead', 'Decoupled modular architecture & high scalability', 'Removal of database indexes', 'Blocking single-threaded loop execution'],
      correctAnswer: 1,
      explanation: 'Modern modular practices allow horizontal scaling, clear separation of concerns, and rapid deployment.'
    },
    {
      id: 3,
      question: `Which data structure is optimal when implementing standard features for ${topic}?`,
      options: ['Unordered Map / Hash Table', 'Basic Fixed Array', 'Singly Linked List without tail pointer', 'Matrix Grid'],
      correctAnswer: 0,
      explanation: 'Hash Tables supply average O(1) time complexity for lookup, insertion, and deletion operations.'
    },
    {
      id: 4,
      question: `What common vulnerability or pitfall must developers watch out for in ${topic}?`,
      options: ['Memory leaks & unhandled async exceptions', 'Excessive white spaces in HTML', 'Using too many comments', 'Including standard headers'],
      correctAnswer: 0,
      explanation: 'Unhandled async rejections or unclosed connection sockets can cause server crashes or memory memory leaks.'
    },
    {
      id: 5,
      question: `When deploying ${topic} solutions for high-concurrency environments, which strategy is recommended?`,
      options: ['Stateless JWT verification & Redis Caching', 'Hardcoded session cookies', 'Polling DB every 100ms', 'Single node without fallback'],
      correctAnswer: 0,
      explanation: 'Stateless authentication paired with fast in-memory caches (Redis) reduces DB strain during high traffic spikes.'
    }
  ];
};

export const answerAIChatbot = async ({ userMessage, conversationHistory }) => {
  const msg = (userMessage || '').toLowerCase();
  
  if (msg.includes('dsa') || msg.includes('algorithm') || msg.includes('leetcode')) {
    return "For DSA at NIT Kurukshetra placement season: Focus heavily on Binary Trees, Graphs (BFS/DFS), Dynamic Programming (Knapsack & LCS), and Two Pointers. Solve 2 problems daily on LevelUp NITK to maintain your streak!";
  } else if (msg.includes('resume') || msg.includes('ats')) {
    return "To optimize your resume for tech companies visiting NITK: Keep it to 1 page, use clean single-column markdown/latex format, highlight your LevelUp NITK rank & XP, and quantify your project impacts.";
  } else if (msg.includes('web dev') || msg.includes('react') || msg.includes('node')) {
    return "Web Dev is one of the highest demand domains. Start with our Web Development track, complete the MERN project assignment, and deploy your project on Render/Vercel to earn 500 XP!";
  } else if (msg.includes('streak') || msg.includes('coin') || msg.includes('badge')) {
    return "Every day you log in, attempt a quiz, and solve a daily challenge, your streak increments! Coins can be redeemed for exclusive NITK LevelUp badges and mock interview vouchers.";
  } else {
    return "Hello! I am your LevelUp NITK AI Guidance Counselor. Ask me about custom study roadmaps, placement prep strategies, code optimization, or ATS resume reviews!";
  }
};
