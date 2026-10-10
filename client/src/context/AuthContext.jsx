import React, { createContext, useContext, useState, useEffect } from 'react';
import { sampleUsers } from '../data/mockData';
import { getSingleStudentRank } from '../utils/ranking';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [allStudents, setAllStudents] = useState(() => {
    const savedList = localStorage.getItem('levelup_all_students');
    return savedList ? JSON.parse(savedList) : sampleUsers;
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('levelup_user');
    const u = saved ? JSON.parse(saved) : sampleUsers[0];
    if (u) {
      u.rank = getSingleStudentRank(u, sampleUsers);
    }
    return u;
  });

  const [notification, setNotification] = useState(null);
  const [showLevelModal, setShowLevelModal] = useState(false);
  const [viewingStudentProfile, setViewingStudentProfile] = useState(null);

  useEffect(() => {
    if (user) {
      const calculatedRank = getSingleStudentRank(user, allStudents);
      const updatedUser = { ...user, rank: calculatedRank };
      localStorage.setItem('levelup_user', JSON.stringify(updatedUser));
    } else {
      localStorage.removeItem('levelup_user');
    }
  }, [user, allStudents]);

  const login = (selectedUser) => {
    // 1. Wipe modal states
    setShowLevelModal(false);
    setViewingStudentProfile(null);

    // 2. Ensure allStudents contains selectedUser
    const updatedStudents = allStudents.some(u => u._id === selectedUser._id || u.email === selectedUser.email)
      ? allStudents
      : [selectedUser, ...allStudents];

    setAllStudents(updatedStudents);
    localStorage.setItem('levelup_all_students', JSON.stringify(updatedStudents));

    // 3. Compute dynamic rank
    const calculatedRank = getSingleStudentRank(selectedUser, updatedStudents);
    const userWithRank = { ...selectedUser, rank: calculatedRank };

    // 4. Update user state and localStorage
    setUser(userWithRank);
    localStorage.setItem('levelup_user', JSON.stringify(userWithRank));

    setNotification({
      type: 'info',
      title: 'Switched User Profile',
      message: `Logged in as ${selectedUser.name} (${selectedUser.role.toUpperCase()})`
    });

    // 5. Force navigate to dashboard home
    window.location.href = '/';
  };

  const logout = () => {
    // Wipe all user session state
    setUser(null);
    setShowLevelModal(false);
    setViewingStudentProfile(null);
    localStorage.removeItem('levelup_user');
  };

  const awardXPAndCoins = (xpAmount, coinsAmount, reason = 'Task Completed') => {
    if (!user) return;
    setUser(prev => {
      const newXP = prev.xp + xpAmount;
      const newCoins = prev.coins + coinsAmount;
      const newLevel = Math.floor(newXP / 250) + 1;
      const updated = {
        ...prev,
        xp: newXP,
        coins: newCoins,
        level: newLevel
      };
      updated.rank = getSingleStudentRank(updated, allStudents);

      setAllStudents(students => {
        const next = students.map(s => s._id === updated._id ? updated : s);
        localStorage.setItem('levelup_all_students', JSON.stringify(next));
        return next;
      });

      return updated;
    });

    setNotification({
      type: 'reward',
      title: '🎉 LevelUp Reward!',
      message: `+${xpAmount} XP & +${coinsAmount} Coins for ${reason}`
    });

    setTimeout(() => setNotification(null), 4500);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        allStudents,
        login,
        logout,
        awardXPAndCoins,
        notification,
        setNotification,
        showLevelModal,
        setShowLevelModal,
        viewingStudentProfile,
        setViewingStudentProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
