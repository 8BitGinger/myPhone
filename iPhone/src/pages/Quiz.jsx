import React from 'react';
import quizLogo from '../assets/images/quizLOGO.png';
import '../assets/styles/quiz.css';
import correctLogo from '../assets/images/correct.png';
import incorrectLogo from '../assets/images/incorrect.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants';

const Quiz = () => {
  const [incorrect, setIncorrect] = React.useState(true);
  const [answered, setAnswered] = React.useState(false);
  let question = 'What is the capital of France?';
  let answers = ['Paris', 'London', 'Berlin', 'Madrid'];

  let logo = incorrect ? incorrectLogo : correctLogo;

  const selectAnswer = (e) => {
    let answer = e.target.innerText;

    if (answer === 'Paris') {
      console.log('Correct!');
      setIncorrect(false);
      setAnswered(true);
    } else {
      console.log('Incorrect!');
      setIncorrect(true);
      setAnswered(true);
    }
  };

  const restart = () => {
    setAnswered(false);
  };

  return (
    <motion.div
      className="quiz-container"
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.5 }}
    >
      <img src={quizLogo} alt="Quizzed Logo" />
      {!answered ? (
        <div className="quiz-box">
          <h2>{question}</h2>
          <div className="questions">
            <div className="answers">
              {answers.map((answer, index) => (
                <button key={index} onClick={selectAnswer}>
                  {answer}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="quiz-box">
          <h3>{!incorrect ? 'Correct' : 'Wrong'}</h3>
          <img src={logo} alt="" />
          <button onClick={restart}>Try Again</button>
        </div>
      )}
    </motion.div>
  );
};

export default Quiz;
