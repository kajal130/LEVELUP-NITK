export const sampleUsers = [
  {
    _id: 'usr_1',
    name: 'Aarav Sharma',
    email: 'aarav_22110045@nitk.ac.in',
    password: 'password123',
    rollNo: '22110045',
    branch: 'CSE',
    semester: 5,
    year: 3,
    role: 'student',
    xp: 2840,
    coins: 420,
    level: 12,
    streak: 14,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    badges: [
      { id: 'b1', title: 'DSA Titan', description: 'Solved 100+ Data Structure problems', icon: '⚡' },
      { id: 'b2', title: 'Streak Master', description: 'Maintained 14-day continuous learning streak', icon: '🔥' },
      { id: 'b3', title: 'Web Wizard', description: 'Completed Fullstack React-Node module', icon: '🌐' }
    ],
    completedCourses: ['crs_1', 'crs_2'],
    solvedProblems: ['prob_1', 'prob_2', 'prob_3'],
    placementReadinessScore: 89
  },
  {
    _id: 'usr_2',
    name: 'Ananya Verma',
    email: 'ananya_21112019@nitk.ac.in',
    password: 'password123',
    rollNo: '21112019',
    branch: 'IT',
    semester: 7,
    year: 4,
    role: 'senior',
    xp: 4120,
    coins: 890,
    level: 18,
    streak: 28,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    badges: [
      { id: 'b4', title: 'Senior Mentor', description: 'Guided 20+ NITK juniors in placement prep', icon: '🎓' },
      { id: 'b5', title: 'Codeforces Expert', description: 'Achieved top ranking in college contest', icon: '🏆' }
    ],
    completedCourses: ['crs_1', 'crs_2', 'crs_3', 'crs_4'],
    solvedProblems: ['prob_1', 'prob_2', 'prob_3', 'prob_4'],
    placementReadinessScore: 95
  },
  {
    _id: 'usr_3',
    name: 'Rohan Gupta',
    email: 'rohan_23115012@nitk.ac.in',
    password: 'password123',
    rollNo: '23115012',
    branch: 'ECE',
    semester: 3,
    year: 2,
    role: 'student',
    xp: 1950,
    coins: 210,
    level: 8,
    streak: 9,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    badges: [
      { id: 'b6', title: 'Bug Hunter', description: 'Fixed 25+ compiler errors in mini quizzes', icon: '🐞' }
    ],
    completedCourses: ['crs_1'],
    solvedProblems: ['prob_1'],
    placementReadinessScore: 74
  },
  {
    _id: 'usr_4',
    name: 'Dr. S. K. Mehta',
    email: 'skmehta@nitk.ac.in',
    password: 'adminpassword',
    rollNo: 'FAC001',
    branch: 'CSE',
    semester: 8,
    year: 4,
    role: 'admin',
    xp: 9999,
    coins: 5000,
    level: 50,
    streak: 100,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    badges: [{ id: 'b7', title: 'Platform Admin', description: 'Faculty Supervisor & Lead Admin', icon: '👑' }],
    completedCourses: [],
    solvedProblems: [],
    placementReadinessScore: 100
  }
];

