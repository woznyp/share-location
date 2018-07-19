import Component from "../../utils/component";
import { TopBarComponentView } from "./top-bar_component-view";

export class TopBarComponent extends Component{
    constructor(){
        super();
        this.view = new TopBarComponentView();
    }
}