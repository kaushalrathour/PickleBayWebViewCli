import { JSX } from "react";
export interface Padding {
    paddingHorizontal: number;
    paddingVertical: number;
}

export interface ContainerProp {
    children: JSX.Element;
    padding?: Padding;
    backgroundColor?: string;
}