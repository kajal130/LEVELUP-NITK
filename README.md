# LevelUp NITK 🚀
> **An AI-Powered Gamified Learning & Competitive Coding Platform for NIT Kurukshetra**

LevelUp NITK brings structured technical learning, competitive coding practice, real-time institute leaderboards, AI study guidance, ATS resume reviews, peer mentorship, and placement prep under a single unified MERN web application.

---

## 🌟 Key Features

### 1. Gamification Engine ⚡
- **XP & Levels**: Earn XP through quizzes, coding problems, and module completions.
- **Streak Flame Counter**: Daily login & challenge streak tracking.
- **Coins Economy**: Earn LevelUp coins redeemable for titles & mock interviews.
- **Badges & Achievements**: *DSA Titan*, *Streak Master*, *Web Wizard*, *Bug Hunter*.

### 2. Structured LMS Courses 📚
- Hierarchy: `Course` → `Module` → `Topic` → `Lecture` → `Notes` → `Mini Quiz` → `Certificate`.
- Domains: Web Development (MERN), DSA TITAN Track, AI & ML, System Design, Cloud/DevOps.

### 3. Competitive Coding Hub 💻
- Interactive Browser Code Runner & Testcase Evaluator (C++, Java, Python, JavaScript).
- Daily Problem of the Day (POTD), Company Tagged Question Bank (Microsoft, Amazon, Google, Flipkart).

### 4. Real-time NITK Leaderboard 🏆
- Filterable by **Branch** (CSE, ECE, IT, ME, EE, Civil, AI-DS) & **Semester** (1 to 8).
- Ranks based on XP, solved problem count, and streak consistency.

### 5. AI Advisory Suite 🤖
- **Personal Learning Roadmap**: Custom week-by-week study milestones.
- **ATS Resume Checker**: Parses resume text against company JDs and provides match scores & bullet optimizations.
- **AI Guidance Chatbot**: 24/7 AI tutor for campus placement prep and technical doubts.

### 6. Senior Mentorship & Social Features 🎓
- 1-on-1 guidance booking with placed seniors (Microsoft, Amazon).
- Student Project Showcase feed with GitHub links & upvoting.
- Campus Discussion Forum.

### 7. Placement Cell Portal 🏢
- Eligibility criteria matrix, company CTC packages, and interview experience archives.

### 8. Faculty & Admin Control Center 🛡️
- Enrolment analytics, branch distribution charts, user management, and course editor.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons, Axios, React Router v6.
- **Backend**: Node.js, Express.js, Socket.io, JWT Authentication, Mongoose.
- **Database**: MongoDB (with automatic local mock seed fallback mode).
- **AI Service**: Gemini / OpenAI API integration drivers.

---

## 🚀 How to Run Locally

### 1. Install Backend & Frontend Dependencies
```bash
# Navigate to project directory
cd C:\Users\ASUS\Downloads\LEVELUP_NITK

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### 2. Start the Server & Client
```bash
# Start backend API server (Port 5000)
cd server
npm run dev

# In a new terminal, start Vite frontend dev server (Port 3000)
cd client
npm run dev
```

Open `http://localhost:3000` in your web browser to explore **LevelUp NITK**!
