import Speaker from '../components/Speaker';
import Weather from '../components/WeatherSection';
import AppBox from './App-Box';
import RoundClock from '../components/RoundClock';
import { motion } from 'framer-motion';
import { fadeIn } from './../util/variants';

const HomeScreen = () => {
  return (
    <motion.section
      variants={fadeIn('in', 0.1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
      animate="visible"
    >
      <div className="top-box">
        <RoundClock />
        <Weather />
      </div>
      <AppBox />
    </motion.section>
  );
};

export default HomeScreen;
