import DOM from '../../utils/dom';
import View from '../../utils/view';

export class LocationComponentView extends View {
    constructor() {
        super();
        this.create();
    }
    create() {
        const COMPONENT = DOM.create('img', {
            src:
                'https://maps.googleapis.com/maps/api/staticmap?center=52.413891,16.9007196&zoom=15&size=600x300&markers=color:red|label:|52.413891,16.9007196&key=AIzaSyCZwL20adwm2-9egk8tYbVRbVj9Aoy_Pks'
        });
        this._raw = COMPONENT;
    }
}
