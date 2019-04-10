/*! https://www.tap-id.tech v0.1.1 by @vgiacchina */
/* 2019                                           */

import io from 'socket.io-client';

let publicHost = 'https://app.tap-id.tech';
export default class {
  constructor(appkey) {
    this.host = 'https://api.tap-id.tech';
    this.appkey = appkey;
    this.socket;
    this.init();
  }
  getQRcode(theUrl, callback) {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    };
    xmlHttp.open("POST", theUrl, true);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(JSON.stringify({
      socket: this.socket.id,
      appkey: this.appkey
    }));
  }
  init() {
    let target = document.getElementById('iframe_tapid');
    if (target) {
      this.socket = io(`${this.host}/sdk`, {
        transports: ['websocket', 'polling', 'flashsocket']
      });
      this.socket.on('connect', (data) => {
        this.getQRcode(`${this.host}/api/qrcode`, (data) => {
          let aux = JSON.parse(data);
          if (aux.error) {
            console.log('error:tapidSdk', aux.error);
            return;
          }
          target.src = `${publicHost}/login_sdk?token=${aux.token}`;
        });
      });
    }
  }
  getResult() {
    return new Promise((resolve, reject) => {
      this.socket.on('tapid-sdkCallback', function (data) {
        if (data) {
          resolve(data);
          return;
        }
        reject({
          error: `sdk doens't work`
        });
      });
    });
  }
}