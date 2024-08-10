import { useState } from 'react';
import { FaClock } from 'react-icons/fa';

const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);
  return (
    <>
      <div className="overlay-clock">
        <div className="float-clock">
          <div className="clock-container">
            <div className="overlay">
              <FaClock />
              {ctime}
            </div>
          </div>

          <div className="clock-block"></div>
        </div>
      </div>
    </>
  );
};

export default Clock;
