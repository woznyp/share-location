class DOM {
    /**
     * Creates new HTMLElement
     * @param {string} elementName - element name
     * @param {object} props - elements properties
     * @returns {HTMLElement}
     */
    create(elementName, props = {}) {
        let element = document.createElement(elementName);
        Object.keys(props).forEach(propName => {
            element[propName] = props[propName];
        });
        return element;
    }
    /**
     * Appends element to given target
     * @param {HTMLElement} target
     * @param {HTMLElement} element
     * @returns {HTMLElement}
     */
    appendTo(target, element) {
        target.appendChild(element);
    }
    appendMultiTo(elements, target) {
        elements.forEach(element => {
            this.appendTo(target, element);
        });
    }
    removeFrom(element, target) {
        typeof element !== 'string'
            ? target.remove(element)
            : target.remove(this.getElement(element));
    }
    getElement(element) {
        return document.querySelectorAll(element);
    }
}

export default new DOM();
