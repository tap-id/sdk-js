# sdk-js

Tap-id sdk-js works with KEY-APP

let sdkTapId = new tapId.default("123435465");

You must add the following iframe in your page.

<iframe id="iframe_tapid" allow="geolocation; microphone; camera"></iframe>

This iframe will load the tap-id portal.

When the user will share the identity, the sdk will receive one communication on socket.

sdkTapId.getResult().then((result) => {
  ...
  
The "result" object will contain the keys: userid and data.

When the service send the identity at the customer endpoint, the result of this endpoint will be send to the socket through "data"

