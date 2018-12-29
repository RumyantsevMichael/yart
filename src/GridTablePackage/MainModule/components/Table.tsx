import * as React from 'react';
import { Row as DefaultRow } from './Row';
import { Datum } from '../types/Datum';
import { RowProps } from '../types/RowProps';
import { ColumnProps } from '../types/ColumnProps';
import * as css from './Table.pcss';
import { Header } from './Header';
import { List } from './List';

type ColumnElement<D extends Datum> = React.ReactElement<ColumnProps<D, keyof D>>;

type Props<D extends Datum> = {
    data: D[];
    rowKeys: number[];
    children: Array<ColumnElement<D>>;
    rowComponent: React.ComponentType<RowProps<D>>;
    maxHeight?: number;
};

type State<D extends Datum> = {
    prevChildren: Array<ColumnElement<D>>;
    columns: Array<ColumnProps<D, keyof D>>;
};

export class Table<D extends Datum> extends React.PureComponent<Props<D>, State<D>> {
    public static readonly defaultProps = {
        rowComponent: DefaultRow,
    };

    private static getDerivedStateFromProps<D extends Datum>(
        nextProps: Props<D>,
        prevState: State<D>,
    ): Partial<State<D>> | null {
        if (nextProps.children !== prevState.prevChildren) {
            const children: ColumnElement<D>[] = React.Children.toArray(nextProps.children) as any;
            const columnProps = children.map(Table.getProps);

            return {
                prevChildren: nextProps.children,
                columns: columnProps,
            };
        }

        return null;
    }

    private static getProps<D extends Datum>(column: ColumnElement<D>) {
        return column.props;
    }

    readonly state: State<D> = {
        prevChildren: [],
        columns: [],
    };

    render() {
        const { data, rowKeys, rowComponent: Row, maxHeight } = this.props;
        const columns = this.state.columns;
        let gridTemplateColumnsValue: string = '';

        columns.forEach((column) => {
            if (column.width !== undefined) {
                gridTemplateColumnsValue += `${column.width} `;
            } else {
                const minWidth = column.minWidth === undefined ? 'min-content' : column.minWidth;
                const maxWidth = column.maxWidth === undefined ? 'auto' : column.maxWidth;

                gridTemplateColumnsValue += `minmax(${minWidth}, ${maxWidth}) `;
            }
        });

        return (
            <div
                className={css.component}
                style={{
                    maxHeight: maxHeight,
                    gridTemplateColumns: gridTemplateColumnsValue,
                }}
            >
                <Header<D>
                    columns={columns}
                />
                <List<D>
                    data={data}
                    rowKeys={rowKeys}
                    rowComponent={Row}
                    columns={columns}
                />
            </div>
        );
    }
}
