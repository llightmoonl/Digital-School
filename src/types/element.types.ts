import {Property} from "@models";

export type PropertyElementType = Property | undefined;
export type AttributesType = {[key: string] : string | undefined};
export type Menu = {name: string, link: string}[];