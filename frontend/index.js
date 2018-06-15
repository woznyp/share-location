import DOM from './utils/dom';
import { Login } from './system/login/login';

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        init();
    }
};

function init(){
    let h1Element = DOM.create('h1', { innerText: 'Hello World' });
    DOM.appendTo(
        DOM.getElement('body')[0],
        h1Element
    );

    let loginComponent = new Login(),
    loginComponent2 = new Login();
    loginComponent.view.appendTo(DOM.getElement('body')[0]);
    DOM.appendTo(DOM.getElement('body')[0], loginComponent2._view);
}