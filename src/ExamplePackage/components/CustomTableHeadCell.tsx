import * as React from 'react';
import * as css from './CustomTableHeadCell.pcss';
import { ContentAligment } from '../types/ContentAligment';

type Props = {
    align?: ContentAligment;
    background? : string;
    children?: React.ReactNode;
}

export class CustomTableHeadCell extends React.PureComponent<Props> {
    render() {
        const {align, background} = this.props;

        return (
            <div
                className={css.component}
                style={{
                    justifyContent: align === undefined ? undefined : align,
                    background: background === undefined ? undefined : background,
                }}
            >
                {this.props.children}
            </div>
        )
    };
}
