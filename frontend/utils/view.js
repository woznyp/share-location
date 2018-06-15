import DOM from '../utils/dom';

export default class View {
    constructor() {
        this._raw = null;
    }
    create() {}
    appendTo(target) {
        DOM.appendTo(target, this.raw);
    }
}
