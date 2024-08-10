import React from 'react';
import '../assets/styles/appBox.css';

import calendar from '../assets/images/icons/calendarIcon.png';
import photos from '../assets/images/icons/photos.png';
import calculator from '../assets/images/icons/calculator.png';
import clock from '../assets/images/icons/clock.png';
import maps from '../assets/images/icons/maps.png';
import music from '../assets/images/icons/music.png';
import notes from '../assets/images/icons/notes.png';
import text2speech from '../assets/images/icons/text2.png';
import weather from '../assets/images/icons/weather.png';
import game from '../assets/images/icons/game.png';
import quiz from '../assets/images/icons/quiz.png';
import dev from '../assets/images/icons/dev.png';
import placeholder from '../assets/images/placeholder.png';

import AppSection from '../components/App-Section';

export const AppBox = () => {
  return (
    <div className="app-container">
      <AppSection
        photo={calculator}
        appTitle="Calculator"
        appPath="/calculator"
      />
      <AppSection
        photo={music}
        appTitle="Music Player"
        appPath="/musicplayer"
      />
      <AppSection photo={photos} appTitle="Photos" appPath="/camera" />
      <AppSection photo={clock} appTitle="Clock" appPath="/clock" />
      <AppSection photo={maps} appTitle="Maps" appPath="/maps" />
      <AppSection photo={notes} appTitle="Notes" appPath="/notes" />
      <AppSection photo={calendar} appTitle="Calendar" appPath="/calendar" />
      <AppSection
        photo={text2speech}
        appTitle="Text2Speech"
        appPath="/text2speech"
      />
      <AppSection photo={weather} appTitle="Weather" appPath="/weather" />
      <AppSection photo={game} appTitle="Tic Tac Toe" appPath="/game" />
      <AppSection photo={quiz} appTitle="Quizzed" appPath="/quiz" />
      <AppSection photo={dev} appTitle="Dev Info" appPath="/dev" />
    </div>
  );
};

export default AppBox;
