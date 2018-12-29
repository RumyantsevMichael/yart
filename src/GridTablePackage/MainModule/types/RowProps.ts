import { ColumnProps } from './ColumnProps';
import { Datum } from './Datum';

export type RowProps<D extends Datum> = {
    rowKey: number;
    datum: D;
    index: number;
    columns: ColumnProps<D, keyof D>[];
};
