import * as React from 'react';
import { Datum } from '../types/Datum';
import { ColumnProps } from '../types/ColumnProps';

type Props<D extends Datum, F extends keyof D> = ColumnProps<D, F>;

export class Head<D extends Datum, F extends keyof D> extends React.Component<
    Props<D, F>
> {
    render() {
        return <div>{this.props.name}</div>;
    }
}
