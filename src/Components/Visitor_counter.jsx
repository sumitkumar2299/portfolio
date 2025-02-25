// components/VisitorCounter.jsx
import { useEffect, useState } from 'react';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get current count from localStorage
    const storedCount = localStorage.getItem('pageVisits') || 0;
    const newCount = Number(storedCount) + 1;
    
    // Update localStorage and state
    localStorage.setItem('pageVisits', newCount);
    setCount(newCount);
  }, []);

  return (
    <div className="text-center text-white bg-slate-900 text-sm">
      👀 Total Visits: {count}
    </div>
  );
};

export default VisitorCounter;