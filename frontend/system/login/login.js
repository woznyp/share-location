import { LoginView } from "./login-view";
import './login.scss';

export class Login{
    constructor(){
        this.auth = true;
        this.view = new LoginView();
    }

    get _view(){
        return this.view.raw;
    }
}