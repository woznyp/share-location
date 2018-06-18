import DOM from '../utils/dom';

export default class View {
    constructor(props) {
        this.props = props;
        this._raw = null;
    }
    get raw() {
        return this._raw;
    }
    create() {}
    appendTo(target) {
        console.log(target, this.raw);
        DOM.appendTo(target, this.raw);
    }
    registerListeners(){}
}
