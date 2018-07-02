import DOM from '../../utils/dom';
import View from '../../utils/view';

export class AnchorComponentView extends View {
    constructor(props) {
        super(props);
        this.create();
        this.registerListeners();
    }
    create() {
        const COMPONENT = DOM.create('a', this.props);
        this._raw = COMPONENT;
    }
    registerListeners() {
        this._raw.addEventListener('click', ev => {
            ev.preventDefault();
            window.dispatchEvent(
                new CustomEvent('route', { detail: { href: this.props.href } })
            );
        });
    }
}
