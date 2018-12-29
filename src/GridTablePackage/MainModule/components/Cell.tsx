import * as React from 'react';
import { CellProps } from '../types/CellProps';
import * as css from './Cell.pcss';
import { Datum } from '../types/Datum';

type Props<D extends Datum, F extends keyof D> = CellProps<D, F>;

export class Cell<D extends Datum, F extends keyof D> extends React.PureComponent<Props<D, F>> {
    render() {
        return (
            <div className={css.component}>
                {this.props.value}
            </div>
        );
    }
}
