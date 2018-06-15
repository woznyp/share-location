import DOM from '../../utils/dom';
import View from '../../utils/view';

export class LoginView extends View {
    constructor() {
        super();
        this.create();
    }
    create() {
        const container = DOM.create('div', { classList: 'login__component' }),
            loginInput = DOM.create('input', { classList: 'input__field' }),
            passwordInput = DOM.create('input', { classList: 'input__field' });

        DOM.appendMultiTo([loginInput, passwordInput], container);
        this._raw = container;
    }
    get raw() {
        return this._raw;
    }
}
