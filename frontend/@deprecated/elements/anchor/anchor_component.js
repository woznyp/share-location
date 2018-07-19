import Component from "../../utils/component";
import { AnchorComponentView } from "./anchor_component-view";

export class AnchorComponent extends Component{
    constructor(props){
        super();
        this.view = new AnchorComponentView(props);
    }
}