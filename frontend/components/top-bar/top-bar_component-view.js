import DOM from '../../utils/dom';
import View from "../../utils/view";
import './top-bar_component.scss';

export class TopBarComponentView extends View{
    constructor(){
        super();
        this.create();
    }
    create(){
        const COMPONENT = DOM.create('div', {id: 'top-bar'})
        this._raw = COMPONENT;
    }
}