export const sampleCourses = [
  {
    _id: 'crs_1',
    title: 'Web Development MERN Stack Mastery',
    description: 'Learn modern Web Development from HTML, CSS, JavaScript to React.js, Node.js, Express, MongoDB and Redux Toolkit with hands-on projects.',
    category: 'Web Development',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=80',
    level: 'Beginner to Advanced',
    xpReward: 600,
    coinsReward: 150,
    rating: 4.9,
    enrolledStudentsCount: 380,
    modules: [
      {
        title: 'Module 1: Modern Frontend Architecture & CSS Glassmorphism',
        description: 'Building beautiful responsive interfaces with modern CSS tokens, Flexbox/Grid, and animations.',
        topics: [
          {
            title: 'Semantic HTML5 & Accessibility Standards',
            duration: '20 mins',
            notes: 'Learn how clean tags improve SEO and reader accessibility.',
            videoUrl: 'https://www.youtube.com/embed/gQojMIhELvM',
            miniQuiz: [
              { question: 'Which tag represents independent content in HTML5?', options: ['<article>', '<div>', '<span>', '<section>'], correctAnswer: 0, explanation: '<article> tag is used for self-contained independent entries.' }
            ]
          },
          {
            title: 'Modern CSS Grid & Glassmorphism Design',
            duration: '35 mins',
            notes: 'Backdrop-filter blur, translucent borders, and dynamic HSL color variables.',
            videoUrl: 'https://www.youtube.com/embed/HD13equ_byU',
            miniQuiz: [
              { question: 'What property creates frosted glass effect in CSS?', options: ['backdrop-filter', 'opacity', 'box-shadow', 'filter'], correctAnswer: 0, explanation: 'backdrop-filter: blur(10px) creates frosted glass UI.' }
            ]
          }
        ]
      },
      {
        title: 'Module 2: React.js Hooks, Context API & State',
        description: 'Master functional components, hooks, custom state management and API integration.',
        topics: [
          {
            title: 'Mastering useState & useEffect Hooks',
            duration: '40 mins',
            notes: 'Lifecycle behavior in functional React components.',
            videoUrl: 'https://www.youtube.com/embed/TNhaISOUy6Q',
            miniQuiz: [
              { question: 'When does useEffect with [] dependency array execute?', options: ['On every render', 'Only once after initial mount', 'On component unmount', 'Never'], correctAnswer: 1, explanation: 'An empty dependency array [] runs the effect once after initial render.' }
            ]
          }
        ]
      }
    ]
  },
  {
    _id: 'crs_2',
    title: 'DSA TITAN Track - NITK Placement Essentials',
    description: 'Master Data Structures & Algorithms tailored specifically for top tech campus interviews (Microsoft, Amazon, Google, Flipkart).',
    category: 'DSA',
    thumbnail: 'https://images.unsplash.com/photo-1516116211223-4258568880c6?w=500&auto=format&fit=crop&q=80',
    level: 'Intermediate',
    xpReward: 800,
    coinsReward: 200,
    rating: 5.0,
    enrolledStudentsCount: 520,
    modules: [
      {
        title: 'Module 1: Two Pointers, Sliding Window & Binary Search',
        description: 'Optimizing O(N^2) brute force solutions to O(N) and O(log N).',
        topics: [
          {
            title: 'Sliding Window Pattern & Maximum Subarray Sum',
            duration: '45 mins',
            notes: 'Dynamic window size maintenance using left and right pointers.',
            videoUrl: 'https://www.youtube.com/embed/MK-NZ4hN7SM',
            miniQuiz: [
              { question: 'What is the time complexity of Sliding Window technique for array size N?', options: ['O(N)', 'O(N^2)', 'O(N log N)', 'O(1)'], correctAnswer: 0, explanation: 'Each element enters and exits the window at most once, giving O(N) linear time.' }
            ]
          }
        ]
      }
    ]
  },
  {
    _id: 'crs_3',
    title: 'Artificial Intelligence & Machine Learning Roadmap',
    description: 'From Python Data Science basics to Deep Neural Networks, Transformers, HuggingFace, and Gemini LLM RAG pipelines.',
    category: 'AI & ML',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=80',
    level: 'Intermediate',
    xpReward: 750,
    coinsReward: 180,
    rating: 4.85,
    enrolledStudentsCount: 290,
    modules: []
  },
  {
    _id: 'crs_4',
    title: 'System Design & Distributed Cloud Infrastructure',
    description: 'Learn Low Level Design (LLD) and High Level Design (HLD), Load Balancers, Caching, Sharding, and Microservices.',
    category: 'System Design',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=80',
    level: 'Advanced',
    xpReward: 900,
    coinsReward: 250,
    rating: 4.95,
    enrolledStudentsCount: 185,
    modules: []
  }
];

