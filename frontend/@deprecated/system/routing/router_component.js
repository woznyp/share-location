import Component from '../../utils/component';
import routes from './routes';
import { RouterComponentView } from './router_component-view';
import DOM from '../../utils/dom';
import COMPONENTS from '../../components/components';

export class RouterComponent extends Component {
    constructor() {
        super();
        this.view = new RouterComponentView();
        this.routes = routes;
        this.history = window.history;
        this.component = null;

        this.registerListeners();
        this.view.appendTo(DOM.getElement('body')[0]);

        window.dispatchEvent(new Event('route'));
    }

    registerListeners() {
        window.addEventListener('route', ev => {
            this.route(ev);
        });
        window.addEventListener('loadComponent', ev => {
            this.loadComponent(ev);
        });
        window.addEventListener('logout', () => {
            this.logout();
        });
    }

    logout() {
        localStorage.clear();
        window.history.pushState(null, null, '/');
        window.dispatchEvent(
            new CustomEvent('route', { detail: { href: '/login' } })
        );
    }

    loadComponent(ev) {
        if (this.component) {
            this.component.remove();
        }

        const PATH = this.routes[ev.detail.href] ? ev.detail.href : '/',
        COMPONENT = new COMPONENTS[this.routes[PATH]]();
        COMPONENT.view.appendTo(this._view);

        this.component = COMPONENT;
        window.history.pushState(null, null, PATH);
    }

    route(ev) {
        let path = ev.detail ? ev.detail.href : window.location.pathname;
        if (window.localStorage.getItem('isAuthorized')) {
            if (path === '/login') {
                path = '/';
            }
            if (path !== '/logout') {
                window.dispatchEvent(
                    new CustomEvent('loadComponent', {
                        detail: { href: path }
                    })
                );
            } else {
                window.dispatchEvent(new Event('logout'));
            }
        } else {
            window.dispatchEvent(
                new CustomEvent('loadComponent', { detail: { href: '/login' } })
            );
        }
    }
}
