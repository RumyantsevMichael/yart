import { Datum } from './Datum';

export type CellProps<D extends Datum, V extends keyof D> = {
    rowKey: number;
    rowIndex: number;
    value: D[V];
};
