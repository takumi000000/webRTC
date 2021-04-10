import React, { useEffect, useRef } from 'react';

import Video from './Video';

const VideoLocal = ({ name }) => {
  const videoRef = useRef(null);
  const currentVideoRef = videoRef.current;

  useEffect(() => {
    if (currentVideoRef === null) return;
    const getMedia = async () => {
      const constraints = { audio: true, video: true };
    
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
        /* ストリームを使用 */
        currentVideoRef.srcObject = mediaStream;
      } catch(err) {
        /* エラーを処理 */
        console.error(err);
      }
    };

    getMedia();
  }, [currentVideoRef]);

  return <Video isLoacl={true} name={name} videoRef={videoRef} />;
};

export default VideoLocal;