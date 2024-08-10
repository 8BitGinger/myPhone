import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';
import './index.css';

import App from './App.jsx';
import Weather from './pages/Weather.jsx';
import Calendar from './pages/Calendar.jsx';
import Calculator from './pages/Calculator.jsx';

import HomeScreen from './pages/HomeScreen.jsx';
import Camera from './pages/Camera.jsx';
import Clock from './pages/Clock.jsx';
import Maps from './pages/Maps.jsx';
import Notes from './pages/Notes.jsx';
import MusicPlayer from './pages/MusicPlayer.jsx';
import Text2Speech from './pages/Text2Speech.jsx';
import Dev from './pages/Dev.jsx';
import Quiz from './pages/Quiz.jsx';
import Game from './pages/Game.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: '/weather',
        element: <Weather />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: '/calculator',
        element: <Calculator />,
      },
      {
        path: '/camera',
        element: <Camera />,
      },
      {
        path: '/clock',
        element: <Clock />,
      },
      {
        path: '/maps',
        element: <Maps />,
      },
      {
        path: '/notes',
        element: <Notes />,
      },
      {
        path: '/text2speech',
        element: <Text2Speech />,
      },
      {
        path: '/musicplayer',
        element: <MusicPlayer />,
      },
      {
        path: '/dev',
        element: <Dev />,
      },
      {
        path: '/quiz',
        element: <Quiz />,
      },
      {
        path: '/game',
        element: <Game />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
