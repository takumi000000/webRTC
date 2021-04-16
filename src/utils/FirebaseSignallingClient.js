import firebase from 'firebase/app';

import 'firebase/database';

export default class FirebaseSignallingClient {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDut_A72fs1tJYNVervpOvS2CRWeUqB-e8",
      authDomain: "webrtc-react-takumi0x6.firebaseapp.com",
      databaseURL: "https://webrtc-react-takumi0x6-default-rtdb.firebaseio.com",
      projectId: "webrtc-react-takumi0x6",
      storageBucket: "webrtc-react-takumi0x6.appspot.com",
      messagingSenderId: "452575065842",
      appId: "1:452575065842:web:7149aad712b08a1b40c26b"
    };
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
    this.database = firebase.database();
    this.localPeerName = '';
    this.remotePeerName = '';
  }
}