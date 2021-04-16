import { useEffect, useReducer, useState } from 'react';  // {useState}は関数の中に状態を持たせる

import RtcClient from '../../utils/RtcClient';

const useRtcClient = () => {
    const [rtcClient, _setRtcClient] = useState(null);
    const [, forceRender] = useReducer((boolean) => !boolean, false); //前の, は消さない
  
    const setRtcClient = (rtcClient) => {
      _setRtcClient(rtcClient);
      forceRender();
    };
  
    useEffect(() => {
    const client = new RtcClient(setRtcClient);
    client.setRtcClient();
    }, []);

    return rtcClient;
};

export default useRtcClient;
