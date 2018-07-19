import DOM from '../utils/dom';

export default class View {
    constructor(props) {
        this.props = props;
        this._raw = null;
        this.eventListeners = null;
    }
    get raw() {
        return this._raw;
    }
    create() {}
    appendTo(target) {
        DOM.appendTo(target, this.raw);
    }
    registerListeners(){}
}
