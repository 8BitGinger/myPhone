import speechBubble from '../assets/images/speech-bubble.png';
import '../assets/styles/speech.css';
import { fadeIn } from '../util/variants';
import { motion } from 'framer-motion';

function Text2Speech() {
  return (
    <>
      <motion.div
        className="speech-box"
        variants={fadeIn('right', 0.1)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="top-section">
          <img src={speechBubble} alt="speech-bubble" />
          <h2>Text 2 Speech</h2>
        </div>
        <input type="text" id="audio" />
        <button
          onClick={() => {
            const text = document.getElementById('audio').value;
            const utterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(utterance);
          }}
        >
          Speak
        </button>
      </motion.div>
    </>
  );
}

export default Text2Speech;
