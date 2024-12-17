import {Element} from "@/scripts/CreateElement/interface.ts";
import {PropertyElementType} from "@/scripts/CreateElement/types.ts";


export class CreateElement implements Element {
    private readonly tag : string;
    private readonly propertyElement : PropertyElementType;

    public constructor(tag: string, propertyElement?: PropertyElementType) {
        this.tag = tag;
        this.propertyElement = propertyElement;
    }

    private setAttributeElement(element: HTMLElement) {
        const attributesElement = this.propertyElement?.attributes ? this.propertyElement.attributes : '';

        if(attributesElement){
            Object
                .keys(attributesElement)
                .forEach((key: string) => {
                    element.setAttribute(key, attributesElement[key] as string)
                })
        }
    }

    public render(): HTMLElement {
        const element: HTMLElement = document.createElement(this.tag);

        element.innerHTML = this.propertyElement?.textContent ? this.propertyElement.textContent : '';
        this.propertyElement?.classList ? element.classList.add(this.propertyElement.classList) : '';
        this.propertyElement?.attributes ? this.setAttributeElement(element) : '';

        return element;
    }
}


