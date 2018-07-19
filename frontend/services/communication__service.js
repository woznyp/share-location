class CommunicationService {
	constructor() {
		this.observers = [];
		this.websocketServer = new WebSocket(`ws://${window.location.hostname}:5556`);
		this.websocketServer.onopen = () => {
			console.info('connection to websocket server opened');
		};
		this.websocketServer.onmessage = msg => {
			this.notify(JSON.parse(msg.data));
		};
    }
    
    send(data){
        this.websocketServer.send(JSON.stringify(data));
    }

	notify(msg) {
		this.observers.map(observer => {
			observer.notify(msg);
		});
	}

	registerObserver(observer) {
		this.observers.push(observer);
	}
}

export default new CommunicationService();
