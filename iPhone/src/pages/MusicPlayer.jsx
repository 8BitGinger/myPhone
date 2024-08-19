import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../util/variants';

import rock from '../assets/audio/alternative.mp3';
import hiphop from '../assets/audio/hiphop.mp3';
import pop from '../assets/audio/pop.mp3';
import country from '../assets/audio/country.mp3';
import { FaPause, FaPlay } from 'react-icons/fa';
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5';
import alternativeLogo from '../assets/images/music/rock.png';
import popLogo from '../assets/images/music/pop.png';
import hiphopLogo from '../assets/images/music/hiphop.png';
import countryLogo from '../assets/images/music/country.png';

import '../assets/styles/musicPlayer.css';

const MusicPlayer = () => {
  const songsData = [rock, hiphop, pop, country];
  const titleData = ['Alternative', 'Hip-Hop', 'Pop', 'Country'];
  const artworkData = [alternativeLogo, hiphopLogo, popLogo, countryLogo];
  const [songs, setSongs] = useState(songsData);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState(songsData[0]);
  const [currentTitle, setCurrentTitle] = useState(titleData[0]);
  const [currentArtwork, setCurrentArtwork] = useState(artworkData[0]);

  console.log(currentSong);

  const nextTrack = () => {
    let index = songs.indexOf(currentSong);
    if (index < songs.length - 1) {
      setCurrentSong(songs[index + 1]);
      setIsPlaying(true);
      setCurrentArtwork(artworkData[index + 1]);
      setCurrentTitle(titleData[index + 1]);
    } else {
      setCurrentSong(songs[0]);
      setIsPlaying(true);
      setCurrentArtwork(artworkData[0]);
      setCurrentTitle(titleData[0]);
    }
  };

  const prevTrack = () => {
    let index = songs.indexOf(currentSong);
    if (index > 0) {
      setCurrentSong(songs[index - 1]);
      setIsPlaying(true);
      setCurrentArtwork(artworkData[index - 1]);
      setCurrentTitle(titleData[index - 1]);
    } else {
      setCurrentSong(songs[songs.length - 1]);
      setIsPlaying(true);
      setCurrentArtwork(artworkData[artworkData.length - 1]);
      setCurrentTitle(titleData[titleData.length - 1]);
    }
  };

  const playTrack = () => {
    setIsPlaying(!isPlaying);
    currentSong
      ? isPlaying
        ? document.querySelector('audio').pause()
        : document.querySelector('audio').play()
      : null;
  };

  return (
    <motion.div
      className="music-page"
      variants={fadeIn('down', 0.1)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="player">
        <audio src={currentSong} autoPlay></audio>
        <img src={currentArtwork} alt="" />
        <h3>{currentTitle}</h3>
        <div className="controls">
          <button onClick={prevTrack}>
            <IoArrowBackCircle />
          </button>
          <button onClick={playTrack}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={nextTrack}>
            <IoArrowForwardCircle />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
