import * as React from 'react';
import * as css from './CustomTableCell.pcss';
import { ContentAlignment } from '../types/ContentAlignment';

type Props = {
    align?: ContentAlignment;
    children?: React.ReactNode;
};

export class CustomTableCell extends React.PureComponent<Props> {
    render() {
        const { align } = this.props;

        return (
            <div
                className={css.component}
                style={{
                    justifyContent: align === undefined ? undefined : align,
                }}
            >
                {this.props.children}
            </div>
        );
    }
}
