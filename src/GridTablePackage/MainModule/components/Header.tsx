import * as React from 'react';
import { Datum } from '../types/Datum';
import { ColumnProps } from '../types/ColumnProps';
import * as css from './Header.pcss';
import { classList } from '../common/classList';
import { PinnedPlacement } from '../types/PinnedPlacement';

type Props<D extends Datum> = {
    columns: Array<ColumnProps<D, keyof D>>;
};

export class Header<D extends Datum> extends React.PureComponent<Props<D>> {
    render() {
        return this.props.columns.map((column, columnIndex) => (
            <div
                key={columnIndex}
                className={classList({
                    [css.columnsPinnedLeft]: column.pinned === PinnedPlacement.left,
                    [css.columnsPinnedRight]: column.pinned === PinnedPlacement.right,
                })}
            >
                {column.renderHead(column)}
            </div>
        ));
    }
}
