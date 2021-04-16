import React, { useReducer, useState } from 'react';
// {useState}は関数の中に状態を持たせる

import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';
import RtcClient from '../utils/RtcClient';
import VideoArea from './VideoArea';

// import {Button} from '@material-ui/core';
// Material-ui使うときに必要 ↑↓
// $ git checkout -b install-material-ui

const App = () => {
  const [rtcClient, _setRtcClient] = useState(new RtcClient());
  const [, forceRender] = useReducer((boolean) => !boolean, false);  //前の, は消さない

  const setRtcClient = (rtcClient) => {
    _setRtcClient(rtcClient);
    forceRender();
  };

  return(
    <>
      <InputFormLocal rtcClient={rtcClient} setRtcClient={setRtcClient} />
      <InputFormRemote rtcClient={rtcClient} setRtcClient={setRtcClient} />
    < VideoArea rtcClient={rtcClient} />
    </>
  );
};

export default App;
