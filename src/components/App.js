import React, {useState} from 'react';
// {useState}は関数の中に状態を持たせる

import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';
import RtcClient from '../utils/RtcClient';
import VideoArea from './VideoArea';

// import {Button} from '@material-ui/core';
// Material-ui使うときに必要 ↑↓
// $ git checkout -b install-material-ui

const App = () => {
  const rtcClient = new RtcClient();
  console.log({ rtcClient });


  return(
  <>
  <InputFormLocal rtcClient={rtcClient} />
  <InputFormRemote rtcClient={rtcClient} />
    <VideoArea rtcClient={rtcClient} />
  </>
  );
};

export default App;
