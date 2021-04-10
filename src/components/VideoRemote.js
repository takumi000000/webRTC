import React, { useEffect, useRef } from 'react';

import Video from './Video';

const VideoRemote = ({ name }) => {
  const videoRef = null;
  
  return <Video isLoacl={false} name={name} videoRef={videoRef} />;
};

export default VideoRemote;