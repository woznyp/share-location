import DOM from '../../utils/dom';
import View from '../../utils/view';

export class LoginComponentView extends View {
    constructor(props) {
        super(props);
        this.create();
    }
    create() {
        const component = DOM.create('div', { classList: 'login__component' }),
            loginInput = DOM.create('input', { classList: 'input__field' }),
            passwordInput = DOM.create('input', { classList: 'input__field' });

        DOM.appendMultiTo([loginInput, passwordInput], component);
        this._raw = component;
    }
}
