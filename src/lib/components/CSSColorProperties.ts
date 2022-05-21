export class CSSColorProperties {

    colors: string[];

    // for less boilerplate when creating job colors. can do later
    constructor(_propertyNames: string[], _element: HTMLElement) {
        _propertyNames.forEach( ( propertyName ) => {
            let color = _element.style.getPropertyValue(propertyName);
            // create object
        })
        
    }

}