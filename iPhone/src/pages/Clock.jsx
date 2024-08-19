import { useState } from 'react';
import { FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants';

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
      <motion.div
        className="overlay-clock"
        variants={fadeIn('left', 0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="float-clock">
          <div className="clock-container">
            <div className="overlay">
              <FaClock />
              {ctime}
            </div>
          </div>

          <div className="clock-block"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Clock;
