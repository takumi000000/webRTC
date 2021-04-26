import React, { useState, useRef, isLocal, name, rtcClient, videoRef } from 'react';
import { 
  Card, 
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

import AudioAnalyser from './AudioAnalyser';
import VolumeButton from './VolumeButton';
import useDimensions from './hooks/useDimentions';

const Video = ({ isLocal, name, rtcClient,videoRef }) => {
  const [muted, setMuted] = useState(rtcClient.initialAudioMuted);
  const refCard = useRef(null);
  const dimensionsCard = useDimensions(refCard);
  const refVolumeButton = useRef(null);
  const dimentionsVolumeButton = useDimensions(refVolumeButton);
  
  if (videoRef.current)
  console.log({ isLocal, srcObject: videoRef.current.srcObject });

  return (
    <Card ref={refCard}>
      <CardActionArea>
      <video 
      autoPlay 
      muted={isLocal || muted}  // muted...muted状態ならmute
      ref={videoRef} 
      width={dimensionsCard.width}  // 画面幅をピッタリ半分にする
      />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <VolumeButton
        isLocal={isLocal} 
        muted={muted}
        refVolumeButton={refVolumeButton}
        rtcClient={rtcClient} 
        setMuted={setMuted} 
        />
        {!muted && videoRef.current && videoRef.current.srcObject && (
        <AudioAnalyser 
        audio={videoRef.current.srcObject}
        width={dimensionsCard.width - dimentionsVolumeButton.width - 40}
        />
        )}
      </CardActions>
    </Card>
  );
};

export default Video;
