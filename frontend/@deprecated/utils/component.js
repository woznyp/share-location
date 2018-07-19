export default class Component {
    constructor() {
        this.view = null;
    }

    get _view() {
        return this.view.raw;
    }

    remove(){
        this.view.raw.remove();
        delete this.view;
    }
}
