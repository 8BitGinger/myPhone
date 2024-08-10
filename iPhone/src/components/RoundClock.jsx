import { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RoundClock = () => {
  let time = new Date().toLocaleTimeString();

  const [ztime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);
  return (
    <Link to="/clock">
      <div className="round-clock">
        <FaClock />
        {ztime}
      </div>
    </Link>
  );
};

export default RoundClock;
