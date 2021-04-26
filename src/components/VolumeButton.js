import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    height: 38,
    width: 38,
  },
});

const VolumeButton = ({ 
  isLocal, 
  muted, 
  rtcClient, 
  setMuted, 
  refVolumeButton, 
}) => {
  const Icon = muted ? VolumeOffIcon : VolumeUpIcon;
  const classes = useStyles();

  return (
    <IconButton 
    aria-label="switch mute" 
    onClick={() => {
      setMuted((previousState) => !previousState);      // !は逆転する
      // 以下はローカル側だけで実行可能
      if (isLocal) rtcClient.toggleAudio();     //isLocalがtrueになったとき実行
    }}
    ref={refVolumeButton}
    >
    <Icon className={classes.icon} />
  </IconButton>
  );
};

export default VolumeButton;