import React from 'react';

import InputForms from './InputForms';
import VideoArea from './VideoArea';
import useRtcClient from './hooks/useRtcClient';

// import {Button} from '@material-ui/core';
// Material-ui使うときに必要 ↑↓
// $ git checkout -b install-material-ui

const App = () => { 
  const rtcClient = useRtcClient();

  return (
    <>
      <InputForms rtcClient={rtcClient} />
      <VideoArea rtcClient={rtcClient} />
    </>
  );
};

export default App;
