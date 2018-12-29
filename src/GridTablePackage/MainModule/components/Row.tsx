import * as React from 'react';
import { RowProps } from '../types/RowProps';
import { Datum } from '../types/Datum';
import * as css from './Row.pcss';
import { classList } from '../common/classList';
import { PinnedPlacement } from '..';

export type RowComponentProps<D extends Datum> = RowProps<D>;

export class Row<D extends Datum> extends React.PureComponent<RowComponentProps<D>> {
    render() {
        const { datum, rowKey, index: rowIndex, columns } = this.props;

        return columns.map((column, columnIndex) => {
            const value = datum === undefined ? undefined : datum[column.field];

            return (
                <div
                    key={columnIndex}
                    className={classList({
                        [css.component]: true,
                        [css.columnsPinnedLeft]: column.pinned === PinnedPlacement.left,
                        [css.columnsPinnedRight]: column.pinned === PinnedPlacement.right,
                    })}
                >
                    {column.renderCell({
                        rowKey: rowKey,
                        rowIndex: rowIndex,
                        value: value,
                    })}
                </div>
            );
        });

    }
}
