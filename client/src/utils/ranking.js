import { sampleUsers } from '../data/mockData';

// Dynamic Rank Calculator based on total XP descending
export const computeStudentRanks = (currentUser, additionalUsers = []) => {
  // Combine sampleUsers and currentUser / custom users
  const allUsersMap = new Map();

  sampleUsers.forEach(u => allUsersMap.set(u._id, u));
  if (currentUser) {
    allUsersMap.set(currentUser._id, currentUser);
  }
  additionalUsers.forEach(u => allUsersMap.set(u._id, u));

  const userList = Array.from(allUsersMap.values());

  // Sort by XP descending
  userList.sort((a, b) => b.xp - a.xp);

  // Assign dynamic ranks
  const rankedList = userList.map((u, index) => ({
    ...u,
    rank: index + 1
  }));

  // Find current user's dynamic rank
  const currentRankedUser = currentUser
    ? rankedList.find(u => u._id === currentUser._id)
    : null;

  return {
    rankedList,
    currentRank: currentRankedUser ? currentRankedUser.rank : 1
  };
};

export const getSingleStudentRank = (student, allUsers = sampleUsers) => {
  if (!student) return 1;
  const list = [...allUsers];
  if (!list.some(u => u._id === student._id)) {
    list.push(student);
  }
  list.sort((a, b) => b.xp - a.xp);
  const foundIndex = list.findIndex(u => u._id === student._id || u.email === student.email);
  return foundIndex !== -1 ? foundIndex + 1 : list.length;
};
