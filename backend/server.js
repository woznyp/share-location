const WebSocket = require('ws'),
	WEBSOCKET_SERVER = new WebSocket.Server({ port: 5556 });

WEBSOCKET_SERVER.on('message', msg => {
	WEBSOCKET_SERVER.clients.forEach(client => {
		client.send(msg);
	});
});
