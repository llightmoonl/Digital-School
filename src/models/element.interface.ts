import {AttributesType} from "@types";

export interface Element {
    render(): void
}

export interface Property {
    textContent?: string,
    classList?: string,
    attributes?: AttributesType,
}