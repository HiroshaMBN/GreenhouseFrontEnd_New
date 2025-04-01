import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: "pusher",
  key: "my-websocket-key",
  wsHost: "10.128.1.52",
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
  enabledTransports: ['ws']
});

export default echo;
