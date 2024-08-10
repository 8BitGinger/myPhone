import React from 'react';
import { IoCellularSharp, IoWifiSharp, IoBatteryHalf } from 'react-icons/io5';

const IconBox = () => {
  return (
    <div className="icon-box">
      <div className="icon">
        <IoCellularSharp />
      </div>
      <div className="icon">
        <IoWifiSharp />
      </div>
      <div className="icon">
        <IoBatteryHalf />
      </div>
    </div>
  );
};

export default IconBox;
