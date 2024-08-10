import speechBubble from '../assets/images/speech-bubble.png';
import '../assets/styles/speech.css';

function Text2Speech() {
  return (
    <>
      <div className="speech-box">
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
      </div>
    </>
  );
}

export default Text2Speech;
