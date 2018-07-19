import DOM from '../../utils/dom';
import View from '../../utils/view';

export class LoginComponentView extends View {
    constructor(props) {
        super(props);
        this.create();
    }
    create() {
        const COMPONENT = DOM.create('div', { id: 'login__component' }),
            LOGIN_INPUT = DOM.create('input', {
                classList: 'input__text__field',
                name: 'login',
                placeholder: 'login',
                onkeyup: this.props.onChange
            }),
            PASSWORD_INPUT = DOM.create('input', {
                classList: 'input__password__field',
                name: 'password',
                placeholder: 'password',
                type: 'password',
                onkeyup: this.props.onChange
            });

        DOM.appendMultiTo([LOGIN_INPUT, PASSWORD_INPUT], COMPONENT);
        this._raw = COMPONENT;
    }
}
