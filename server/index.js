require('dotenv').config()

const LiveCam = require('livecam');
const webcam_server = new LiveCam
({
    // address and port of the webcam UI
    'ui_addr' : process.env.LIVECAM_UI_BROADCAST_ADDRESS,
    'ui_port' : process.env.LIVECAM_UI_BROADCAST_PORT,

    // address and port of the webcam Socket.IO server
    // this server broadcasts GStreamer's video frames
    // for consumption in browser side.
    'broadcast_addr' : process.env.SOCKET_BROADCAST_ADDRESS,
    'broadcast_port' : process.env.SOCKET_BROADCAST_PORT,

    // address and port of GStreamer's tcp sink
    'gst_tcp_addr' : process.env.GST_TCP_ADDRESS,
    'gst_tcp_port' : process.env.GST_TCP_PORT,

    // callback function called when server starts
    'start' : function() {
        console.log('Webcam server launched, now open index.html file');
        console.log('This is the feature!')
    },
});

webcam_server.broadcast();
webcam_server