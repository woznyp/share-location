import Component from "../../utils/component";
import { LocationComponentView } from "./location_component-view";

export class LocationComponent extends Component{
    constructor(){
        super();
        this.view = new LocationComponentView();
    }
}