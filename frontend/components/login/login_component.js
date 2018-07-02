import { LoginComponentView } from './login_component-view';
import './login.scss';
import Component from '../../utils/component';

export class LoginComponent extends Component {
    constructor() {
        super();
        this.auth = true;
        this.view = new LoginComponentView({ onChange: this.onChange.bind(this) });
        this.login = null;
        this.password = null;
    }
    onChange(ev) {
        this[ev.target.name] = ev.target.value;
        if(this.login === 'admin' && this.password === 'admin'){
            window.localStorage.setItem('isAuthorized', true);
            window.dispatchEvent(new CustomEvent('route', {detail: {href: '/dashboard'}}));
        }
    }
}
