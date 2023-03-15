import { MouseEvent} from "react";
export interface IData {
    label: string;
    value: number;
  }
  
  export interface IGroupedData {
    label: string;
    values: number[];
    colors: string;
  }

 export interface BarProps {
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    onMouseEnter: (e: MouseEvent<SVGPathElement>) => void;
    onMouseLeave: () => void;
  }
  
  export interface Tooltip {
    x: number;
    y: number;
    index: number;
  }