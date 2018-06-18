import { RouterComponent } from './system/routing/router_component';
import './style.scss';

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        new RouterComponent();
    }
};
