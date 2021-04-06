import React, {useState} from 'react';
// {useState}は関数の中に状態を持たせる

import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';

// import {Button} from '@material-ui/core';
// Material-ui使うときに必要 ↑↓
// $ git checkout -b install-material-ui

const getMedia = async() => {
  const constraints = { audio: true, video: true };

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
    /* ストリームを使用 */
  } catch(err) {
    /* エラーを処理 */
    console.error(err);
  }
};

getMedia();

const App = () => {
  const [localPeerName, setLocalPeerName] = useState('');
  const [remotePeerName, setRemotePeerName] = useState('');

  return <>
  <InputFormLocal 
    localPeerName={localPeerName}
    setLocalPeerName={setLocalPeerName}/>
  <InputFormRemote 
    remotePeerName={remotePeerName}
    setRemotePeerName={setRemotePeerName}/>
  </>;
};

export default App;
