import DOM from '../../utils/dom';
import View from '../../utils/view';
import { AnchorComponent } from '../../elements/anchor/anchor_component';

export class RouterComponentView extends View {
    constructor() {
        super();
        this.create();
    }
    create() {
        const component = DOM.create('div', { id: 'app' });

        this._raw = component;
    }
}
