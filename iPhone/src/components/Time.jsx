import { useState, useEffect } from 'react';

const Time = () => {
  const [time, setTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <h1 className="home-time">{time}</h1>;
};

export default Time;
