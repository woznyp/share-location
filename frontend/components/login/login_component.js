import { LoginComponentView } from './login_component-view';
import './login.scss';
import Component from '../../utils/component';

export class LoginComponent extends Component {
    constructor() {
        super();
        this.auth = true;
        this.view = new LoginComponentView();
        window.localStorage.setItem('isAuthorized', true);
    }
}
