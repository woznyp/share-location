import DOM from '../../utils/dom';
import View from '../../utils/view';
import { AnchorComponent } from '../../elements/anchor/anchor_component';
import { TopBarComponent } from '../top-bar/top-bar_component';
import { LocationComponent } from '../location/location_component';

export class DashboardComponentView extends View {
    constructor() {
        super();
        this.create();
    }
    create() {
        const COMPONENT = DOM.create('div', {id: 'dashboard'}),
            TOP_BAR = new TopBarComponent(),
            TITLE = DOM.create('h2',{innerText:'Share location'}),
            LOGOUT = new AnchorComponent({
                href: '/logout',
                innerText: 'logout'
            }),
            LOCATION = new LocationComponent();

        DOM.appendTo(TOP_BAR._view, TITLE);
        LOGOUT.view.appendTo(TOP_BAR._view);
        TOP_BAR.view.appendTo(COMPONENT);
        DOM.appendTo(COMPONENT, LOCATION.view._raw);
        this._raw = COMPONENT;
    }
}
