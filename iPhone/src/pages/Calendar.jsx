import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import '../assets/styles/calendar.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants';

const Calendar = () => {
  return (
    <motion.div
      className="calendar-page"
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
    >
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </motion.div>
  );
};

export default Calendar;
