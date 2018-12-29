import * as React from 'react';
import { Row as DefaultRow } from './Row';
import { Datum } from '../types/Datum';
import { RowProps } from '../types/RowProps';
import { ColumnProps } from '../types/ColumnProps';

type Props<D extends Datum> = {
    data: D[];
    rowKeys: number[];
    rowComponent: React.ComponentType<RowProps<D>>;
    columns: ColumnProps<D, keyof D>[];
};

export class List<D extends Datum> extends React.PureComponent<Props<D>> {
    public static readonly defaultProps = {
        rowComponent: DefaultRow,
    };

    render() {
        const { data, rowKeys, rowComponent: Row, columns } = this.props;

        return rowKeys.map((key, index) => (
            <Row
                key={key}
                rowKey={key}
                index={index}
                datum={data[key]}
                columns={columns}
            />
        ));
    }
}
