import React, { useState } from 'react';
import '../assets/styles/calculator.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const appendToDisplay = (value) => () => {
    setDisplay(display + value);
  };

  const calculate = () => {
    setDisplay(eval(display));
    console.log(eval(display));
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <motion.div
      id="calculator"
      className="calculator-container"
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.3 }}
    >
      <input id="display" readOnly value={display} placeholder="Calc"></input>
      <div id="keys" className="buttons">
        <button className="operator-btn" onClick={appendToDisplay('+')}>
          +
        </button>
        <button onClick={appendToDisplay('7')}>7</button>
        <button onClick={appendToDisplay('8')}>8</button>
        <button onClick={appendToDisplay('9')}>9</button>
        <button className="operator-btn" onClick={appendToDisplay('-')}>
          -
        </button>
        <button onClick={appendToDisplay('4')}>4</button>
        <button onClick={appendToDisplay('5')}>5</button>
        <button onClick={appendToDisplay('6')}>6</button>
        <button className="operator-btn" onClick={appendToDisplay('*')}>
          *
        </button>
        <button onClick={appendToDisplay('1')}>1</button>
        <button onClick={appendToDisplay('2')}>2</button>
        <button onClick={appendToDisplay('3')}>3</button>
        <button className="operator-btn" onClick={appendToDisplay('/')}>
          /
        </button>
        <button onClick={appendToDisplay('0')}>0</button>
        <button onClick={appendToDisplay('.')}>.</button>
        <button onClick={calculate}>=</button>
        <button className="operator-btn" onClick={clearDisplay}>
          C
        </button>
      </div>
    </motion.div>
  );
};

export default Calculator;
