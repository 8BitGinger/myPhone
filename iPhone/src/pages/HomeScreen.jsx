import Speaker from '../components/Speaker';
import Weather from '../components/WeatherSection';
import AppBox from './App-Box';
import RoundClock from '../components/RoundClock';

const HomeScreen = () => {
  return (
    <>
      <Speaker />
      <div className="top-box">
        <RoundClock />
        <Weather />
      </div>
      <AppBox />
    </>
  );
};

export default HomeScreen;
