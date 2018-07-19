import Component from '../../utils/component';
import { DashboardComponentView } from './dashboard_component-view';

export class DashboardComponent extends Component {
    constructor() {
        super();
        this.view = new DashboardComponentView();
    }
}
