import '../assets/styles/speaker.css';
import IconBox from './IconBox';
import Time from './Time';

const Speaker = () => {
  return (
    <div className="speaker-tray">
      <Time />
      <div className="phone-tray">
        <div className="speaker"></div>
        <div className="circles"></div>
      </div>
      <IconBox />
    </div>
  );
};

export default Speaker;
