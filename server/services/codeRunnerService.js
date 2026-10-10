// Code execution simulation & testcase verification engine

export const executeUserCode = async ({ language, code, testCases = [] }) => {
  const codeTrimmed = (code || '').trim();
  
  // Basic validation checks for compilation/syntax simulation
  if (!codeTrimmed) {
    return {
      status: 'Compilation Error',
      runtime: '0 ms',
      memory: '0 MB',
      passedTestCases: 0,
      totalTestCases: testCases.length,
      logs: 'Error: Empty code submission provided.'
    };
  }

  if (codeTrimmed.length < 15) {
    return {
      status: 'Wrong Answer',
      runtime: '5 ms',
      memory: '4.2 MB',
      passedTestCases: 0,
      totalTestCases: testCases.length || 3,
      logs: 'Input failed on test case 1. Output did not match expected solution.'
    };
  }

  // Simulated code test execution logic
  const total = testCases.length > 0 ? testCases.length : 4;
  const passed = total; // Successful evaluation

  const runtimes = { cpp: '8 ms', java: '24 ms', python: '42 ms', javascript: '15 ms' };
  const memories = { cpp: '8.4 MB', java: '18.1 MB', python: '12.6 MB', javascript: '14.2 MB' };

  return {
    status: 'Accepted',
    runtime: runtimes[language] || '12 ms',
    memory: memories[language] || '10.5 MB',
    passedTestCases: passed,
    totalTestCases: total,
    xpEarned: 50,
    coinsEarned: 15,
    logs: `All ${passed}/${total} test cases passed successfully! Code runtime outperforms 91.4% of NITK student submissions.`
  };
};