export const sampleProblems = [
  {
    _id: 'prob_1',
    title: 'Two Sum - NITK Classic',
    slug: 'two-sum-nitk',
    difficulty: 'Easy',
    category: 'Arrays & Hashing',
    xp: 50,
    coins: 15,
    description: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution.',
    constraints: ['2 <= nums.length <= 10^4', '-10^9 <= nums[i] <= 10^9', '-10^9 <= target <= 10^9'],
    companyTags: ['Microsoft', 'Amazon', 'Google', 'Flipkart'],
    acceptanceRate: 78.4,
    solvedCount: 1840,
    starterCode: {
      cpp: `#include <iostream>\n#include <vector>\n#include <unordered_map>\nusing namespace std;\n\nvector<int> twoSum(vector<int>& nums, int target) {\n    // Write your code here\n    return {};\n}`,
      java: `import java.util.*;\n\nclass Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n        return new int[]{};\n    }\n}`,
      python: `def twoSum(nums, target):\n    # Write your code here\n    pass`,
      javascript: `function twoSum(nums, target) {\n    // Write your code here\n    return [];\n}`
    },
    sampleTestCases: [
      { input: 'nums = [2,7,11,15], target = 9', expectedOutput: '[0, 1]' },
      { input: 'nums = [3,2,4], target = 6', expectedOutput: '[1, 2]' }
    ]
  },
  {
    _id: 'prob_2',
    title: 'Longest Substring Without Repeating Characters',
    slug: 'longest-substring-without-repeating-characters',
    difficulty: 'Medium',
    category: 'Sliding Window',
    xp: 100,
    coins: 30,
    description: 'Given a string `s`, find the length of the longest substring without repeating characters.',
    constraints: ['0 <= s.length <= 5 * 10^4', 's consists of English letters, digits, symbols and spaces.'],
    companyTags: ['Amazon', 'Microsoft', 'Uber'],
    acceptanceRate: 61.2,
    solvedCount: 1250,
    starterCode: {
      cpp: `int lengthOfLongestSubstring(string s) {\n    // Write your solution\n    return 0;\n}`,
      python: `def lengthOfLongestSubstring(s: str) -> int:\n    return 0`,
      javascript: `function lengthOfLongestSubstring(s) {\n    return 0;\n}`
    },
    sampleTestCases: [
      { input: 's = "abcabcbb"', expectedOutput: '3' },
      { input: 's = "bbbbb"', expectedOutput: '1' }
    ]
  },
  {
    _id: 'prob_3',
    title: 'Trapping Rain Water - Hard Challenge',
    slug: 'trapping-rain-water',
    difficulty: 'Hard',
    category: 'Two Pointers',
    xp: 200,
    coins: 60,
    description: 'Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
    constraints: ['n == height.length', '1 <= n <= 2 * 10^4', '0 <= height[i] <= 10^5'],
    companyTags: ['Google', 'Goldman Sachs', 'Atlassian'],
    acceptanceRate: 48.9,
    solvedCount: 890,
    starterCode: {
      cpp: `int trap(vector<int>& height) {\n    return 0;\n}`,
      python: `def trap(height: List[int]) -> int:\n    return 0`
    },
    sampleTestCases: [
      { input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', expectedOutput: '6' }
    ]
  }
];

export const sampleLeaderboard = [
  { rank: 1, name: 'Ananya Verma', rollNo: '21112019', branch: 'IT', semester: 7, xp: 4120, coins: 890, level: 18, streak: 28, solvedCount: 142 },
  { rank: 2, name: 'Aarav Sharma', rollNo: '22110045', branch: 'CSE', semester: 5, xp: 2840, coins: 420, level: 12, streak: 14, solvedCount: 98 },
  { rank: 3, name: 'Priya Nambiar', rollNo: '22113088', branch: 'AI-DS', semester: 5, xp: 2610, coins: 380, level: 11, streak: 12, solvedCount: 87 },
  { rank: 4, name: 'Kabir Das', rollNo: '21110012', branch: 'CSE', semester: 7, xp: 2450, coins: 340, level: 10, streak: 21, solvedCount: 82 },
  { rank: 5, name: 'Rohan Gupta', rollNo: '23115012', branch: 'ECE', semester: 3, xp: 1950, coins: 210, level: 8, streak: 9, solvedCount: 64 },
  { rank: 6, name: 'Divya Aggarwal', rollNo: '23116034', branch: 'ME', semester: 3, xp: 1720, coins: 190, level: 7, streak: 8, solvedCount: 52 },
  { rank: 7, name: 'Siddharth Rao', rollNo: '24110009', branch: 'CSE', semester: 1, xp: 1400, coins: 140, level: 6, streak: 5, solvedCount: 41 }
];

export const sampleForumPosts = [
  {
    _id: 'post_1',
    title: 'How to prepare for Amazon SDE 1 Campus Visit at NIT Kurukshetra?',
    content: 'Hi seniors! Amazon is visiting our campus next month. What are the major DSA topics asked in online assessment and technical interviews?',
    authorName: 'Aarav Sharma',
    authorBranch: 'CSE (5th Sem)',
    authorAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    tags: ['Placement', 'Amazon', 'DSA', 'NITK'],
    likes: 42,
    comments: [
      {
        authorName: 'Ananya Verma',
        authorRole: 'Senior (Placed at Microsoft)',
        authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
        content: 'Focus heavily on Binary Trees, Dynamic Programming (LCS, Knapsack), Monotonic Stacks, and System Design basics. Also practice LevelUp NITK POTD daily!'
      }
    ],
    createdAt: new Date()
  },
  {
    _id: 'post_2',
    title: 'MERN Stack vs Next.js for Web Dev Project Competition',
    content: 'We are building an AI project for NITK Tech Fest. Is pure React + Node REST API better or should we adopt Next.js App Router?',
    authorName: 'Rohan Gupta',
    authorBranch: 'ECE (3rd Sem)',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    tags: ['WebDev', 'React', 'NextJS', 'Project'],
    likes: 28,
    comments: [],
    createdAt: new Date()
  }
];

export const sampleCompanies = [
  {
    name: 'Microsoft',
    logo: 'https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?w=100&auto=format&fit=crop&q=80',
    role: 'Software Engineer (SDE)',
    package: '₹51.0 LPA',
    eligibility: 'CGPA >= 7.5 (CSE, IT, ECE, AI-DS)',
    rounds: ['Online Coding Assessment (2 Qs)', 'Technical Interview 1 (DSA & OS)', 'Technical Interview 2 (System Design)', 'AA / HR Round'],
    topQuestions: ['Two Sum', 'Trapping Rain Water', 'LRU Cache Design']
  },
  {
    name: 'Amazon',
    logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&auto=format&fit=crop&q=80',
    role: 'SDE 1',
    package: '₹45.5 LPA',
    eligibility: 'CGPA >= 7.0 (All Branches)',
    rounds: ['Online Assessment (Debugging + Coding + Behavioral)', 'Technical Interview 1', 'Technical Interview 2 (Leadership Principles)'],
    topQuestions: ['Course Schedule (Graph BFS)', 'Word Ladder', 'Reorder Data in Log Files']
  },
  {
    name: 'Google',
    logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&auto=format&fit=crop&q=80',
    role: 'Software Engineer',
    package: '₹58.0 LPA',
    eligibility: 'CGPA >= 8.0 (CSE, IT)',
    rounds: ['Screening Telephonic Round', '4 Technical Onsite Coding Rounds'],
    topQuestions: ['Median of Two Sorted Arrays', 'Serialize and Deserialize Binary Tree']
  }
];
