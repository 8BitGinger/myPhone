import React from 'react';
import { Link } from 'react-router-dom';

const AppSection = (props) => {
  // console.log(props.photo);
  return (
    <Link className="app-block" to={props.appPath}>
      <img src={props.photo} alt="app photo" />
      <p>{props.appTitle}</p>
    </Link>
  );
};

export default AppSection;
