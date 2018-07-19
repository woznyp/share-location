import DOM from '../../utils/dom';
import View from '../../utils/view';
import './location_component.scss';

export class LocationComponentView extends View {
    constructor(props) {
        super(props);
        this.create();
        this.map = null;
    }
    create() {
        window.initMap = function() {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 13,
                center: { lat: 52.4119254, lng: 16.9169527 }
            });

            this.map = map;
            window.GOOGLE_MAPS_SCRIPT_LOADED = true;
        };

        const COMPONENT = DOM.create('div', { id: 'map' });
        this._raw = COMPONENT;

        if (!window.GOOGLE_MAPS_SCRIPT_LOADED) {
            const GOOGLE_MAPS_SCRIPT = DOM.create('script', {
                src:
                    'https://maps.googleapis.com/maps/api/js?key=AIzaSyCZwL20adwm2-9egk8tYbVRbVj9Aoy_Pks&callback=initMap'
            });
            DOM.appendTo(COMPONENT, GOOGLE_MAPS_SCRIPT);
        } else {
            setTimeout(() => window.initMap(), 0);
        }

        setTimeout(() => {
            this.props.showUserLocation().then(({coords}) => {
                let image = 'http://0.gravatar.com/avatar/479f9707441ad442fc8de2753d9091ae',
                marker = new google.maps.Marker({
                    map: this.map,
                    title: 'Paweł Woźny',
                    position: {lat: coords.latitude, lng: coords.longitude},
                    icon: image
                });
                marker.setMap(map);
            });
        }, 2000);
    }
}
