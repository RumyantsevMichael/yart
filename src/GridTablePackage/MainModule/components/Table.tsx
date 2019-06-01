import * as React from 'react';

import { Datum } from '../types/Datum';
import { RowProps } from '../types/RowProps';
import { ColumnProps } from '../types/ColumnProps';
import { Header } from './Header';
import { List } from './List';
import { Row as DefaultRow } from './Row';

import * as css from './Table.pcss';

type ColumnElement<D extends Datum> = React.ReactElement<
    ColumnProps<D, keyof D>
>;

type Props<D extends Datum> = {
    data: D[];
    rowKeys: number[];
    children: Array<ColumnElement<D>>;
    rowComponent: React.ComponentType<RowProps<D>>;
    rowHeight: number;
    maxHeight?: number;
};

type State<D extends Datum> = {
    prevChildren: Array<ColumnElement<D>>;
    columns: Array<ColumnProps<D, keyof D>>;
    gridTemplateColumns: string;
};

export class Table<D extends Datum> extends React.PureComponent<
    Props<D>,
    State<D>
> {
    public static readonly defaultProps = {
        rowComponent: DefaultRow,
    };

    private static getDerivedStateFromProps<D extends Datum>(
        nextProps: Props<D>,
        prevState: State<D>,
    ): Partial<State<D>> | null {
        if (nextProps.children !== prevState.prevChildren) {
            const children: ColumnElement<D>[] = React.Children.toArray(
                nextProps.children,
            ) as any;
            const columnProps = children.map(Table.getProps);

            return {
                prevChildren: nextProps.children,
                columns: columnProps,
                gridTemplateColumns: columnProps
                    .map(column => {
                        if (column.width !== undefined) {
                            return column.width;
                        }

                        const minWidth =
                            column.minWidth === undefined
                                ? 'min-content'
                                : column.minWidth;
                        const maxWidth =
                            column.maxWidth === undefined
                                ? 'auto'
                                : column.maxWidth;

                        return `minmax(${minWidth}, ${maxWidth})`;
                    })
                    .join(' '),
            };
        }

        return null;
    }

    private static getProps<D extends Datum>(
        column: ColumnElement<D>,
    ): ColumnProps<D, keyof D> {
        return column.props;
    }

    public readonly state: State<D> = {
        prevChildren: [],
        columns: [],
        gridTemplateColumns: '',
    };
    private containerRef: React.RefObject<HTMLDivElement> = React.createRef();

    public render(): React.ReactNode {
        const {
            data,
            rowKeys,
            rowComponent: Row,
            maxHeight,
            rowHeight,
        } = this.props;
        const { columns, gridTemplateColumns } = this.state;

        return (
            <div
                ref={this.containerRef}
                className={css.component}
                style={{
                    maxHeight: maxHeight,
                    gridTemplateColumns: gridTemplateColumns,
                    gridAutoRows: rowHeight,
                }}
            >
                <Header<D> columns={columns} />
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
