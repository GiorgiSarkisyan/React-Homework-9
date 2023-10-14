import React from 'react';
import LeftSide from './mainPageLeftSide';
import RightSide from "./mainPageRightSide"

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page-content">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default MainPage;
