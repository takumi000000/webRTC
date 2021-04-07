import React, {useState} from 'react';
// {useState}は関数の中に状態を持たせる

import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';
import VideoArea from './VideoArea';

// import {Button} from '@material-ui/core';
// Material-ui使うときに必要 ↑↓
// $ git checkout -b install-material-ui



const App = () => {
  const [localPeerName, setLocalPeerName] = useState('');
  const [remotePeerName, setRemotePeerName] = useState('');
  console.log({localPeerName, remotePeerName });

  return <>
  <InputFormLocal 
    localPeerName={localPeerName}
    setLocalPeerName={setLocalPeerName}/>
  <InputFormRemote 
    localPeerName={localPeerName} //これでlocalの時にremoteも表示されなくなる
    remotePeerName={remotePeerName}
    setRemotePeerName={setRemotePeerName}/>
    <VideoArea 
        localPeerName={localPeerName}
        remotePeerName={remotePeerName}
    />
  </>;
};

export default App;
