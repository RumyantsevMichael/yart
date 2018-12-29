import * as React from 'react';
import { CellProps } from './CellProps';
import { PinnedPlacement } from './PinnedPlacement';
import { Datum } from './Datum';

export type ColumnProps<D extends Datum, F extends keyof D> = {
    name: string;
    field: F;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    pinned?: PinnedPlacement;
    renderHead: (props: ColumnProps<D, F>) => React.ReactElement<ColumnProps<D, F>>;
    renderCell: (props: CellProps<D, F>) => React.ReactElement<CellProps<D, F>>;
};
