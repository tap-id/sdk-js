# sdk-js

Tap-id sdk-js works with KEY-APP

let sdkTapId = new tapId.default("123435465");

In your page have to be present an iframe:

<iframe id="iframe_tapid" allow="geolocation; microphone; camera"></iframe>

On this iframe will load the tap-id portal.

When the user will send the own identity, the sdk will receive one communication on socket.

sdkTapId.getResult().then((result) => {
  ...
  
The object result will contain the key: userid and data. Data is the response of the endpoint used for the send the identity.

