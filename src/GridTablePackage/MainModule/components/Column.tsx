import * as React from 'react';
import { Head } from './Head';
import { Cell } from './Cell';
import { Datum } from '../types/Datum';
import { ColumnProps } from '../types/ColumnProps';
import { CellProps } from '../types/CellProps';

type Props<D extends Datum, F extends keyof D> = ColumnProps<D, F>;

export class Column<D extends Datum, F extends keyof D> extends React.PureComponent<Props<D, F>> {
    public static readonly defaultProps = {
        renderHead: <D extends Datum, F extends keyof D>(props: ColumnProps<D, F>) => <Head {...props}/>,
        renderCell: <D extends Datum, F extends keyof D>(props: CellProps<D, F>) => <Cell {...props}/>,
    };

    render() {
        return null;
    }
}
