import React, { useCallback, useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// 波線のは使われてないから消す

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.google.com/search?q=java%E5%90%8C%E5%A5%BD%E4%BC%9A&rlz=1C1QABZ_jaJP905JP905&oq=&aqs=chrome.1.69i59i450l8.31472360j0j15&sourceid=chrome&ie=UTF-8">
        Takumi from GenkaiSyuraku
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ rtcClient }) {
  const label = '相手の名前';
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState('');
  const [isComposed, setIsComposed] = useState(false);

  useEffect(() => {
    const disabled = name === '';
    setDisabled(disabled);
      }, [name]);

    const initializeRemotePeer = useCallback ((e) => {
      rtcClient.remotePeerName = name;
      e.preventDefault();
    }, [name, rtcClient]
    );

    if (rtcClient.localPeerName === '') return <></>;
    if (rtcClient.remotePeerName !== '') return <></>;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {label}を入力してください
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            autoFocus
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            onChange={(e) => setName(e.target.value)}
            onCompositionEnd={() => setIsComposed(false)}
            onCompositionStart={() => setIsComposed(true)}
            onKeyDown={(e) =>{
              if (isComposed) return; //変換後のEnterでNameを確定させないようにする
              if (e.target.value === '') return;  //name(value)が何もないときEnterを押しても何も返さない
              if (e.key === 'Enter') initializeRemotePeer(e);
            }}
            value={name}
            label={label}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={(e) => initializeRemotePeer(e)}
            disabled={disabled}
            className={classes.submit}
          >
            決定
          </Button>
  
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
