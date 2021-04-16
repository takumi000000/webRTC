import FirebaseSignallingClient from './FirebaseSignallingClient';

export default class RtcClient {
  constructor(setRtcClient) {
    const config = {
      iceServers: [{ urls: 'stun:stun.stunprotocol.org' }]
    };
    this.rtcPeerConnection = new RTCPeerConnection(config);
    this.FirebaseSignallingClient = new FirebaseSignallingClient();
    this.localPeerName = '';
    this.remotePeerName = '';
    this._setRtcClient = setRtcClient;
    this.mediaStream = null;
  }

  setRtcClient() {
    this._setRtcClient(this);
  }

  async getUserMedia() {
    try {
      const constraints = { audio: true, video: true };
      this.mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (error) {
      console.error(error);
    }
  }

  startListening(localPeerName) {
    this.localPeerName = localPeerName;
    this.setRtcClient();
    this.FirebaseSignallingClient.database
  .ref(localPeerName)
  .on('value', (snapshot) => { //()はどこを監視するか
    const data = snapshot.val();  //const dataに格納される
    });
  }
}
 